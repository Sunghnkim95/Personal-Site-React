import React from 'react';
import Kim from './../img/Kim.png'
import Sung from './../img/Sung.png'
import Hoon from './../img/Hoon.png'
import Name from './../img/NameCalig.jpg'
import HomePageStyle from './../styles/HomePageStyle.css'
import ProfessionalPhoto from './../img/Peter.jpg'
import MountainPhoto from "./../img/Mountain.jpg"

const HomePage = () => {

    return (
        <>
        <div className="home">

        {/*<div className>"If you desire one thing for so long, it's a given that you'll miss other things along the way. That's how it is... that's life." -Godo</div>*/} 
        <h1 className='homepageName'>Peter Kim</h1>
        <h2 className='fullstackEngineer'>&#60;Fullstack Engineer/&#62;</h2>
        <img src={Name} alt="Kim" width="400" height="800" className='homepageNamePhoto'/>
        <img src={ProfessionalPhoto} alt="Hello There" width="500" height="500" className='professionalPhoto' 
            onMouseOver={e => (e.currentTarget.src = MountainPhoto)} 
            onMouseLeave={e => (e.currentTarget.src = ProfessionalPhoto)}
        />



        </div>
        </>
    )
}

export default HomePage;