import useMouse from '@react-hook/mouse-position';

export const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '20px',
      backgroundColor: '#23272a',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      backgroundColor: '#d62828',
      color: '#23272a',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 12,
      y: mouseYPosition + 12,
    },
    network: {
      opacity: 1,
      backgroundColor: '#7289da',
      color: '#23272a',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 12,
      y: mouseYPosition + 12,
    },
    dev: {
      opacity: 1,
      backgroundColor: '#ffffff',
      color: '#ffffff',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 12,
      y: mouseYPosition + 12,
    },
    avatar: {
      opacity: 1,
      backgroundColor: '#7289da',
      color: '#23272a',
      height: 130,
      width: 130,
      fontSize: '32px',
      x: mouseXPosition + 144,
      y: mouseYPosition - 144,
    },
    github: {
      opacity: 1,
      backgroundColor: '#343a40',
      color: '#ffffff',
      height: 64,
      width: 64,
      fontSize: '32px',
      x: mouseXPosition + 12,
      y: mouseYPosition + 12,
    },
  };
};

export const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 28,
};
