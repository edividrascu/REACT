
export function Age({ age = 100 }) {
  return (
    <div>
      {age >= 18 ? (
        <p>Your age is: {age}.</p>
      ) : (
        <p><strong>You are very young!</strong></p>
      )}
    </div>
  );
}

export default Age;
