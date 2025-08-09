const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="nav-left">
        <h1>My App</h1>
      </div>
      <div className="nav-right">
        <div className="actions">
          <button className="nav-button" aria-label="Actions">Actions</button>
        </div>
        <div className="about">
          <button className="nav-button" aria-label="About">About</button>
        </div>
        <div className="help">
          <button className="nav-button" aria-label="Help">Help</button>
        </div>
        <div className="history">
          <button className="nav-button" aria-label="History">History</button>
        </div>
        <div className="account">
          <button className="nav-button" aria-label="Account" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" style={{ width: 32, height: 32 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
