import React from "react";

function Header() {
  return (
    <div className="main-Header">
      <div>
        <p>Icon</p>
      </div>

      <div className="main-nav-links">
        <ul>
          <Link>
            <li>To-Do</li>
          </Link>
          <Link>
            <li>Eisen - Hower Matrix</li>
          </Link>
          <Link>
            <li>Reapeated Task</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
