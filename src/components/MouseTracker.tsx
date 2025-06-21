import AnimatedCursor from 'react-animated-cursor';
import { isMobile } from 'react-device-detect';

const MouseTracker = () => {
  return (
    !isMobile && (
      <AnimatedCursor
        innerSize={9}
        outerSize={34}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          zIndex: 9999,
        }}
        outerStyle={{
          border: '1.5px solid var(--cursor-color)',
          zIndex: 9999,
        }}
      />
    )
  );
};

export default MouseTracker;
