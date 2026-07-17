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
                <a
                    href="https://webpages.charlotte.edu/touting1/itis3135/stuff/mVnytrain%2065$$.htm"
                >
                    Crappy Site
                </a>
                {" | "}
                <a href="https://webpages.charlotte.edu/touting1/itis3135/hobby/">
                    Hobby
                </a>
                {" | "}
                <a href="https://webpages.charlotte.edu/touting1/itis3135/tenaciousoctopus/">
                    Mascot Company
                </a>
            </nav>
        </header>
    );
}

export default Header;