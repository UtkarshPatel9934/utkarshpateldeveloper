import React from "react";
// now importing the contact component css file
import "./expComponent.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { SiLaravel } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const expComponent = () => {
  return (
    <section id="experience">
      <h4>What Skills I have?</h4>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 id="htmlIcon" className='experience__details-icon' />
              <div>
                <h4>HTML 5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 id="cssIcon" className='experience__details-icon' />
              <div>
                <h4>CSS 3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiJavascript id="jsIcon" className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaBootstrap id="bootstrapIcon" className='experience__details-icon' />
              <div>
                <h4>Bootstrap 5</h4>
              <small className="text-light">Experienced</small>
              </div>              
            </article>

            <article className="experience__details">
              <DiJqueryLogo id="jqueryIcon" className='experience__details-icon' />
              <div>  
                <h4>jQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact id="reactIcon" className='experience__details-icon' />
              <div>  
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoAngular id="angularIcon" className='experience__details-icon' />
              <div>
              <h4>Angular</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <SiLaravel id="laravelIcon" className='experience__details-icon' />
              <div>  
                <h4>Laravel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPhp id="phpIcon" className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>  
              </div>
            </article>

            <article className="experience__details">
              <SiMysql id="mysqlIcon" className='experience__details-icon' />
              <div>  
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <DiMongodb id="mongodbIcon" className='experience__details-icon' />
              <div>  
                <h4>Mongo DB</h4>
                <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default expComponent;
