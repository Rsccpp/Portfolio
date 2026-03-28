export default function slider() {
  return (
    <div className="slider">
      <button className="prev">&#10094;</button>

      <div className="slider-track">
        <div className="card">Box 1</div>
        <div className="card">Box 2</div>
        <div className="card">Box 3</div>
        <div className="card">Box 4</div>
      </div>

      <button className="next">&#10095;</button>
    </div>
  );
}
