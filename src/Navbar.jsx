import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="Navbar">
      <div className="nav-left">
        <h1>Deep-Detect</h1>
      </div>
      <div className="nav-right">
        <div className="actions">
          <button className="nav-button" onClick={() => navigate("/")}>Spam Check</button>
        </div>
        <div className="about">
          <button className="nav-button" onClick={() => navigate("/about")}>About</button>
        </div>
        <div className="help">
          <button className="nav-button" onClick={() => navigate("/help")}>Help</button>
        </div>
        <div className="history">
          <button className="nav-button" onClick={() => navigate("/history")}>History</button>
        </div>
        <div className="account">
  <button
    className="nav-button"
    onClick={() => navigate("/account")}
    style={{ display: "flex", alignItems: "center", gap: "7px" }}
  >
    {/* SVG user icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 2 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path d="M4 21v-2a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2" />
    </svg>
    Account
  </button>
</div>


      </div>
    </nav>
  );
};

export default Navbar;
