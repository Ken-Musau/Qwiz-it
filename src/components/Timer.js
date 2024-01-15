import { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const interval = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
