import React from 'react';

function logout() {
    sessionStorage.clear();
    return window.location.replace("/");
};

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="d-flex flex-grow-1">
                <span className="w-100 d-lg-none d-block" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/"
                                className={
                                    window.location.pathname === "/"
                                        ? "nav-link active menu-item btn btn-outline-secondary"
                                        : "nav-link menu-item btn btn-outline-secondary"
                                }>Dashboard</a>
                        </li>
                    </ul>
                </div>

                <div class="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ms-auto flex-nowrap">
                    <li className="nav-item">
                        {!props.loggedin ? (
                            <a href="/login" className="btn nav-link menu-item nav-active">Login</a>
                        ) : (
                            <button onClick={logout} className="btn nav-link menu-item nav-active">Logout</button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}