export default function Contact( props ){
    let justLogo = props.logo1;
    let justImg4 = props.allImg4;
    let justImg = props.allImg;

    return(
        <div className="contactPage homePage">
            <h1>Contact</h1>
            <div className="socialPulic">
                <span>
                    <img src={justImg4.dt} alt="Dexstool"/>
                </span>
                <span>
                    <img src={justImg4.ds} alt="Dexscreener"/>
                </span>
                <span>
                    <img src={justImg4.dv} alt="Dexview"/>
                </span>
                <span>
                    <img src={justImg4.cc} alt="Coingecko"/>
                </span>
            </div>
            <div className="socialPrivate">
                <div>
                    <span><img src={justLogo} alt="Pepe logo" /></span>
                </div>
                <div className="allSocHandle">
                    <span><img src={justImg.tw} alt="twitter logo" /></span>
                    <span><img src={justImg.tg} alt="telegram logo" /></span>
                    <span><img src={justImg.dc} alt="discord logo" /></span>
                    <span><img src={justImg.rd} alt="reddit logo" /></span>
                </div>
                <div className="toBeRmv">

                </div>
            </div>
            <footer className="footText">
                <span></span>
                <p>© 2024 PEPER. All rights reserved.</p>
            </footer>
        </div>
    )
}