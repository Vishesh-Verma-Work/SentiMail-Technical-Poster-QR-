import React from "react";
import { createRoot } from "react-dom/client";

const SentiMailLanding = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>SentiMail – AI-Powered Email Feedback Analysis</h1>
        <p>
          SentiMail automates email analysis by extracting key details using AI and NLP.
          It categorizes emails into complaints, queries, and feedback while providing
          sentiment insights and real-time analytics to enhance business decision-making.
        </p>
        <div className="button-container">
          <a href="https://drive.google.com/drive/folders/1Gw1VUKsEpVSMOICX5npwTMVUglu_Y_9W?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">Visit Hosted Website</a>
          <a href="https://drive.google.com/drive/folders/1Gw1VUKsEpVSMOICX5npwTMVUglu_Y_9W?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">View Project Docs</a>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<SentiMailLanding />);

// CSS Styling
const styles = `
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color : #85a1ff;
  }
  .content {
    margin : auto 2rem;
    background: #0f2757;
    color: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width: 500px;
  }
  h1 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .btn {
    background: white;
    color: #0f2757;
    padding: 10px 20px;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 6px;
    transition: 0.3s;
    font-weight: bold;
  }
  .btn:hover {
    background: #0a1c3d;
    color: white;
  }
    body {
    background: #0f2757;
    }
   
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);