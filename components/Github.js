import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

import { GithubContext } from '../libs/github';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });

  return (
    <animated.div className="text-8xl text-bold text-center">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

export const Commit = ({ onEnter, onLeave }) => {
  const { $commits } = useContext(GithubContext);

  return (
    <div
      className="flex item-center flex-col justify-center relative dark:text-white p-9 rounded-2xl shadow-xl hover:scale-110 transition-all bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/mesh.png)` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <FaPlus className="text-[26px] absolute right-7 top-3" />
      <Number n={$commits} />
      <h2 className="text-bold text-2xl font-poppins">Nombre de commits</h2>
    </div>
  );
};

export const Repos = () => {
  const { $repos } = useContext(GithubContext);

  return (
    <div
      className="flex item-center flex-col justify-center relative dark:text-white p-9 rounded-2xl shadow-xl hover:scale-110 transition-all  bg-no-repeat"
      style={{ backgroundImage: `url(/mesh-2.png)` }}
    >
      <FaPlus className="text-[26px] absolute right-7 top-3" />
      <Number n={$repos} />
      <h2 className="text-bold text-2xl font-poppins">Nombre de projet</h2>
    </div>
  );
};
