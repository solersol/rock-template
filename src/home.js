const Home = ( props ) => {
    const justImg = props.ObjImg;
    
    return(
        <div className="homePage">
            <div className="homeTextPic">
                <div className="homeText">
                    <h1>PEPE</h1>
                    <h1>ROCKY</h1>
                    <h4>
                        Why did Pepe sit on the rock? 
                        Because he wanted to be a little “boulder”.    
                    </h4>
                    <p>
                        CA:
                        0000000000000000000000000000000000000000000
                    </p>
                    <div className="allSC-Btn">
                        <button>Buy $PEPER</button>
                        <div className="allSocHandle">
                            <span><img src={justImg.tw} alt="twitter logo" /></span>
                            <span><img src={justImg.tg} alt="telegram logo" /></span>
                            <span><img src={justImg.dc} alt="discord logo" /></span>
                            <span><img src={justImg.rd} alt="reddit logo" /></span>
                        </div>
                    </div>
                </div>
                <div className="homePic">
                    <img src={justImg.pepeR1} alt="pepe on the rock" />
                </div>
            </div>
        </div>
    )
}

export default Home;