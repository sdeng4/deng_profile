import './About.css'
import aboutImage from '../../assets/about.png'

function About(){
    const skills=['HTML','REACT','JAVASCRIPT','CSS','NODE.JS'];

    return(
        <section id="about" className='about-section'>
            <div className='about-header'>
                <span className='about-number'>01</span>
                <div className='about-line'></div>
                <span className='about-label'>ABOUT ME</span>
            </div>

            <div className='about-content'>
                <div className='about-image'>
                    <img src={aboutImage} alt="About"/>
                </div>
            

                <div className='about-text'>
                    <h2>
                        Building practical
                        <br/>
                        software experiences
                    </h2>

                    <p>
                        Computer Science student at the University of Houston with hands on experience in front-end development throughcoursework and personal projects, and foundational knowledge of full-stack technologies. Interested in building efficient,
                        scalable applications and continuously improving software engineering skills.
                    </p>

                    <div className='about-skills'>
                        <p className='skills-label'>SKILLS</p>
                        <div className='skills-list'>
                            {skills.map((skill) => (
                                <span key={skill} className="skill-tag">
                                {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;