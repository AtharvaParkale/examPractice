import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Team.css"
import teamData from "./teamData.json"

function Team() {
  return (
    <>
      < Navbar />
      <div className="team_container">
        <div className="team_inner_container">
          <div className="team_title">Without bonding and coordination, every project is a failure. Look at
            who makes KICKSUP great.  </div>
          <div className="player_card_holder">
            {
              teamData.map((item) => {
                return (
                  <div className="player_card">
                    <div className="team_player_image">
                      <img src={item.image} alt="Zidane" />
                    </div>
                    <div className="team_player_name">
                      <span>{item.name}</span>
                      <p>{item.desc}</p>
                    </div>
                    <div className="team_player_social">
                      <div className="team_social_icon">
                        <img src={item.social1} alt="" />
                      </div>
                      <div className="team_social_icon">
                        <img src={item.social2} alt="" />
                      </div>
                      <div className="team_social_icon">
                        <img src={item.social3} alt="" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="team_end">and You!</div>
        </div>
      </div>
    </>
  )
}

export default Team