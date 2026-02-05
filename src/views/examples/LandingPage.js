import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";
import Typewriter from 'typewriter-effect';

import blobImg from "assets/img/blob.png";
import path2Img from "assets/img/path2.png";
import trianglesImg from "assets/img/triunghiuri.png";
import wavesImg from "assets/img/waves.png";
import squaresImg from "assets/img/patrat.png";
import circlesImg from "assets/img/cercuri.png";
import etherumImg from "assets/img/etherum.png";
import path4Img from "assets/img/path4.png";
import path5Img from "assets/img/path5.png";
import profileImg from "assets/img/profile.jpg";
import bitcoinImg from "assets/img/bitcoin.png";
import rippImg from "assets/img/ripp.png";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  // --- STYLE CONFIGURATION ---
  
  // 1. Style untuk HEADER (Gradasi / Gradient)
  const headerStyle = {
    background: "linear-gradient(to bottom, #190a05, #303841)" 
  };

  // 2. Style untuk BAGIAN BAWAH (1 Warna Solid)
  // Ganti kode hex "#303841" ini kalau mau ganti warna dasar webnya
  const bodyStyle = {
    background: "#303841" 
  };

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          {/* GUNAKAN headerStyle DI SINI */}
          <div className="page-header" style={headerStyle}></div>

          <img
            alt="..."
            className="path"
            src={blobImg}
          />
          <img
            alt="..."
            className="path2"
            src={path2Img}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={trianglesImg}
          />
          <img
            alt="..."
            className="shapes wave"
            src={wavesImg}
          />
          <img
            alt="..."
            className="shapes squares"
            src={squaresImg}
          />
          <img
            alt="..."
            className="shapes circle"
            src={circlesImg}
          />

          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Halo, Saya <span className="text-warning">Budi Santoso</span> <br />
                  <span className="text-white" style={{ fontSize: "0.6em" }}>
                    I am a
                    <span className="text-success">
                      <Typewriter
                        options={{
                          strings: [
                            "Web Developer",
                            "UI/UX Designer",
                            "React Specialist",
                            "Freelancer"
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </span>
                </h1>
                <p className="text-white mb-3">
                  Saya membantu mengubah ide menjadi website yang modern, cepat, dan interaktif. 
                  Fokus pada React JS dan desain yang user-friendly.
                </p>
                <div className="btn-wrapper mb-3">
                  <Button
                    className="btn-link"
                    color="success"
                    href="#portfolio"
                    size="sm"
                  >
                    <i className="tim-icons icon-spaceship" /> Lihat Project Saya
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="https://github.com/username">
                      <i className="fab fa-github" />
                    </Button>
                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="https://linkedin.com/in/username">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button className="btn-icon btn-simple btn-round btn-neutral" color="default" href="https://instagram.com/username">
                      <i className="fab fa-instagram" />
                    </Button>
                  </div>
                </div>
              </Col>
              
              <Col lg="4" md="5">
                <img
                  alt="Profile"
                  className="img-fluid floating"
                  src={profileImg}
                  style={{ borderRadius: "50%", border: "0.8px solid #1f8ef1", mixBlendMode: "overlay"}} 
                />
              </Col>
            </Row>
          </div>
        </div>

        
        <section className="section section-lg">
          
          <section className="section">
            
            <img
              alt="..."
              className="path"
              src={path4Img}
            />

            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,237</CardTitle>
                                <p />
                                <p className="card-category">Awards</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3,653</CardTitle>
                                <p />
                                <p className="card-category">Commits</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-gift-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">593</CardTitle>
                                <p />
                                <p className="card-category">Presents</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-credit-card text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">10,783</CardTitle>
                                <p />
                                <p className="card-category">Forks</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Large <br />
                      Achivements
                    </h1>
                    <p>
                      I should be capable of drawing a single stroke at the
                      present moment; and yet I feel that I never was a greater
                      artist than now.
                    </p>
                    <br />
                    <p>
                      When, while the lovely valley teems with vapour around me,
                      and the meridian sun strikes the upper surface of the
                      impenetrable foliage of my trees, and but a few stray.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Show all{" "}
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        
        </section>
        
        
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={path4Img}
          />
          <img
            alt="..."
            className="path2"
            src={path5Img}
          />
          <img
            alt="..."
            className="path3"
            src={path2Img}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Low Commission</h4>
                      <hr className="line-primary" />
                      <p>
                        Divide details about your work into parts. Write a few
                        lines about each one. A paragraph describing a feature
                        will.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">High Incomes</h4>
                      <hr className="line-warning" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing feature will be a feature.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Verified People</h4>
                      <hr className="line-success" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing be enough.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={path5Img}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={profileImg}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={path4Img}
          />
          <img
            alt="..."
            className="path2"
            src={path2Img}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Investments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  My <span className="text-info">Skills</span>
                </h1>
              </Col>
            </Row>
            <Row>
              {/* SKILL 1: Frontend */}
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={etherumImg} 
                      style={{ width: "100px" }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Frontend Dev</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>React JS & Vue</ListGroupItem>
                        <ListGroupItem>HTML5 & CSS3</ListGroupItem>
                        <ListGroupItem>Bootstrap & Tailwind</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              {/* SKILL 2: Design */}
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={rippImg}
                      style={{ width: "100px" }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">UI/UX Design</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Figma & Adobe XD</ListGroupItem>
                        <ListGroupItem>User Research</ListGroupItem>
                        <ListGroupItem>Prototyping</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              {/* SKILL 3: Tools */}
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={bitcoinImg}
                      style={{ width: "100px" }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Tools & Others</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Git & GitHub</ListGroupItem>
                        <ListGroupItem>VS Code</ListGroupItem>
                        <ListGroupItem>Agile Scrum</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}