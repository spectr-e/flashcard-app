// Handles our NavLinks for the all our pages.
// Pages to be rendered are:
// - FlashCards : This page will render our QuestionCard.js component.
// - Create Quiz : This page will render our AddQuestionForm.js component.
// - Questions : This page will render our QuestionList.js component.

import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../images/logo.png"

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <NavLink to="/" exact className="navbar-item">
            <img src={logo} alt="logo"></img>
          </NavLink>
          <span className="nav-text">Uwezo FlashCard App</span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">
            <NavLink to="/" exact className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/create-quiz" exact className="navbar-item">
              Create
            </NavLink>
            <NavLink to="/questions" exact className="navbar-item">
              Questions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
