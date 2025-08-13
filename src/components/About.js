import React, { useState } from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    // const [btntext, setbtnText] = useState("enable dark mode")
    // const toggleStyle = () => {
    //     if (myStyle.color == 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText("enable white mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("enable dark mode")
    //     }
    // }

    let myStyle = {
        color: props.mode ==='dark'? 'white': '#51565d',
        backgroundColor: props.mode === 'dark'? '#51565d': 'white',
    }
    return (
        <div className='container' style={{color: props.mode ==='dark'? 'white': '#51565d'}}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>What is TextCraft?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextCraft is a simple yet powerful text manipulation utility built with React. Whether you're cleaning up formatting, converting case, or analyzing word counts, TextCraft offers a fast and easy way to edit your text directly in the browser — no downloads, no fuss.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Key Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            🔠 Convert text to uppercase and lowercase<br></br>

                            ✂️ Trim unnecessary spaces<br></br>

                            📊 View word and character counts<br></br>

                            📋 Copy processed text to clipboard<br></br>

                            🗣️ Read aloud the text content<br></br>

                            🌗 Switch between Light / Dark / Blue themes<br></br>

                            📱 Fully responsive – works on any device<br></br>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Who We Are</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            We are a team of passionate web developers who believe in creating simple tools that solve real problems. This project is a part of our learning journey with React and frontend development. Open-source, beginner-friendly, and continuously evolving — just like us!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
