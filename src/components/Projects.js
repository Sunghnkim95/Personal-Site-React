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
                    E-commerce website, developed in a team of 4, using React.js framework to develope a functional frontend 
                    interaction allowing users to view, register, login, add cart items, and purchase products via a friendly 
                    interface. Mclovins is supported by a backend constitution pillared by Express, Morgan, and jsonwebtoken, 
                    allowing elevated security.
                </p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>FitnessTrackr</h2>
                <p className='projectDescription'>

                </p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Stranger's Things</h2>
                <p className='projectDescription'></p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Whac-a-Mol</h2>
                <p className='projectDescription'></p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Calculator</h2>
                <p className='projectDescription'></p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Retro-Draw</h2>
                <p className='projectDescription'></p>
                <img/>
            </div>
            <div>
                <h2 className='projectTitle'>Art Collector</h2>
                <p className='projectDescription'></p>
                <img/>
            </div>

        </div>
        </>
    )
}

export default HomePage;