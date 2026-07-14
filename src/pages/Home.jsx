import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title =
            "Tyreek Outing's Tenacious Octopus | ITIS3135 | Home";
    }, []);

    return (
        <>
            <h2>Home</h2>

            <p>
                Welcome to my ITIS 3135 course website. This site serves as a collection
                of my work throughout the semester, including projects, assignments, and
                activities completed in Front-End Web Application Development. As I continue
                learning HTML, CSS, JavaScript, and modern web design principles, I will use
                this website to showcase my progress and demonstrate the skills I develop
                during the course.
            </p>

            <p>
                This semester I am focused on improving my web development abilities and
                creating websites that are both functional and visually appealing. My course
                theme is centered around the Tenacious Octopus, which reflects creativity,
                adaptability, and persistence. Throughout the semester, I will continue adding
                new content and projects to this site while exploring different aspects of
                front-end development and responsive web design.
            </p>
        </>
    );
}
export default Home;