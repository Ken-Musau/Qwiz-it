import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  useEffect(() => {
    const interval = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
