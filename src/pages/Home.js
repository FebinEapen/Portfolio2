import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi! My Name is Febin</h2>
        <div className="prompt">
          
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
          <p>Front End Developer</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, WebSockets
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, Python</span> 
          </li>
          <li className="item">
            <h2>Languages(Spoken)</h2>
            <span>Malayalam, English, Hindi, Tamil, Arabic</span> 
          </li>
          <li className="item">
            <h6>Email: febinnn@gmail.com</h6>
            <h6>Github: www.github.com/FebinEapen</h6>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;