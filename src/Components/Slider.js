import React from 'react'
import "./style.css"

const Slider = () => {
    return (
        <div>
            <main>
                <div className="slider1">
                    <p id="s1p"> I am</p>
                    <h1 id="s1h"> Adeel Javed </h1>
                    <p id="s1p"> WebDeveloper - ReactJS</p>
                </div>
                <div className="div2">
                    <p id="s2p"> Highly motivated and dedicated
                        professional, recently completed
                        graduation in Computer Science
                        from University of Engineering
                        and Technology; poised to excel
                        as Web Developer. Skilled in presenting top-notch solutions, developing APIs to support
                        mobile functionalities, and designing
                        interfaces to enhance user’s
                        experience. Equipped with a strong
                        understanding of agile and other
                        software development processes. Expert at conducting testing
                        procedures and assessing
                        responses to optimize procedures.
                        Articulate communicator with well-developed aptitude to foster strong
                        relationships with colleagues, staff,
                        clients, and executive management.
                        Technical proficient in Microsoft
                        suite, Visual Studio Code, and
                        Sublime.
                    </p>
                </div>
                <div className="div3">
                    <img src="images/main.jpg" id="s3i" />
                </div>

            </main>
        </div>
    )
}

export default Slider
