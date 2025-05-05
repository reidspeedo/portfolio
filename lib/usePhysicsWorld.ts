import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

export type BallConfig = {
  id: string;
  size: number;
  color: string;
  content?: React.ReactNode;
};

export type MemojiConfig = {
  size: number;
  content: React.ReactNode;
};

const CONTAINER_WIDTH = 700;
const CONTAINER_HEIGHT = 600;
const WALL_THICKNESS = 100;

export function usePhysicsWorld({
  balls,
  memojiConfig,
}: {
  balls: BallConfig[];
  memojiConfig: MemojiConfig;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [ballStates, setBallStates] = useState<any[]>([]);
  const [memojiState, setMemojiState] = useState<any>(null);
  const wallsRef = useRef<Matter.Body[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Helper to get container center
  const getContainerCenter = () => ({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!sceneRef.current || !isClient) return;

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 1 } });
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      },
    });

    // Add mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.8,
        render: {
          visible: false,
        },
      },
    });
    Matter.World.add(engine.world, mouseConstraint);

    // Initial container center
    const { x: containerX, y: containerY } = getContainerCenter();

    // Create container walls
    const containerWalls = [
      // Left wall
      Matter.Bodies.rectangle(
        containerX - CONTAINER_WIDTH / 2 - WALL_THICKNESS / 2,
        containerY,
        WALL_THICKNESS,
        window.innerHeight,
        { isStatic: true }
      ),
      // Right wall
      Matter.Bodies.rectangle(
        containerX + CONTAINER_WIDTH / 2 + WALL_THICKNESS / 2,
        containerY,
        WALL_THICKNESS,
        window.innerHeight,
        { isStatic: true }
      ),
      // Bottom wall
      Matter.Bodies.rectangle(
        containerX,
        containerY + CONTAINER_HEIGHT / 2 + WALL_THICKNESS / 2,
        CONTAINER_WIDTH + WALL_THICKNESS * 2,
        WALL_THICKNESS,
        { isStatic: true }
      ),
    ];
    Matter.World.add(engine.world, containerWalls);
    wallsRef.current = containerWalls;

    // Add static memoji circle in the center
    const memojiBody = Matter.Bodies.circle(
      containerX,
      containerY,
      memojiConfig.size / 2,
      {
        isStatic: true,
        render: { visible: false },
      }
    );
    Matter.World.add(engine.world, memojiBody);

    // Create ball bodies
    const ballObjs = balls.map((ball, i) => {
      const randomX = containerX + (Math.random() - 0.5) * (CONTAINER_WIDTH - ball.size);
      const startY = containerY - CONTAINER_HEIGHT - ball.size - (i * 200);

      const body = Matter.Bodies.circle(
        randomX,
        startY,
        ball.size / 2,
        {
          restitution: 0.3,
          friction: 0.9,
          frictionAir: 0.01,
          density: 0.9,
          render: { visible: false },
        }
      );

      setTimeout(() => {
        Matter.World.add(engine.world, body);
      }, i * .01);

      return {
        ...ball,
        body,
      };
    });
    setBallStates(ballObjs);
    setMemojiState({
      x: memojiBody.position.x,
      y: memojiBody.position.y,
      angle: memojiBody.angle,
      size: memojiConfig.size,
      content: memojiConfig.content,
      body: memojiBody,
    });

    // Start the engine
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Animation loop
    let frame = 0;
    let running = true;
    const update = () => {
      if (!running) return;
      setBallStates(states =>
        states.map(obj => ({
          ...obj,
          position: { ...obj.body.position },
          angle: obj.body.angle,
        }))
      );
      setMemojiState((state: any) =>
        state
          ? {
              ...state,
              x: memojiBody.position.x,
              y: memojiBody.position.y,
              angle: memojiBody.angle,
            }
          : state
      );
      frame = requestAnimationFrame(update);
    };
    update();

    // Handle window resize
    const handleResize = () => {
      const { x: newX, y: newY } = getContainerCenter();
      const wallPositions = [
        [newX - CONTAINER_WIDTH / 2 - WALL_THICKNESS / 2, newY],
        [newX + CONTAINER_WIDTH / 2 + WALL_THICKNESS / 2, newY],
        [newX, newY + CONTAINER_HEIGHT / 2 + WALL_THICKNESS / 2],
      ];
      wallsRef.current.forEach((wall, i) => {
        Matter.Body.setPosition(wall, {
          x: wallPositions[i][0],
          y: wallPositions[i][1],
        });
      });
      setBallStates(states => {
        if (states.length === 0) return states;
        const oldCenter = {
          x: states[0].body.position.x,
          y: states[0].body.position.y - (-CONTAINER_HEIGHT / 2 + states[0].size / 2),
        };
        const dx = newX - oldCenter.x;
        const dy = newY - oldCenter.y;
        states.forEach(obj => {
          Matter.Body.setPosition(obj.body, {
            x: obj.body.position.x + dx,
            y: obj.body.position.y + dy,
          });
        });
        return states;
      });
      Matter.Body.setPosition(memojiBody, {
        x: newX,
        y: newY,
      });
      render.options.width = window.innerWidth;
      render.options.height = window.innerHeight;
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [balls, memojiConfig, isClient]);

  return { sceneRef, ballStates, memojiState, isClient };
} 