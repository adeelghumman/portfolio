import React from 'react'
import "./style.css"
import HPcomponent from './HPcomponent'

const BelowSlider2 = () => {
    return (
        <div>
            <div id="bs3">
                <div id="bs31">
                    <h1> What I do? </h1>
                </div>
                <div id="bs4">
                    <div id="bs41">
                        <div>
                            <HPcomponent headingData={"WEB Developoer"} />
                            <HPcomponent paragraphData={"Front-end development, creativity, wireframing, website/creative designs, good interpersonal and communication skills"} />
                            <p id="bs4c"></p>
                        </div>
                    </div>
                    <div id="bs42">
                        <div>
                            <HPcomponent headingData={"UI Designs "} />
                            <HPcomponent paragraphData={"Defining and implementing innovative solutions for product visuals and experience executing all visual designs from scratch till finish"} />
                        </div>
                    </div>
                    <div id="bs43">
                        <div>
                            <HPcomponent headingData={"Application Developer"} />
                            <HPcomponent paragraphData={"eveloping API’s to support mobile functionalities, using and adapting prevailing web applications for apps, designing interfaces to enhance user’s experience"} />
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default BelowSlider2
