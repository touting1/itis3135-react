import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Tyreek Outing's Tenacious Octopus | ITIS3135</h1>

            <nav>
                <Link to="/">Home</Link>
                {" | "}
                <Link to="/introduction">Introduction</Link>
                {" | "}
                <Link to="/contract">Contract</Link>
                {" | "}
                <Link to="/about">About</Link>
            </nav>

            <nav className="secondary-nav">
                <a href="YOUR-ORIGINAL-SITE-URL">Crappy Site</a>
                {" | "}
                <a href="YOUR-ORIGINAL-SITE-URL">Hobby</a>
                {" | "}
                <a href="YOUR-ORIGINAL-SITE-URL">Mascot Company</a>
            </nav>
        </header>
    );
}

export default Header;