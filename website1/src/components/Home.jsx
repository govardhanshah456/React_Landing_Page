import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/pic2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyWeeb</h1>
                    <p>Loves Anime and Programming.</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt='Graphics' />
                <div>
                    <p>
                        Ask me anything Related to Competitve Programming.
                        Also you can ask me anything related to DSA.
                        Also ask me anything related to Web Development basics.
                        I enjoy watching Animes too.
                        If you have any anime suggestions, then leave them for me in my mailbox below.
                        Thanks for visiting this page.
                    </p>
                </div>
            </div>
            <div className='home3' id="about">
                <div>
                    <h1>Who am I?</h1>
                    <p>
                        I am a programmers, DSA and Web dev enthusiast.
                        I am also an anime weeb.
                        I also like to sing.
                        I also am interested in Cricket.
                    </p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div
                            style={{
                                animationDelay: "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home