import "./WorkCardStyles.css"
import React from 'react'
import {NavLink } from "react-router-dom"

// Dynamic Card Build

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className="button">View</NavLink>
            <NavLink to={props.source} className="button">Source</NavLink>
        </div>
    </div>
</div>

  )
}

export default WorkCard;