function Options({ question, dispatch, answer }) {
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              index === question.correctOption ? "correct" : "wrong"
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={answer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
