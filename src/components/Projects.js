import React from 'react';

import Name from './../img/NameCalig.jpg'
import HomePageStyle from './../styles/HomePageStyle.css'
import ProfessionalPhoto from './../img/Peter.jpg'
import MountainPhoto from "./../img/Mountain.jpg"

const HomePage = () => {

    return (
        <>
        <div className="home">
            <div>
                <h2 className='projectTitle'>McLovins</h2>
                <p className='projectDescription'>
                    E-commerce website, developed in a team of 4, using React.js framework to develope a cozy yet functional frontend 
                    interaction allowing users to view, register, login, add cart items, and purchase products via a friendly 
                    interface. Mclovins is supported by a backend constitution pillared by Express, Morgan, and jsonwebtoken, 
                    allowing elevated security.
                    <a href="https://mclovins.netlify.app/"> Visit McLovins Here</a>
                </p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>FitnessTrackr</h2>
                <p className='projectDescription'>
                    Fitness application constructs a tracker for workout routines by allowing the user to orchestrate from a list 
                    of activities made by the user or other users. Fitness Trackr features a register, login, view all posted routines and activities,
                    create routines and activities if the user is authenticated.
                    <a href="https://jpsandwich-fitnesstrackr.netlify.app/"> Visit FitnessTrackr Here</a>
                </p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Stranger's Things</h2>
                <p className='projectDescription'>
                    Online marketplace platform where buyers and sellers can communicate via messaging or posts. 
                    Stranger's Things allow an authenticated user to create, delete, and edit for-sale posts, as well as message 
                    other users and interact regarding specific posts.
                    <a href="https://dreamy-davinci-61f157.netlify.app/"> Visit Stranger's Things Here</a>
                </p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Whac-a-Mol</h2>
                <p className='projectDescription'>
                    Whac-A-Mol is a classic arcade game where the player can experience a full minute of fun! Whac-a-Mol features a start button
                    to begin the game, a score tracking system per mole hit, a high score tracker to allow player to compete whether be themselves or others, 
                    and game difficulties such as normal, hard, and ultra hard mode.
                </p>
                <a href="https://whack-a-mol.netlify.app/"> Visit Whac-a-Mol Here</a>
                <img/>
            </div>
            <div>
                <h2 className='otherProjects'>Check Out My Other Projects</h2>

                <p className='otherProjectTitle'>Calculator</p>
                <a href="https://calculatorpk.netlify.app/"> Visit Calculator Here</a>

                <p className='otherProjectTitle'>Retro-Draw</p>
                <a href="https://retrodrawpk.netlify.app/"> Visit Retro-Draw Here</a>

                <p className='otherProjectTitle'>Art Collector</p>
                <a href="https://artcollector.netlify.app/"> Visit Art Collector Here</a>
            </div>
            <div>
                <h2 className='otherProjects'>Future Project Plans</h2>

                <p className='otherProjectTitle'>Gamer Profile</p>
            </div>
        </div>
        </>
    )
}

export default HomePage;