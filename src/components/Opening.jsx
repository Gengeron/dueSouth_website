
import background from '../assets/gravelride500.jpg'

/*import img1 from '../assets/nissan_xterra.jpg'
import img2 from '../assets/mitsu_delica.jpg'
import img3 from '../assets/police.jpg'

import showSlides from "../components/AutomaticSlideshow";*/


function Opening() {
    return (
        <>
            <section className="opening">
                <div className="opening__content">
                    <h1 className="opening__header">Twoja codzienna dawka inspiracji</h1>
                    <h2 className="opening__heading">Samolotem, autem, rowerem czy kajakiem?<h2/>
                        A może pieszo? Tu znajdziesz pomysły na aktywny wypoczynek w kraju i nie tylko!</h2>
                </div>
                <img src={background} alt="" className="opening__image"></img>


                {/*<div className={"slideshow-container"}>
                    <div className={"mySlides fade"}>
                        <div className="numberText">1 / 3</div>
                        <img src={img1} alt="" style="width:100%"/>
                        <div className="text">Caption One</div>
                    </div>

                    <div className={"mySlides fade"}>
                        <div className="numberText">2 / 3</div>
                        <img src={img2} alt="" style="width:100%"/>
                            <div className="text">Caption Two</div>
                    </div>

                    <div className={"mySlides fade"}>
                        <div className="numberText">3 / 3</div>
                        <img src={img3} alt="" style="width:100%"/>
                            <div className="text">Caption Three</div>
                    </div>

                    <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onClick="plusSlides(1)">&#10095;</a>
                </div>


                <div style="text-align:center">
                    <span className="dot" onClick="currentSlide(1)"></span>
                    <span className="dot" onClick="currentSlide(2)"></span>
                    <span className="dot" onClick="currentSlide(3)"></span>
                </div>*/}


            </section>
        </>
    );
}


export default Opening;