import bagels from "./Gallery/bagelsBread.jpg";
import baguette from "./Gallery/baguetteBread.jpg";
import banana from "./Gallery/bananaBread.jpg";
import breadSticks from "./Gallery/breadSticksBread.jpg";
import flatB from "./Gallery/flatBread.jpg";
import foccacia from "./Gallery/foccaciaBread.jpg";
import sourdough from "./Gallery/sourdoughBread.jpg";


const Gallery = () => {
    return (
      <>
        <div class="recepiesGallery">
            <figure>
                <img id="sourdoughBreadImg"
                src={sourdough}
                alt=""/>
                <figcaption>Sourdough</figcaption>
            </figure>

            <figure>
                <img id="foccaciaBreadImg"
                src={foccacia}
                alt=""/>
                <figcaption>Foccacia</figcaption>
            </figure>

            <figure>
                <img id="flatBreadImg"
                src={flatB}
                alt=""/>
                <figcaption>Flat Bread</figcaption>
            </figure>

            <figure>
                <img id="breadSticksImg"
                src={breadSticks}
                alt=""/>
                <figcaption>Bread Sticks</figcaption>
            </figure>

            <figure>
                <img id="bananaBreadImg"
                src={banana}
                alt=""/>
                <figcaption>Banana Bread</figcaption>
            </figure>

            <figure>
                <img id="bagelsBreadImg"
                src={bagels}
                alt=""/>
                <figcaption>Bagels</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>

            <figure>
                <img id=""
                src={bagels}
                alt=""/>
                <figcaption>AAAHHH</figcaption>
            </figure>
        </div>
      </>
    );
  }
  
  export default Gallery;