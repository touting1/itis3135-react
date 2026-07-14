import { useEffect } from "react";

function About() {
    useEffect(() => {
        document.title =
            "Tyreek Outing's Tenacious Octopus | ITIS3135 | About";
    }, []);
    return (
        <>
            <h2>About Page</h2>

            <p>
                This page is built in part to demonstrate work for the Charlotte
                class ITIS3135 - Front-End Web Application Development for those
                sections run by Mr. von Briesen. You may find additional
                information about this course at{" "}
                <a
                    href="https://divonbriesen.github.io/web123/"
                    target="_blank"
                    rel="noreferrer"
                >
                    ITIS3135 Course Information
                </a>
            </p>

            <p>
                This course seeks to provide students relevant experience in
                front-end web application development by building multiple
                websites using a variety of tools and techniques.
            </p>

            <h3>Tools Used in This Course</h3>

            <ul>
                <li>VS Code</li>
                <li>Emmet within VS Code</li>
                <li>SFTP via FileZilla</li>
                <li>Git via GitHub Desktop and GitHub.com</li>
                <li>Various Browser Tools</li>
                <li>The Accumulus Validator</li>
            </ul>

            <h3>Sites Developed During This Course</h3>

            <ul>
                <li>A personal home portfolio</li>
                <li>This course site</li>
                <li>
                    A design firm site representing a fictitious consulting firm
                </li>
                <li>
                    A crappy page designed to demonstrate poor web design practices
                </li>
                <li>A whimsical product company website</li>
                <li>A student/colleague/peer management tool</li>
                <li>A client project website</li>
            </ul>
        </>
    );
}

export default About;