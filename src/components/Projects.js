import React from 'react';
import ProjectStyles from './../styles/ProjectStyles.css'
import McLovins from "./../img/mclovins.PNG"
import FitnessTrackr from "./../img/fitnesstrackr.PNG"
import StrangersThings from "./../img/strangersthings.PNG"
import WhacAMole from "./../img/whacamol.PNG"

const Projects = () => {

    return (
        <>
        <div className="project">
            <h2 className='projectTitle'>&#60; McLovins / &#62;</h2>
            <div className='projectIndividual'>
                <p className='projectDescription'>
                    E-commerce website, developed in a team of 4, using React.js framework to develope a cozy yet functional frontend 
                    interaction allowing users to view, register, login, add cart items, and purchase products via a friendly 
                    interface. Mclovins is supported by a backend constitution pillared by Express, Morgan, and jsonwebtoken, 
                    allowing elevated security.
                    <br/><br/>
                    <a href="https://mclovins.netlify.app/" className='projectLink'> Visit McLovins Here</a>
                </p>
                <img src={McLovins} width="400" height="200" className='projectImage'/>
            </div>
            <div>
                <h2 className='projectTitle'>&#60; FitnessTrackr / &#62;</h2>
                <div className='projectIndividual'>
                    <p className='projectDescription'>
                        Fitness application constructs a tracker for workout routines by allowing the user to orchestrate from a list 
                        of activities made by the user or other users. Fitness Trackr features a register, login, view all posted routines and activities,
                        create routines and activities if the user is authenticated.
                        <br/><br/>
                        <a href="https://jpsandwich-fitnesstrackr.netlify.app/" className='projectLink'> Visit FitnessTrackr Here</a>
                    </p>
                    <img src={FitnessTrackr} width="300" height="300" className='projectImage'/>
                </div>
            </div>
            <div>
                <h2 className='projectTitle'>&#60; Stranger's Things / &#62;</h2>
                <div className='projectIndividual'>
                    <p className='projectDescription'>
                        Online marketplace platform where buyers and sellers can communicate via messaging or posts. 
                        Stranger's Things allow an authenticated user to create, delete, and edit for-sale posts, as well as message 
                        other users and interact regarding specific posts.
                        <br/><br/>
                        <a href="https://dreamy-davinci-61f157.netlify.app/" className='projectLink'> Visit Stranger's Things Here</a>
                    </p>
                    <img src={StrangersThings} width="400" height="200" className='projectImage'/>
                </div>
            </div>
            <div>
                <h2 className='projectTitle'>&#60; Whac-a-Mol / &#62;</h2>
                <div className='projectIndividual'>
                    <p className='projectDescription'>
                        Whac-A-Mol is a classic arcade game where the player can experience a full minute of fun! Whac-a-Mol features a start button
                        to begin the game, a score tracking system per mole hit, a high score tracker to allow player to compete whether be themselves or others, 
                        and game difficulties such as normal, hard, and ultra hard mode.
                        <br/><br/>
                        <a href="https://whack-a-mol.netlify.app/" className='projectLink'> Visit Whac-a-Mol Here</a>
                    </p>
                    <img src={WhacAMole} width="300" height="300" className='projectImage'/>
                </div>
            </div>
            <div>
                <h2 className='otherProjects'>Check Out Some Of My Other Works</h2>
                <br/><br/>
                <p className='otherProjectTitle'>&#60; Calculator / &#62;</p>
                <a href="https://calculatorpk.netlify.app/"> Visit Calculator Here</a>
                <br/><br/>
                <p className='otherProjectTitle'>&#60; Retro-Draw / &#62;</p>
                <a href="https://retrodrawpk.netlify.app/"> Visit Retro-Draw Here</a>
                <br/><br/>
                <p className='otherProjectTitle'>&#60; Art Collector / &#62;</p>
                <a href="https://artcollector.netlify.app/"> Visit Art Collector Here</a>
            </div>
            <br/>
            <div>
                <h2 className='otherProjects'>Future Project Plans</h2>
                <br/>
                <p className='otherProjectTitle'>&#60; Gamer Profile/  &#62;</p>

            </div>
        </div>
        </>
    )
}

export default Projects;