import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/a.png";
import projImg2 from "../assets/img/ab.png";
import projImg3 from "../assets/img/abc.png";
import projImg4 from "../assets/img/1.png";
import projImg5 from "../assets/img/41.png";
import projImg6 from "../assets/img/31.png";
import projectSecondImg1 from "../assets/img/2.1.png";
import projectSecondImg2 from "../assets/img/2.2.png";
import projectSecondImg3 from "../assets/img/2.3.png";
import projectSecondImg4 from "../assets/img/2.4.png";
import projectSecondImg5 from "../assets/img/2.4.1.png";
import projectSecondImg8 from "../assets/img/3blog.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import rs1 from "../assets/img/RS1.png";
import rs2image from "../assets/img/rs2.png";
import rs3image from "../assets/img/rs4.png";
import rs4image from "../assets/img/rs5.png";
import rs5image from "../assets/img/rs6.png";
import rs6image from "../assets/img/footer.png";

// export const ProjectSecond = () => {

// }

export const Projects = () => {

  const projects = [
    {
      title: "Text-O-oper Frontend page",
      description: "Html,css,Javascrip used",
      imgUrl: projImg1,
    },
    {
      title: "Login/Signup requires",
      description: "my-Sql used Here",
      imgUrl: projImg2,
    },
    {
      title: "Services we provide",
      description: "Again it is simple Navbar using HTML CSS",
      imgUrl: projImg3,
    },
    {
      title: "Text-Summerizer",
      description: "ML model ",
      imgUrl: projImg4,
    },
    {
      title: "Text-Translator",
      description: "Hugging Face used here",
      imgUrl: projImg5,
    },
    {
      title: "Text-Recognition",
      description: "EasyOCR used Here",
      imgUrl: projImg6,
    },
  ];
  const projectSecond = [
    {
      title: "Home-Page",
      description: "Normal React and Tailwind used here",
      imgUrl: projectSecondImg1,
    },
    {
      title: "AboutPage",
      description: "Here Just importd a card from the reacht biteflow",
      imgUrl: projectSecondImg2,
    },
    {
      title: "Shop Section",
      description: "Here Imported the books Url form good Books Api",
      imgUrl: projectSecondImg3,
    },
    {
      title: "Sell your Own book Section ",
      description: "Here The sell your Own book section created to just add Accounting Part of the projects",
      imgUrl: projectSecondImg4,
    },
    {
      title: "Create your own books in DashBoard",
      description: "Here imported all the links via api to create your own books",
      imgUrl: projectSecondImg5,
    },
    
    {
      title: "Blog Section",
      description: "Here we just Gives the review of throgh the blogs",
      imgUrl: projectSecondImg8,
    },

  ];
  const RealEstate = [
    {
      title: "Front page", 
      description: "Here it shows out there banner page",
      imgUrl: rs1,
    },
    {
      title: "Partnership",
      description: "The partnership with the companies and dealers",
      imgUrl: rs2image,
    },
    {
      title: "Properties",
      description: "properties in Best stock of selling prices",
      imgUrl: rs3image,
    },
    {
      title: "Top Notch properties ",
      description: "The top notched properties to be best to sell",
      imgUrl: rs4image,
    },
    {
      title: "OUR VALUES",
      description: "Here created the Values for client",
      imgUrl: rs5image,
    },
    {
      title: "The footer",
      description: "The footer web pages",
      imgUrl: rs6image,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Text-O-oper</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Book-Store</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Real-Estate</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Text-O-Oper, my project, combines machine learning, Flask, HTML, CSS, and MySQL for efficient text processing. It features a machine learning-based text summarizer, language translation, and text recognition from images. With secure login/signup using MySQL, it ensures user privacy. This all-in-one platform transforms text-related tasks, offering a seamless and innovative solution for condensed summarization, language translation, and image-based text extraction.</p>
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>technology Used MongoDB, Nodejs, Reactjs,Expressjs,Firebase
                          purpose of the project is to creating a Book store page in which
                          user can buy the book sell his own book, if we want to update
                          the book than seller can update also also delete the book and
                          also and added Some additional function of Blogs and we can
                          create the blog on a particular book and can remove his Blog
                          also.
                          <Row>
                            {
                              projectSecond.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                  />
                                )
                              })
                            }
                          </Row>
                        </p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>A real estate frontend project using React can offer dynamic property listings, interactive maps, and streamlined user experiences for buyers and sellers.A real estate frontend project using React can leverage components like property cards, search filters, and responsive design to provide a seamless browsing experience for users, enhancing engagement and conversion rates.
                        <Row>
                          {
                            RealEstate.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                          </Row>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
