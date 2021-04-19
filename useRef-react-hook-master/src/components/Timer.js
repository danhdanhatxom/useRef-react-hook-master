// import React, { useState, useEffect } from "react";

// let interval;
// const Timer = () => {
//   const [timer, setTimer] = useState(0);
//   useEffect(() => {
//     interval = setInterval(() => {
//       setTimer(timer => timer + 1);
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <p>Timer: {timer}</p>
//       <button onClick={() => clearInterval(interval)}>Clear</button>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Timer: {timer}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </div>
  );
};

export default Timer;
