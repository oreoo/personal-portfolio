import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/netflix.png";
import projImg1 from "../assets/img/coursera.png";
import projImg3 from "../assets/img/dappazon.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coursera with Cart",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl:"https://github.com/oreoo/Udemy-Ecommerce",
    },
    {
      title: "Simplified Netflix Clone",
      description: "Design & Development",
      imgUrl: projImg2,
      gitUrl:"https://github.com/oreoo/Netfilx-Clone",
    },
    {
      title: "Dapp Amazon",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl:"https://github.com/oreoo/dappazon",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl:"https://github.com/oreoo/dappazon",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I did.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Coursera with Cart">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Coursera with Cart">Coursera with Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Simplified Netflix">Simplified Netflix</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Dapp Amazon">Dapp Amazon</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="Coursera with Cart">
                      {/* <Row>
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
                      </Row> */}
                      <p>This project entailed the development of an e-learning platform, similar to Udemy or Coursera, with an integrated shopping cart for course purchases. The website provided information on a variety of courses and facilitated user purchases through an intuitive shopping cart. 
                        It integrated secure payment gateways and handled user data efficiently. </p>
                      <ProjectCard
                                //key={index}
                        {...projects[0]}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Simplified Netflix">
                      <p>This project involved creating a streamlined version of the Netflix platform, using tools like React.js for front-end development. The key goal of the project was to mimic the look and functionality of the original platform. The project incorporated real-time data fetching from a third-party movie database and allowed interactive navigating through various movie lists. 
                        It focused on optimizing the user interface to be responsive and cross-browser compatible.</p>
                       <ProjectCard
                                //key={index}
                        //title={projects[1].title} imgUrl={projects[1].imgUrl} description={projects[1].description}
                        {...projects[1]}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Dapp Amazon">
                      <p>This ambitious project aimed to leverage the decentralization and transparency of blockchain technology to create a Web3 version of the world's largest e-commerce platform, Amazon. 
                        The front-end development focused on providing users with a seamless browsing, purchasing, and reviewing experience, while interoperating with smart contracts on the blockchain at the backend. It required a deep understanding of not only traditional front-end development tools but also blockchain tech and smart contract interaction.</p>
                    <ProjectCard
                                //key={index}
                        //title={projects[2].title} imgUrl={projects[2].imgUrl} description={projects[2].description}
                        {...projects[2]}
                      />
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
