import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Education" id="Education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="Education-bx wow zoomIn">
              <h2>Academic Background</h2>
              <p>
                This is my Education background
                <br />
                Education backGround.
              </p>
                <div className="item">
                      <h5>● R.S.M. SENIOR SECONDARY, Gorakhpur — Intermediate Secured 93% in PCM. - 2021</h5>
                      <h5>● R.S.M. SENIOR SECONDARY SCHOOL, Gorakhpur — High School Secured 85.6%. -2019</h5>
                      <h5>● ABES Engineering College, Ghaziabad — Graduation(November 2021- July 2025)
                         Pursuing Bachelor of Technology in Computer Science and
                         Engineering(DataScience) with average of 8.1 SGPA till 5th sem.
                      </h5>
                </div>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}