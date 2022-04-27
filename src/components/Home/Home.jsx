import React from 'react'
import "./Home.css"
import Navbar from "../Navbar/Navbar"

function Home() {
  return (
    <>
    <Navbar/>
    <div className="home_section">
      <h1>Project done by Atharva Parkale</h1>
      <span>This website is not responsive, prefer opening it on PC</span>
      <h2>Some images may take time to load due to their bigger size , be patient !</h2>
    </div>
    </>
  )
}

export default Home