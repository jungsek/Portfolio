import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Python",
    "Flask",
    "React",
    "Postman",
    "Express",
    "Node",
    "TypeScript"
];

const labelsThird = [
    "PyTorch",
    "TensorFlow",
    "ML",
    "DL",
    "GenAI",
    "LLM",
    "OpenAI",
    "Gemini",
    "HuggingFace",
    "LlamaIndex",
    "Streamlit"
];

function Expertise() {
    return (
    <div id="expertise">
        <div className="items-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x" style={{alignSelf: 'flex-start'}}/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications using HTML JS CSS, alongside modern technologies such as React.js, Express.js, Node.js. I have a strong proficiency in the Software Development process and frontend + backend + database development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x" style={{alignSelf: 'flex-start'}}/>
                    <h3>Artificial Intelligence</h3>
                    <p>Being an IBM Certified AI Practitioner, I have built numerous AI/ML/DL models from scratch, using the AI practices taught in my AI specialization. In addition, building enterprise grade GenAI-enabled solutions empowers my web applications, using OpenAI, Gemini etc.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;