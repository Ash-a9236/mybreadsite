import heroImg from "./bannerHeroImage.jpg";
import breadIntroImg from "./breadIntroductionImage.png";


const Home = () => {
    return (
        <>
            <header>
                <div class="Hero">
                    <img id="heroImage"
                    src={heroImg}
                    alt="A wallpaper of cute cartoon-style drawn bread and pastries"
                    class="center" />

                    <div class="heroText">
                        <h1><strong>MAKE YOUR OWN BREAD</strong></h1>
                        <button class="roundButton"><a id="heroButton" href="./gallery.html"><b>DISCOVER</b></a></button>
                     </div>
                </div>
            </header>

            <div id="beginningQuote">
                <center><h1>Enjoy life : Eat Bread</h1></center>
            </div>

            <article id="FirstArticle">
                <img id="FirstArticleLeftImage"
                src={breadIntroImg}
                alt="A round bread view from above" />

                <section id="FirstArticleRightBox">
                    <p>Throughout history, bread has been one of the most important food of many cultures. <br /> <br /> Usually made from wheat and water, it is one of the oldest food of humanity, dating back from the dawn of agriculture</p>
                </section>
            </article>
        </>
    );
  }
  
  export default Home;