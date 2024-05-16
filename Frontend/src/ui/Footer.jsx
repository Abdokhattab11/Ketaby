import Logo from "./Logo";
function Footer() {
  return (
    <footer className="footer">
      <div style={{ borderRight: "1px solid #ccc", padding: "2rem" }}>
        <Logo />
        <div>
          <p className="footer-desc">
            Dive into a world of stories and endless <br /> possibilities at our
            library! Explore a vast collection of books in all genres and
            formats.
          </p>
          <p className="footer-rights">&copy;2024 All Rights Reserved.</p>
        </div>
      </div>

      <div
        className="mid-content flex flex-col align-center"
        style={{ padding: "2rem" }}
      >
        <h3>Company</h3>
        <ul className="flex flex-col align-center">
          <li>
            <a href="#">About US</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>

      <div style={{ padding: "2rem" }}>
        <img src="../map.png" alt="" className="map-photo" />
      </div>
    </footer>
  );
}

export default Footer;
