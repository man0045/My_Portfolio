import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Discover my core competencies showcased below —
                <br />
                a glimpse into my skill sets.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li><h5>C</h5></li>
                        <li><h5>C++</h5></li>
                        <li><h5>JAVASCRIPT</h5></li>
                        <li><h5>PYTHON</h5></li>
                        <li><h5>DATASTRUCTURE</h5></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li><h5>HTML,CSS</h5></li>
                        <li><h5>REACTJS</h5></li>
                        <li><h5>MONGODB</h5></li>
                        <li><h5>NODEJS</h5></li>
                        <li><h5>EXPRESSJS</h5></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col">
                      <ul>
                        <li><h5>PANDAS,NUMPY</h5></li>
                        <li><h5>MYSQL</h5></li>
                        <li><h5>FLASK</h5></li>
                        <li><h5>STATISTICS</h5></li>
                        <li><h5>DATA VISUALIZATION</h5></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Carousel>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// import colorSharp from '../assets/img/color-sharp.png';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';
// import meter1 from '../assets/img/meter1.svg';
// import meter2 from '../assets/img/meter2.svg';
// import meter3 from '../assets/img/meter3.svg';

// const SkillItem = ({ image, title }) => (
//   <div className="item">
//     <img src={image} alt="Skill Icon" />
//     <h5>{title}</h5>
//   </div>
// );

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//   };

//   return (
//     <section className="skill" id="skills">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               <h2>Skills</h2>
//               <p>
//                 Discover my core competencies showcased below —
//                 <br />
//                 a glimpse into my skill sets.
//               </p>

//               <Carousel
//                 responsive={responsive}
//                 infinite
//                 className="owl-carousel owl-theme skill-slider"
//               >
//                 <SkillItem image={meter1} title="Web Development" />
//                 <SkillItem image={meter2} title="C++" />
//                 <SkillItem image={meter3} title="Data-Structure" />
//                 <SkillItem image={meter1} title="Machine Learning" />
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img className="background-image-left" src={colorSharp} alt="Background" />
//     </section>
//   );
// };

