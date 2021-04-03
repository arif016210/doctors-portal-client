import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="a">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="a">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="a">Detal Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="a">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="a">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="a">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;