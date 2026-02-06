import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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

// Images
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

// --- KOMPONEN TOMBOL MENU (VERSI LEBIH KECIL/COMPACT) ---
const MenuCard = ({ icon, text, link }) => (
  <Button
    className="shadow-lg d-flex align-items-center justify-content-start w-100 mb-3 p-2"
    color=""
    href={link}
    style={{
      backgroundColor: "rgba(175, 71, 210, 0.2)",
      backgroundImage: "none",
      border: "none",
      borderRadius: "15px",
      transition: "all 0.3s ease",
      minHeight: "40px", 
    }}
    
    // --- PERHATIKAN BAGIAN INI (PAKE 'setProperty' & 'important') ---
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(175,71,210,0.7)";
      
      // JANGAN PAKE '='. PAKE INI:
      e.currentTarget.style.setProperty("background-color", "rgba(175, 71, 210, 0.7)", "important");
      e.currentTarget.style.setProperty("background-image", "none", "important");
    }}
    
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 1rem 3rem rgba(175,71,210,0.7)"; 
      
      // BALIKIN JUGA PAKE 'important'
      e.currentTarget.style.setProperty("background-color", "rgba(175, 71, 210, 0.2)", "important");
      e.currentTarget.style.setProperty("background-image", "none", "important");
    }}
  >
    {/* Icon Lingkaran Hitam */}
    <div
      className="d-flex align-items-center justify-content-center mr-3 shadow-sm"
      style={{
        width: "25px", height: "25px", minWidth: "25px",
        borderRadius: "50%", backgroundColor: "#000", color: "#fff",
      }}
    >
      <i className={icon} style={{ fontSize: "14px" }} />
    </div>
    
    {/* Teks */}
    <div className="d-flex justify-content-between align-items-center w-100">
      <span
        className="text-white font-light-bold text-left"
        style={{ fontSize: "0.8rem", textTransform: "capitalize", lineHeight: "1.2" }}
      >
        {text}
      </span>
      <i className="tim-icons icon-minimal-right text-muted ml-2" style={{ color:"#fff", fontSize: "0.8rem" }} />
    </div>
  </Button>
);

export default function LandingPage() {
  React.useEffect(() => {
    // 1. Setup Class Body
    document.body.classList.toggle("landing-page");
    
    // 2. PERBAIKAN BIRU: Paksa background body jadi hitam & matikan scroll samping
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.backgroundColor = "#050505"; // Timpa warna biru default
    document.body.style.backgroundImage = "linear-gradient(to bottom, #050505, #1a1a1a)";

    return function cleanup() {
      document.body.classList.toggle("landing-page");
      // Reset style saat keluar halaman (opsional)
      document.body.style.overflowX = "auto";
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
    };
  }, []);

  const headerStyle = {
    background: "transparent", // Ubah jadi transparan karena body sudah diwarnai
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "80px",
    position: "relative",
    overflow: "hidden", // Mencegah shape keluar layar
    width: "100%",      // Pastikan full width
  };

  const bodyStyle = {
    background: "transparent",
  };

  return (
    <>
      <ExamplesNavbar />
      {/* Wrapper diberi overflow-hidden untuk keamanan ganda */}
      <div className="wrapper" style={{ overflowX: "hidden", width: "100%" }}>
        
        {/* --- BAGIAN HEADER UTAMA --- */}
        <div className="page-header" style={headerStyle}>
          <img alt="..." className="path" src={blobImg} />
          <img alt="..." className="path2" src={path2Img} />
          <img alt="..." className="shapes triangle" src={trianglesImg} />
          <img alt="..." className="shapes wave" src={wavesImg} />
          <img alt="..." className="shapes squares" src={squaresImg} />
          <img alt="..." className="shapes circle" src={circlesImg} />

          <div className="content-center w-100">
            <Container>
              
              {/* 1. JUDUL */}
              <div className="text-center mb-5">
                <h1 className="font-weight-bold text-white mb-2" style={{ fontSize: "3rem" }}>
                  Hello, 👋 I am <span style={{ color: "#AF47D2" }}>Dewa</span>
                </h1>
                <h3 className="text-white font-weight-light mt-0">
                  Project Manager, Analyst & Full Stack
                </h3>
              </div>

              {/* 2. BENTO GRID (LAYOUT SEJAJAR 3 KOLOM) */}
              <Row className="align-items-center justify-content-center">
                
                {/* KIRI */}
                <Col lg="3" md="5" xs="6" className="order-1 order-lg-1 px-2">
                  <MenuCard icon="tim-icons icon-single-02" text="About Me" link="#about" />
                  <MenuCard icon="tim-icons icon-paper" text="Resume" link="#resume" />
                  <MenuCard icon="tim-icons icon-briefcase-24" text="My Works" link="#portfolio" />
                </Col>

                {/* TENGAH (FOTO) */}
                <Col lg="4" md="12" xs="12" className="text-center order-2 order-lg-2 mb-4 mb-lg-0">
                  <div className="profile-wrapper" style={{ position: "relative", display: "inline-block" }}>
                    <img
                      alt="Profile"
                      className="img-fluid floating shadow-lg"
                      src={profileImg}
                      style={{
                        maxHeight: "380px",
                        width: "auto",
                        borderRadius: "25px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                </Col>

                {/* KANAN */}
                <Col lg="3" md="5" xs="6" className="order-1 order-lg-3 px-2">
                  <MenuCard icon="tim-icons icon-email-85" text="Contact Me" link="#contact" />
                  <MenuCard icon="fab fa-linkedin" text="LinkedIn" link="https://linkedin.com" />
                  <MenuCard icon="fab fa-instagram" text="Instagram" link="https://instagram.com" />
                </Col>

              </Row>

            </Container>
          </div>
        </div>

        {/* --- BAGIAN STATISTIK --- */}
        <section className="section section-lg" style={bodyStyle}>
          <section className="section">
            <img alt="..." className="path" src={path4Img} />
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
                      Achievements
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

        {/* --- BAGIAN BENEFITS --- */}
        <section className="section section-lg" style={bodyStyle}>
          <img alt="..." className="path" src={path4Img} />
          <img alt="..." className="path2" src={path5Img} />
          <img alt="..." className="path3" src={path2Img} />
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

        {/* --- BAGIAN FEATURES --- */}
        <section className="section section-lg section-safe" style={bodyStyle}>
          <img alt="..." className="path" src={path5Img} />
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
                    The design system comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
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

        {/* --- BAGIAN CHART --- */}
        <section className="section section-lg" style={bodyStyle}>
          <img alt="..." className="path" src={path4Img} />
          <img alt="..." className="path2" src={path2Img} />
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

        {/* --- BAGIAN SKILLS --- */}
        <section className="section section-lg section-coins" style={bodyStyle}>
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