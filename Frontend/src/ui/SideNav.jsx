function SideNav() {
  return (
    <aside className="sidenav">
      <div>
        <span>Filter Options</span>
        <ul className="x">
          <li>Best Books</li>
          <li>Most Rated Books</li>
          <li>Featured Books</li>
          <li>Newest Books</li>
          <li>Watch History</li>
        </ul>
      </div>
      <br />

      <span>Category</span>
      <br />
      <div className="d">
        <input type="checkbox" />
        <span>Action</span>
        <br />
        <input type="checkbox" />
        <span>Romance</span>
        <br />
        <input type="checkbox" />
        <span>History</span>
        <br />
        <input type="checkbox" />
        <span>Drama</span>
        <br />
        <input type="checkbox" />
        <span>Crime</span>
        <br />
        <input type="checkbox" />
        <span>Sciencefictio</span>
        <br />
        <input type="checkbox" />
        <span>Philosiphy</span>
        <br />
        <input type="checkbox" />
        <span>Medical</span>
        <br />
        <input type="checkbox" />
        <span>Programming</span>
      </div>
    </aside>
  );
}

export default SideNav;
