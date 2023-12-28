import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("action unkown");
  }
}

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  console.log(questions);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const resp = await fetch("http://127.0.0.1:8000/questions");
        const data = await resp.json();

        if (resp.ok) {
          dispatch({ type: "dataReceived", payload: data });
        } else {
          dispatch({ type: "dataFailed" });
        }
      } catch (err) {
        console.error("Failed fetching data", err);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
      </Main>
    </div>
  );
}
