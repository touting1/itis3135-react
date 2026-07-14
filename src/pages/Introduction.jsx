import { useEffect } from "react";

function Introduction() {
    useEffect(() => {
        document.title =
            "Tyreek Outing's Tenacious Octopus | ITIS3135 | Introduction";
    }, []);
    return (
        <>
             <h2>Introduction</h2>

            <h3 className="intro-name">
                Tyreek Outing's | Tenacious Octopus
            </h3>

            <figure>
                <img
                    src="/images/IMG_0301.jpg"
                    alt="Tyreek Outing"
                    width="300"
                />

                <figcaption>
                    My Pets
                </figcaption>
            </figure>

            <p className="acknowledgment">
                I understand that what I put here is publicly available on the web
                and I won’t put anything here I don’t want the public to see. -
                TJO - 6/27/2026
            </p>

            <ul>
                <li>
                    <strong>Personal Background:</strong> I am a 27 year old
                    “Adult student” attending UNCC. I am also a Military Veteran
                    using my benefits to further my education and achieve some
                    goals I always had (i.e obtaining a college degree) from a
                    young age.
                </li>

                <li>
                    <strong>Professional Background:</strong> I have never worked
                    in a technical field that requires me to do anything I'm
                    currently learning for my degree. However, I do have some
                    mechanical experience and other blue collar job experience.
                </li>

                <li>
                    <strong>Academic Background:</strong> Computer Science,
                    Senior, class of Fall 2027.
                </li>

                <li>
                    <strong>Primary Computer:</strong> Windows Surface Pro,
                    Windows, Laptop, My home office.
                </li>

                <li>
                    <strong>Courses I’m Taking:</strong>

                    <ul>
                        <li>
                            <b>MATH1242 - Calculus II:</b> I’m taking this course
                            because it is a degree requirement.
                        </li>

                        <li>
                            <b>
                                ITIS3135 - Front-End Web Application Development:
                            </b>{" "}
                            I’m taking this course to brush up on my front-end
                            development skills.
                        </li>

                        <li>
                            <b>ITIS3310 - Software Arch & Design:</b> I’m taking
                            this course because I thought it would help further
                            my knowledge and prepare me for post graduation.
                        </li>
                    </ul>
                </li>

                <li className="no-bullet">
                    <blockquote>
                        “Just 'cause you pour syrup on something doesn't make it
                        pancakes.”
                    </blockquote>

                    <cite>- Samuel L. Jackson</cite>
                </li>
            </ul>
        </>
    );
}

export default Introduction;