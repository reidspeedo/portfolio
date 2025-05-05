import { MemojiSprite } from '../MemojiSprite';

export function MemojiCircle({ size = 240 }: { size?: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid #eee',
        background: '#222',
        transform: `translate(-50%, -50%)`,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <MemojiSprite
        spriteSheet="/memoji-spritesheet.png"
        frameCount={324}
        frameWidth={680}
        frameHeight={480}
      />
    </div>
  );
} 