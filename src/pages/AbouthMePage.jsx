import ja_bartek from '../assets/ja_bartek.jpg'

function About() {
    return (
        <>
            <div style={{alignItems: "center"}} className="containerAbout">
                <div className="profilePhoto">
                    <img src={ja_bartek} alt="" className="opening__image"></img>
                </div>
                <div className="profileText">
                    <h1 style={{paddingBottom: "30px"}}>O mnie</h1>
                    <h2>Nazywam się Bartek, pochodzę z Gdańska, jestem miłośnikiem podróży i historii. Odkrywaj świat razem ze mną!</h2>
                </div>
            </div>
        </>
    );
}

export default About;