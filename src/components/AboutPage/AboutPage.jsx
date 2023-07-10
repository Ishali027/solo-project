import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container } from "@mui/material";
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
    <div className='infotext'>
    <h1>About Nice To Meat You</h1>
    <h4>The idea for this app came about as I began to notice how chaotic and busy the butcher shop
      usually gets. This was mainly due to customers having to come in and make their orders in person and 
      due to that inefficient ordering method, the store would usually get packed up with customers all waiting to make 
      or receive their orders. 
      By using this app customers can now pre-order their meat allowing for a much faster shopping experience. 
      This app also will also allow our employees to get a head start on their work and prevent them from being overwhelmed 
      by getting all customer orders before they even show up at the store. 
    </h4>
    <h4>
    <h4>Technologies Used:
  <li>React</li>
  <li>Node.js</li>
  <li>JavaScript</li>
  <li>Redux</li>
  <li>CSS</li>
  <li>PostgreSQL</li>
  <li>Material-UI</li>
</h4>
    </h4>
    <h4>Big thank you to all the instructors at Prime Digital Academy, my cohort, and family for all your help and support along the way.</h4>

    <h4>Contact Me:  
    <br/>
     Visit my Linkedin: <a href="https://www.linkedin.com/in/ismail-ali-406065135/"target='_blank' > linkedin.com/in/ismail-ali-406065135/</a>
     <br />
  Visit my GitHub: <a href="https://github.com/Ishali027" target='_blank' > github.com/Ishali027</a>
  </h4>

    </div>
    </>
  );
}

export default AboutPage;
