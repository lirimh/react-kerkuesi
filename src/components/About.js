import React from 'react'
import Logo from '../assets/img/big-logo.svg'

function About() {
    return (
        <div className="about-us">
            <main>
            <h1>Rrethe neshe</h1>
            <p>Kerkuesi u themelua ne vitin 2021 ne Kosove. Kerkuesi eshte plateforme per kerkimin e contetit te
                filmave, filmave te animuar dhe video lojerave. Kerkusi kerkon ti bashkoje te gjithe shqipetaret ne
                nje search engine te krijuar enkas per shqipetaret. Si fillim kerkuesi ka lansuar websiten me mundesi
                kerkimi rrethe te dhenave per Filma,Filma te Animuar dhe Video lojera por ne te ardhmen kerkon te zgjerohet
                edhe ne zhanre te ndryshme te informacionit duke e zgjeruar mundesin per qasje ne informacion.</p>

                <img className="big-logo-about-us" src={Logo}></img>
                
            </main>
        </div>
    )
}

export default About
