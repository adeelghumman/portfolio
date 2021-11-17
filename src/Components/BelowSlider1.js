import React from 'react'
import './style.css'

const BelowSlider1 = () => {

    const DownloadCv = () => {
        window.open('http://192.168.18.13:8080/src/Components/Adeel.pdf');
    }
    return (
        <div>
            <div className="bs1">
                <div id="bs1b">
                    <button type="button" id="btn1" onClick={() => { DownloadCv() }}>Download Cv! </button>

                </div>
                <img id="bs1b" src="images/p.jpg" className="avatar" />
                <div id="bs1b">
                    <button type="button" id="btn2" onClick={() => { DownloadCv() }}>Browse Portfolio!</button>
                </div>

            </div>
        </div>
    )
}

export default BelowSlider1
