import React from "react";
import noteTaker from "./NoteTaker.png";
import petFinder from "./PetfinderProject.png";
import recipeSaver from "./RecipeSaver.png";
import workdayScheduler from "./WorkDayScheduler.png";
import horiseon from "./Horiseon.png"
import "./style.css"

function Portfolio(){
    return (
        <section id="work" className="card">
            <h2>Work</h2>
            <a className="large" href="https://echandlerdavis.github.io/Project-1-Group-7/">
                <img id="projects" src={petFinder} alt="Petfinder Homepage" /></a> 
            <a className="small" href="https://echandlerdavis.github.io/Horiseon-refractoring-assignment/">
                <img id="projects" src={horiseon} alt="Horiseon Homepage" /></a>
            <a className="small" href="https://echandlerdavis.github.io/Work-Day-Scheduler-Homework/">
                <img id="projects" src={workdayScheduler} alt="Scheduler Homepage" /></a>
            <a className="small" href="https://evening-ravine-54411.herokuapp.com/notes">
                <img id="projects" src={noteTaker} alt="Notetaker App Homepage" /></a>
            <a className="large" href="https://group-2-recipe-saver.herokuapp.com/login">
                    <img id="projects" src={recipeSaver} alt="Recipe Saver Homepage" /></a>     
        </section>
    )
};

export default Portfolio;

