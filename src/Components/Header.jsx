import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 border-bottom">
      <div className="container-fluid px-4">
        {/* Brand Logo / Title */}
        <a className="navbar-brand fw-bold fs-4 me-4" href="#">
          StudentPortal
        </a>

        {/* Toggler button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links & Right Side Controls */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Main Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <a className="nav-link text-dark" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-dark" href="#">
                Students
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-dark" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-dark" href="#">
                Reports
              </a>
            </li>
          </ul>

          {/* Right Section: Settings Dropdown & Search Form */}
          <div className="d-flex align-items-center gap-3">
            {/* Settings Dropdown */}
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-menu-item dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-menu-item dropdown-item" href="#">Account</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-menu-item dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>

            {/* Search Input and Button */}
            <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="input-group-text bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search text-muted"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
              <button className="btn btn-primary px-3" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}