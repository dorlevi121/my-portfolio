import React, { Component } from "react";
import homeStyle from "./home.module.scss";
import { Link } from "react-router-dom";
import cv from "../../assets/cv/dorCV.pdf";
import { FaCode } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div className={homeStyle.Home}>
        <div className={homeStyle.Name}>
          <p>Dor Levi</p>
          <hr />
        </div>

        <div className={homeStyle.Title}>
          <p>Front-End Developer</p>
        </div>

        <div className={homeStyle.Menu}>
          <Link to="/projects">
            <div className={homeStyle.Menu_Item}>
              <div className={homeStyle.Icon}>
                <FaCode size="1.9rem" />
              </div>
              <div className={homeStyle.Text}>
                <p>Projects</p>
              </div>
            </div>
          </Link>
          <a href={cv} target="_blank">
            <div className={homeStyle.Menu_Item}>
              <div className={homeStyle.Icon}>
                <FaFilePdf size="1.9rem" />
              </div>
              <div className={homeStyle.Text}>
                <p>Resume</p>
              </div>
            </div>
          </a>
          <Link to="/about">
            <div className={homeStyle.Menu_Item}>
              <div className={homeStyle.Icon}>
                <FaAddressCard size="1.9rem" />
              </div>
              <div className={homeStyle.Text}>
                <p>About Me</p>
              </div>
            </div>
          </Link>
          <Link to="/contact">
            <div className={homeStyle.Menu_Item}>
              <div className={homeStyle.Icon}>
                <FaEnvelope size="1.9rem" />
              </div>
              <div className={homeStyle.Text}>
                <p>Contact</p>
              </div>
            </div>
          </Link>
        </div>

        <div className={homeStyle.SocialMedia}>
          <div className={homeStyle.githubIcon}>
            <FaGithub size="1.7rem" />
          </div>
          <div className={homeStyle.linkedinIcon}>
            <FaLinkedin size="1.7rem" />
          </div>
        </div>
      </div>
    );
  }
}
