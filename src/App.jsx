import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from "./img.jpg";
import git from "./git.png";
import linkedin from "./linkedin.png";
import about from "./about.jpg";
import pj1 from "./post_office.png";
import pj2 from "./mypro.png";
import { FaGithub } from "react-icons/fa";

function App() {

  return (
    <>
    <div className='App'>
      <header className='header'>

        <p>Deng</p>

        <nav>
          <a className='a_nav' href="">Class</a>
          <a className='a_nav' href="">Tools</a>
          <a className='a_nav' href="">GitHub</a>
          <a className='a_nav' href="">Linkedin</a>
        </nav>
      </header>
{/*----------------------------------------------------------------------------------------------------------------------- */}

      <main className='main'>
        <div className='main_first'>
          <div className='div_name'>
            <h1 className='int_name'>SenLiang Deng</h1>
            <p className='int'>
            Computer Science student at the University of Houston.
            </p>
            <img src={git} alt="" className='img_GL'/>
            <img src={linkedin} alt="" className='img_GL'/>
          </div>

          <img src={img} alt="" className='img'/>

        </div>

{/*----------------------------------------------------------------------------------------------------------------------- */}

        <div className='main_about'>
          <p className='about'>About Me</p>

          <div className='about_content'>
            <img src={about} alt="" className='about_img'/>



            <div className='skills'>
              <p>
                Computer Science student at the University of Houston with hands-on experience in front-end development through coursework and personal projects, and foundational knowledge of full-stack technologies. Interested in building efficient, scalable applications and continuously improving software engineering skills.
              </p>

              <div className='skills_list'>
                <ul>
                  <li>HTML</li>
                  <li>REACT</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <ul>
                  <li>CSS</li>
                  <li>NODE.JS</li>
                </ul>

              </div>

            </div>

          </div>

        </div>
{/*----------------------------------------------------------------------------------------------------------------------- */}


        <div className='main_exp'>
          <p className='exp'>Experience</p>
          <div className='exp_example'>
            <div className='button_font'>
              <button className='button_exp'>Joyy.Inc</button>
              <button className='button_exp'>other</button>
            </div>
            <div className='exp_info'>
              <div className='exp_title_and_date'>
                <span className='exp_info_title'>JOYY INC, Software customer service (GUANGZHOU, CHINA)</span>
                <span className='exp_info_date'>Jan 2015 - Aug 2016</span>
              </div>


              <p className='exp_info_content'>Provide answers to customer inquiries and resolve issues they encounter with the company’s products through
                various channels, including phone, online platforms, and email. Identify and detect duplicate issues and trigger afault alarm.
              </p>

              <div className='exp_title_and_date'>
                <span className='exp_info_title'>JOYY INC, Technical Support Representative</span>
                <span className='exp_info_date'>Sep 2016 - Oct 2018</span>
              </div>

              <p className='exp_info_content'>Resolved issues caused by system malfunctions by collaborating with relevant business departments to ensure quick
                resolution. Liaised between departments, streamlining support processes.</p>
            </div>

          </div>

        </div>


        {/*----------------------------------------------------------------------------------------------------------------------- */}
        <div className='main_edu'>
          <p className='edu'>Education</p>
          <div className='edu_example'>
            <div className='edu_info'>

              <div className='edu_title_and_date'>
                <span className='edu_info_school'>University of Houston</span>
                <span className='edu_info_date'>Jan 2024 - Present</span>
              </div>

              <p className='edu_info_gpa'>GPA: 3.16 out  of 4.0</p>
              <p>Extracurricular Activities:</p>
              <p className='edu_info_content'>Conducted motion capture experiments using Vicon and MotionBuilder to study human motion and create virtual human motion animations.</p>
            </div>
          </div>




        </div>


        {/*----------------------------------------------------------------------------------------------------------------------- */}
        <div className='main_pj'>
          <p className='pj'>Projects</p>
          <div className='pj_exp'>
            <div className='pj_info'>
              <div className='pj_content_img'>
                <a href="https://post-office-project-2024.vercel.app/"><img className='pj_img' src={pj1} alt=""/></a>
              </div>
              <div className='pj_content'>
                <p className='pj_info_title'>Post Office Web Application</p>
                <p className='pj_info_langrage'>React · SQL · Server-side</p>
                <p className='pj_info_content'>Course Project · UH COSC 3380</p>
              <div className='pj_link'>
                <FaGithub/>
              </div>
              </div>
            </div>


            <div className='pj_info'>
              <div className='pj_content_img'>
                <img className='pj_img' src={pj2} alt=""/>
              </div>
              <div className='pj_content'>
                <p className='pj_info_title'>Personal Profile</p>
                <p className='pj_info_langrage'>React · JavaScript · CSS</p>
                <p className='pj_info_content'>A personal profile website and tools</p>
              <div className='pj_link'>
                <FaGithub/>
              </div>

              </div>
            </div>
{/*

            <div className='pj_info'>
              <div className='pj_content_img'></div>

              <div className='pj_content'></div>
            </div>


*/}


          </div>


        </div>

{/*----------------------------------------------------------------------------------------------------------------------- */}


      </main>


{/*----------------------------------------------------------------------------------------------------------------------- */}
      <footer>

      </footer>

    </div>


    </>
  )
}

export default App
