import React from 'react'
import "./style.css"




const Header = () => {

    const openWhatsapp = () => {
        window.location.href = "https://wa.me/923104065996"
          
    }
    return (
        <div>
            <div className="mainnavdiv">
            <div>
                <div className="avatardiv">
                    <img src="images/photo.jpg" alt="Avatar" className="avatar" />

                </div>

                <p className="navhead"> Adeel Javed </p>
                <p className="navhead1"> Web Developer </p>

            </div>
            <div className="endnav">
                <img id="endnavimage" src="images/whatsappImage.png" onClick={() => openWhatsapp()} />
                

            </div>
        </div>
        </div>
    )
}

export default Header
