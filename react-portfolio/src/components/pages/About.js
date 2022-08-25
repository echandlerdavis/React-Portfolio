import React from 'react';
import image from '../../images/Me.jpg'


export default function About() {
  return (
    <section id="about" className="card">
            <h2>About Me</h2>
            <img id="me" src={image} alt="Hiking Photo"/>
            <p id="description">I am currently a student at University of Washington for Full Stack Web Development, and looking to enter the field in the next couple of months. I have experience in law, music, visual art, and outdoor education.
                I am interested in racial justice, trans rights, and psychology. I look forward to using my skills to contribute to companies that match my values and are working toward a more equitable world. </p>
    </section>
  );
}