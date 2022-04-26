import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Store.css"
import { FiFilter } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import Data from './data.json';
import img1 from '../../assets/shoe.jpg';
import { FiChevronLeft } from 'react-icons/fi';
import basic from "../../assets/sneakers/basic.jpg"
import { FiShoppingBag } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';

function Store() {
    const [priceLow, setPriceLow] = useState(0);
    const [priceHigh, setPriceHigh] = useState(20000);
    const [color, setColor] = useState("all");
    const [type, setType] = useState("all");
    const [viewShoe, setViewShoe] = useState(true)


    //When ypu click on a shoe set these values
    const [shoeName, setShoeName] = useState("No shoe chosen");
    const [shoeCost, setShoeCost] = useState(0);
    const [path, setPath] = useState("assets/sneakers/basic.jpg");
    const onSelectShoe = (shoeN, shoeC) => {
        console.log("Shoe name :" + shoeN);
        console.log("Shoe cost :" + shoeC);
        setShoeName(shoeN);
        setShoeCost(shoeC);
    }

    // const imageHoler=[]
    const setImagePath = (p) => {
        // console.log(p);
    }

    const filterItems = (pL, pH, c,z) => {
        // console.log("Price High: " + pH)
        // console.log("Price Low : " + pL)
        // console.log("Color : " + c)
        console.log("type : " + z)
    }
    useEffect(() => {
        filterItems(priceLow, priceHigh, color,type);
        onSelectShoe(shoeName, shoeCost);
        setImagePath(path);
    })


    return (
        <>
            <Navbar />
            <div className="storeSection">

                {
                    viewShoe ? (
                        <>
                            <div className="shoeInfo filters">
                                <div className="filt_sections filters_header">
                                    <span>FILTERS</span>
                                    <FiFilter size={20} />
                                </div>
                                <div className=" filt_sections filters_cost">
                                    <span>Cost</span><br />
                                    <input
                                        type="radio"
                                        id="html"
                                        name="shoe_cost"
                                        value="4001"
                                        onChange={(e) => {

                                            console.log(e.target.value);
                                            setPriceLow(1499);
                                            setPriceHigh(e.target.value);
                                        }}
                                    />
                                    <label for="html">Rs. 1500-4000</label><br />
                                    <input
                                        type="radio"
                                        id="css"
                                        name="shoe_cost"
                                        value="7001"
                                        onChange={(e) => {

                                            console.log(e.target.value);
                                            setPriceLow(4000);
                                            setPriceHigh(e.target.value);
                                        }}
                                    />
                                    <label for="css">Rs. 4001-7000</label><br />
                                    <input
                                        type="radio"
                                        id="javascript"
                                        name="shoe_cost"
                                        value="20000"
                                        onChange={(e) => {

                                            console.log(e.target.value);
                                            setPriceLow(7000);
                                            setPriceHigh(e.target.value);
                                        }}

                                    />
                                    <label for="javascript">Rs. 7001+</label>

                                    {/* <img src={img1} alt="" /> */}

                                </div>
                                <div className=" filt_sections filters_colour">
                                    <span>Colour</span><br />
                                    <input
                                        type="radio"
                                        id="red"
                                        name="shoe_color"
                                        value="red"
                                        onChange={() => {
                                            setColor("red");
                                        }}

                                    />
                                    <input
                                        type="radio"
                                        id="blue"
                                        name="shoe_color"
                                        value="blue"
                                        onChange={() => {
                                            setColor("blue");
                                        }}
                                    />

                                    <input
                                        type="radio"
                                        id="yellow"
                                        name="shoe_color"
                                        value="yellow"
                                        onChange={() => {
                                            setColor("yellow");
                                        }}
                                    />
                                    <input
                                        type="radio"
                                        id="green"
                                        name="shoe_color"
                                        value="green"
                                        onChange={() => {
                                            setColor("green");
                                        }}
                                    />
                                    <input
                                        type="radio"
                                        id="darkYellow"
                                        name="shoe_color"
                                        value="darkYellow"
                                        onChange={() => {
                                            setColor("green");
                                        }}
                                    />

                                </div>

                                <div className="filt_sections filters_design">
                                    <span>Design templates</span><br />
                                    <input type="radio" id="two" name="shoe_template" value="2" />
                                    <label for="two">2</label><br />
                                    <input type="radio" id="three" name="shoe_template" value="3" />
                                    <label for="three">3</label><br />
                                    <input type="radio" id="threePlus" name="shoe_template" value="4" />
                                    <label for="threePlus">3+</label><br />
                                </div>

                                <div className="filt_sections filters_type">
                                    <span>Type</span><br />
                                    <input type="radio" id="loaf" name="shoe_type" value="loaf" 
                                    onChange={()=>{
                                        setType("loafers")
                                    }}/>
                                    <label for="loaf">Loafers</label><br />

                                    <input type="radio" id="sneak" name="shoe_type" value="sneak"
                                       onChange={()=>{
                                        setType("sneakers")
                                    }}
                                    />
                                    <label for="sneak">Sneakers</label><br />
                                </div>
                                {/* <button>Apply</button> */}
                            </div>

                            <div className="shoeInfo shoes">
                                <div className="shoes_header">
                                    <span>SHOES</span>
                                    <div className="sort_shoes">
                                        <FiSearch size={21} />
                                        <button>sort by</button>
                                    </div>
                                </div>
                                <div className="shoe_display">
                                    {
                                        Data.map(item => {
                                            if ((item.cost > priceLow) && (item.cost < priceHigh) && color === "all" ) {
                                                return (

                                                    <div
                                                        className="shoe_card"

                                                        onClick={() => {
                                                            setViewShoe(viewShoe ? false : true);
                                                            onSelectShoe(item.name, item.cost);
                                                        }}

                                                    >
                                                        <div className="shoe_inner shoe_img_container">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                        <div className="shoe_inner shoe_name_container">
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <div className="shoe_inner shoe_price">
                                                            <span>Rs.{item.cost}</span>
                                                            <span>{item.star}</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            else if ((item.cost > priceLow) && (item.cost < priceHigh) && item.color === color ) {
                                                return (

                                                    <div className="shoe_card">
                                                        <div className="shoe_inner shoe_img_container">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                        <div className="shoe_inner shoe_name_container">
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <div className="shoe_inner shoe_price">
                                                            <span>Rs.{item.cost}</span>
                                                            <span>{item.star}</span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        
                                            

                                        })

                                    }
                                </div>
                            </div>
                            <div className="shoeInfo cart">
                                <div className="cart_head">
                                    <span>CART</span>
                                    <FiShoppingBag />
                                </div>
                                <div className="cart_mid">
                                    <p>What's stopping you designer ?</p>
                                </div>
                                <div className="cart_bottom1">
                                    <span><GrLocation /> Home</span>
                                    <span><FiShoppingBag /> Select Date</span>
                                </div>
                                <div className="cart_bottom2">
                                    <button>order now</button>
                                </div>
                            </div>
                        </>) : (
                        <>
                            <div className="shoeInfo shoe_holder">
                                <div className="shoe_holder1">
                                    <span
                                        onClick={() => {
                                            setViewShoe(viewShoe ? false : true);
                                        }}
                                    ><FiChevronLeft size={28} /> your design space</span>
                                    {/* <span></span> */}
                                </div>
                                <div className="shoe_holder2">
                                    <div className="shoe_info shoe_info1">
                                        <img src={path} alt="shoe_img" />
                                    </div>
                                    <div className="shoe_info shoe_info2">
                                        <div className="preview_image">
                                            <img src={path} alt="shoe_img" />
                                        </div>
                                        <div className="preview_image">
                                            <img src={path} alt="shoe_img" />
                                        </div>
                                        <div className="preview_image">
                                            <img src={path} alt="shoe_img" />
                                        </div>
                                    </div>
                                    <div className="shoe_info shoe_info3">
                                        <div className="shoe_info3_1">
                                            <div className="shoe_info_part">
                                                <span>{shoeName}</span>
                                                <p>by KICKSUP and you</p>
                                            </div>
                                            <div className="shoe_info_part">
                                                <p>80 reviews</p>
                                            </div>
                                            <div className="shoe_info_part">
                                                <span>Rs. {shoeCost}</span>
                                                <p>Get an exclusive 20% off shopping with HDFC bank</p>
                                            </div>
                                        </div>
                                        <div className="shoe_info3_2">

                                            <div className="inputs_ front_edit">
                                                <span>Front </span>

                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="black_"
                                                        name="shoe_front"
                                                        value="assets/sneakers/front/front1.jpg"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/front/front1.jpg");
                                                        }}

                                                    />
                                                    <input
                                                        type="radio"
                                                        id="blue_"
                                                        name="shoe_front"
                                                        value="blue"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/front/front3.jpg");
                                                        }}
                                                    />

                                                    <input
                                                        type="radio"
                                                        id="red_"
                                                        name="shoe_front"
                                                        value="yellow"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/front/front2.jpg");
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="inputs_ middle_edit">
                                                <span>Middle  </span>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="black_"
                                                        name="shoe_middle"
                                                        value="red"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/middle/sneaker5.jpg");
                                                        }}

                                                    />
                                                    <input
                                                        type="radio"
                                                        id="blue_"
                                                        name="shoe_middle"
                                                        value="blue"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/middle/sneaker6.jpg");
                                                        }}
                                                    />

                                                    <input
                                                        type="radio"
                                                        id="red_"
                                                        name="shoe_middle"
                                                        value="yellow"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/middle/sneaker1.jpg");
                                                        }}
                                                    />
                                                </div>
                                            </div>



                                            <div className="inputs_ back_edit">
                                                <span>Back  </span>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="black_"
                                                        name="shoe_back"
                                                        value="red"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/back/sneaker8.jpg");
                                                        }}

                                                    />
                                                    <input
                                                        type="radio"
                                                        id="blue_"
                                                        name="shoe_back"
                                                        value="blue"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/back/sneaker9.jpg");
                                                        }}
                                                    />

                                                    <input
                                                        type="radio"
                                                        id="red_"
                                                        name="shoe_back"
                                                        value="yellow"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/back/sneaker7.jpg");
                                                        }}
                                                    />
                                                </div>
                                            </div>



                                            <div className="inputs_ front_edit">
                                                <span>Inner  </span>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="black_"
                                                        name="shoe_inner"
                                                        value="red"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/inner/sneaker4.jpg");
                                                        }}

                                                    />
                                                    <input
                                                        type="radio"
                                                        id="blue_"
                                                        name="shoe_inner"
                                                        value="blue"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/inner/sneaker2.jpg");
                                                        }}
                                                    />

                                                    <input
                                                        type="radio"
                                                        id="red_"
                                                        name="shoe_inner"
                                                        value="yellow"
                                                        onChange={() => {
                                                            setPath("assets/sneakers/inner/sneaker3.jpg");
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="inputs_ size_edit">
                                                <span>Size  </span>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="shoe_size"
                                                        value="red"


                                                    />
                                                    <input
                                                        type="radio"
                                                        name="shoe_size"
                                                        value="blue"

                                                    />

                                                    <input
                                                        type="radio"
                                                        name="shoe_size"
                                                        value="yellow"

                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="shoe_holder3">
                                    <button id="share">share design</button>
                                    <button id="addToCart">add to cart</button>
                                </div>
                            </div>
                            <div className="shoeInfo cart">
                                <div className="cart_head">
                                    <span>CART</span>
                                    <FiShoppingBag />
                                </div>
                                <div className="cart_mid">
                                    <p>What's stopping you designer ?</p>
                                </div>
                                <div className="cart_bottom1">
                                    <span><GrLocation /> Home</span>
                                    <span><FiShoppingBag /> Select Date</span>
                                </div>
                                <div className="cart_bottom2">
                                    <button>order now</button>
                                </div>
                            </div>
                        </>
                    )
                }


                {/* <div className="shoeInfo cart"></div> */}
            </div>
        </>
    )
}

export default Store