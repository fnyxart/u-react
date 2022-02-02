function Guest(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Guest;
