import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Journey.css"

function Journey() {
    return (
        <>
            <Navbar />
            <div className="journey_section">
                <div className="journey_image">
                    <div className="journey_head">
                        <span>THE JOURNEY</span>
                    </div>

                    <div className="desc_holder">
                    <div className="journey_desc roots">
                        <span>
                            THE ROOTS
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius totam asperiores itaque consequatur debitis ipsam tenetur ipsum, iure voluptates neque inventore a facilis voluptatem!</p>
                    </div>

                    
                    <div className="journey_desc chapter1">
                        <span>
                            CHAPTER 1
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis laboriosam veniam doloremque ad, necessitatibus, error sapiente in aliquam, maiores atque vero vel deleniti fugit?</p>
                    </div>
                    <div className="journey_desc chapter2">
                        <span>
                            CHAPTER 2
                        </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis laboriosam veniam doloremque ad, necessitatibus, error sapiente in aliquam, maiores atque vero vel deleniti fugit?</p>
                    </div>
                    <div className="journey_desc kicksup">
                        <span>KICKSUP</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis laboriosam veniam doloremque ad, necessitatibus, error sapiente in aliquam, maiores atque vero vel deleniti fugit?</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journey