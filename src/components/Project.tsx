import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jungsek/GreenCampus" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jungsek/GreenCampus" target="_blank" rel="noreferrer"><h2>GreenCampus</h2></a>
                <p>Developed Emissions Tracker app with Data Visualization Dashboard, Data analyzer and Chatbot using OpenAI, and many more features.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jungsek/AssistAI" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jungsek/AssistAI" target="_blank" rel="noreferrer"><h2>AssistAI</h2></a>
                <p>Developed a CNN and RNN model to learn from ASL images, and predict emotions and intent from text, compiled into a web app with Pytorch & Flask.</p>
            </div>
            <div className="project">
                <a><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>RouteMapper</h2></a>
                <p>Developed a Route Planner python application that finds the shortest route between two locations in a custom Singapore Map using Search Algorithms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Existance29/BED2024Apr_P07_T04" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Existance29/BED2024Apr_P07_T04" target="_blank" rel="noreferrer"><h2>ITMastermindz</h2></a>
                <p>Developed a Full Stack Educational website providing online courses & quizzes with Node.js, Express.js, MSSQL and OpenAI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Existance29/FED-Assignment-2" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Existance29/FED-Assignment-2" target="_blank" rel="noreferrer"><h2>JSB Tech</h2></a>
                <p>Developed a Full Stack Ecommerce website providing gaming gear, with a focus on the gamification of Ecommerce, using HTML, CSS, JS, RestDB, AmazonAPI</p>
            </div>
            <div className="project">
                <a href="https://github.com/brazeen/NgeeAnnCityGame" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/brazeen/NgeeAnnCityGame" target="_blank" rel="noreferrer"><h2>Ngee Ann City</h2></a>
                <p>Developed a City Building Web Game with HTML, CSS, JS, focusing on Scrum framework practices and Agile methodologies.</p>
            </div>
            <div className="project">
                <a><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Nail Artisans</h2></a>
                <p>Developed an AI Chatbot designed to provide Nail Artisans customers a seamless customer enquiry experience, using IBM Cloud Watsonx Assistant.</p>
            </div>
            <div className="project">
                <a><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Plastic Pal</h2></a>
                <p>PlasticPal is an AI Solution for the 12th of the 17 United Nations Sustainable Development Goals; Responsible Consumption & Production. PlasticPal is the conjunction of a smart bin with a built-in AI plastic sorter as well as a Mobile App.</p>
            </div>
            <div className="project">
                <a href="https://github.com/brazeen/iCar-System" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/brazeen/iCar-System" target="_blank" rel="noreferrer"><h2>iCar SG</h2></a>
                <p>Developed a Car Rental Service platform using Object Oriented Modelling Approaches in C#.</p>
            </div>
            <div className="project">
                <a><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a><h2>Carpark Availability Application</h2></a>
                <p>Developed a Python-based application to process and analyze HDB (Housing Development Board) carpark availability data.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;