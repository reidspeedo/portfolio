import { usePhysicsWorld } from '@/lib/usePhysicsWorld';
import { PhysicsBall } from '@/components/physics/PhysicsBall';
import { useRouter } from 'next/navigation';
import { CircleConfig } from '@/lib/circles';

export type MemojiConfig = {
  size: number;
  content: React.ReactNode;
};

const CONTAINER_WIDTH = 700;
const CONTAINER_HEIGHT = 600;
const WALL_THICKNESS = 100;

export function PhysicsContainer({
  balls,
  memojiConfig,
  children,
}: {
  balls: CircleConfig[];
  memojiConfig: MemojiConfig;
  children?: React.ReactNode;
}) {
  const { sceneRef, ballStates, memojiState, isClient } = usePhysicsWorld({ balls, memojiConfig });
  const router = useRouter();

  if (!isClient) {
    return (
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sceneRef}
      className="fixed inset-0 pointer-events-auto"
      style={{ zIndex: 1, background: 'transparent' }}
    >
      {/* Render memoji as a static physics ball */}
      {memojiState && (
        <PhysicsBall
          key="memoji"
          x={memojiState.x}
          y={memojiState.y}
          angle={memojiState.angle}
          size={memojiState.size}
          color="#222"
          content={memojiState.content}
        />
      )}
      {ballStates.map((obj) => {
        const circle = balls.find(b => b.id === obj.id);
        if (!circle) return null;

        const CircleComponent = circle.component || PhysicsBall;
        const props = {
          x: obj.body.position.x,
          y: obj.body.position.y,
          angle: obj.body.angle,
          size: obj.size,
          color: obj.color,
          ...circle.props,
        };

        return <CircleComponent key={obj.id} {...props} />;
      })}
    </div>
  );
} 