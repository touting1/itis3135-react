import { useEffect } from "react";
import { Link } from "react-router-dom";

function Contract() {
    useEffect(() => {
        document.title =
            "Tyreek Outing's Tenacious Octopus | ITIS3135 | Contract";
    }, []);
    return (
        <>
            <h2>Contract</h2>

            <p>
                I,{" "}
                <Link to="/introduction" className="contract-link">
                    Tyreek J. Outing
                </Link>{" "}
                agree to abide by the terms of the course contract in my Summer
                2026, ITIS3135, Front-End Web Application Development with my
                instructor, Professor D.I. von Briesen.
            </p>

            <p>
                I am a current Senior here at UNCC, majoring in Computer Science.
                I never knew what coding was when I was in High School, and I
                never thought I would be able to do such a thing. I recently
                discovered coding/computer science my first semester of college
                and I have loved it ever since.
            </p>

            <p>
                Signed: <em>Tyreek J. Outing, 5/26/2026</em>
            </p>
        </>
    );
}

export default Contract;