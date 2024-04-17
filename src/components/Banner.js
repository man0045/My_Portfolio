// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.png";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Web Developer", "Data-Structure", "ML-Enthusiast" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hi! I'm Mannu`} <span className="txt-rotate" dataPeriod="750" data-rotate='[ "Web Developer", "Data-Structure", "ML Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
//                   <p>I am Mannu Chaurasiya, a dedicated undergraduate at ABES Engineering College (2021-2025). With a strong academic record (8 SGPA), I've ventured into impactful projects. I developed a dynamic real estate website using React.js, exhibited web prowess, and created a fake news detection system, emphasizing data credibility. Venturing into healthcare tech, I designed a predictive model for multiple diseases. Noteworthy is my iNotebook application, a MERN stack project showcasing full-stack proficiency. Eager to contribute to the dynamic tech landscape, I look forward to innovative challenges.

// Best regards,
// Mannu Chaurasiya</p>
//                   <button onClick={() => console.log('connect')} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none' }}> <a href="https://www.linkedin.com/in/mannu-chaurasiya-15793a23a/">Let's Connect</a> <ArrowRightCircle size={25} /></button>
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import MyImg from "../assets/img/My-Img.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Data-Structure", "ML-Enthusiast" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mannu`} <span className="txt-rotate" dataPeriod="750" data-rotate='[ "Web Developer", "Data-Structure", "ML Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am Mannu Chaurasiya, a dedicated undergraduate at ABES Engineering College (2021-2025). With a strong academic record (8 SGPA), I've ventured into impactful projects. I developed a dynamic real estate website using React.js, exhibited web prowess, and created a fake news detection system, emphasizing data credibility. Venturing into healthcare tech, I designed a predictive model for multiple diseases. Noteworthy is my iNotebook application, a MERN stack project showcasing full-stack proficiency. Eager to contribute to the dynamic tech landscape, I look forward to innovative challenges.

Best regards,
Mannu Chaurasiya</p>
                  <button onClick={() => console.log('connect')} style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none' }}> <a href="https://www.linkedin.com/in/mannu-chaurasiya-15793a23a/" style={{ color: 'white', textDecoration: 'none' }}>Let's Connect</a> <ArrowRightCircle size={25} /></button>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <img src={MyImg} alt="my img" style={{ width: "350px", borderRadius: "20%" , marginTop: '150px'}} />
                  
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
