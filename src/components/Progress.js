function Progress({ index, numQuestions, points }) {
  return (
    <header className="progress">
      <p>
        Question
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>{points}</strong> / X
      </p>
    </header>
  );
}

export default Progress;
