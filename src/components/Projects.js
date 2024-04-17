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
    // {
    //   title: "Manage your own books Section",
    //   description: "Here we create your own links of Api and send it in our Databases",
    //   imgUrl: projectSecondImg6,
    // },
    // {
    //   title: "Update your Project section ",
    //   description: "Here we Update our project and to maintain the Books",
    //   imgUrl: projectSecondImg7,
    // },
    {
      title: "Blog Section",
      description: "Here we just Gives the review of throgh the blogs",
      imgUrl: projectSecondImg8,
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
                        <Nav.Link eventKey="first">Project-1 Text-O-oper</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Book_Store</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
