import "./WorkCardStyles.css"
import React from 'react'
import pro1 from "../assets/project1.jpg"
import {NavLink } from "react-router-dom"

// Dynamic Card Build

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image" />
                <h2 className="project-title">Week 9 Project</h2>
                <div className="pro-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink> </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;