import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <QuizContext.Provider>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz Context has been used outside the quiz provider");
  return context;
}

export { QuizProvider, useQuiz };
