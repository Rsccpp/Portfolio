import { faSuitcase } from "@fortawesome/free-solid-svg-icons/faSuitcase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./ProjectCard";
import "../static/css/projects.css";
import { useState, useEffect } from "react";
import { nextIndex, prevIndex } from "../utils/sliderLogic";

export default function Projects() {
  const projects = [
    {
      title: "StellarOrbit",
      desc: `Satellite Image Analyzer for Disaster & Environmental Monitoring \n
      StellarOrbit is a web-based platform that analyzes satellite \n
      images using AI models to automatically detect and monitor.`,
      features: [
        "🔥 Forest Fire Hotspots",
        "💧 Water Body Changes",
        "🌾 Crop & Vegetation Health (NDVI-based)",
      ],
      languages: ["Python", "ML", "Algorithms"],
      url: "https://github.com/Rsccpp/StellarOrbit",
    },
    {
      title: "StepAhead",
      desc: `AI-powered career guidance platform that helps students and \n
             professionals explore career....`,
      features: [
        "📊 Skill Gap Analysis Identifies.",
        "🧭 Roadmap Generation",
        "🤝 AI Chatbot Mentor",
      ],
      languages: ["Python", "ML", "Algorithms"],
      url: "https://github.com/Rsccpp/StepAhead",
    },
    {
      title: "Hospital Management System ",
      desc: `A comprehensive system to manage patients, doctors, and appointments \n
             for a hospital. ....`,
      features: [
        "👤 Patient Management",
        "👨‍⚕️ Doctor Management",
        "💊 Prescription Management",
        "🔒 Secure Authentication",
        "📊 Dashboard",
      ],
      languages: ["Java"],
      url: "https://github.com/Rsccpp/Hospital-Management-System",
    },
    {
      title: "Simon Game",
      desc: `A fun and interactive Simon Says game built using HTML, CSS, and JavaScript.`,
      features: [
        "Interactive color",
        "Increasing difficulty with each round",
        "Simple, clean, and responsive design",
      ],
      languages: ["HTML5", "CSS", "Javascript"],
      url: "https://github.com/Rsccpp/Simon-Game",
    },
    {
      title: "Tic Tac Toe",
      desc: `A simple and fun Tic Tac Toe game built using HTML, CSS, and JavaScript. \n 
            Play against a friend on the same device and see who can win the most rounds!`,
      features: [
        "Two-player mode – Play with a friend locally",
        "Interactive UI – Clear turns and winning animations.",
        "Restart button – Quickly reset and start a new game.",
      ],
      languages: ["HTML5", "CSS", "Javascript"],
      url: "https://github.com/Rsccpp/Tic-Tac-Toe",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isPaused) return; // ⛔ stop sliding when paused

    const interval = setInterval(() => {
      setIndex((prev) => nextIndex(prev, projects.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  return (
    <div
      className="projects-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FontAwesomeIcon icon={faSuitcase} className="icon" />
      <span className="iconTitle">Featured Projects</span>

      {/* Buttons */}
      <button
        className="nav-btn left"
        onClick={() => setIndex((prev) => prevIndex(prev, projects.length))}
      >
        ◀
      </button>

      {/* Slider */}
      <div
        className="projects-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="projects">
          <div
            className="projects-slider"
            style={{
              transform: `translateX(-${index * 50}%)`,
            }}
          >
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`project-card ${
                  i === index || i === index + 1 ? "active" : ""
                }`}
              >
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="nav-btn right"
        onClick={() => setIndex((prev) => nextIndex(prev, projects.length))}
      >
        ▶
      </button>
      <div className="dots">
        {Array.from({ length: projects.length - 1}).map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
