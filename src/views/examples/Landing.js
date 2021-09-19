/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
           
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        My Projects{" "}
                        <span></span>
                      </h1>
                      <p className="lead text-white">
                      the most thing that makes me excited about the tech is that we can see every thing live without waiting for alot of time also that its make every thing easy and more fun to do and the most important that it save us time and make us earn mony .
                      </p>
                     
                    </Col>
                  </Row>
                </div>
              </Container>
             
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          
                          <h6 className="text-primary text-uppercase">
                          TVBeats
                          </h6>
                          <p className="description mt-3">
                          website for showing list of new movies and series
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://tvbeats.github.io/TVBeats/"
                           
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                         
                          <h6 className="text-success text-uppercase">
                          Cookie Stand
                          </h6>
                          <p className="description mt-3">
                          Cookie Stand website for cookie sales.
                          </p>
                          
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://hala277.github.io/cookie-stand/"
                           
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                         
                          <h6 className="text-warning text-uppercase">
                          Bus Mall
                          </h6>
                          <p className="description mt-3">
                            Bus Mall is awebsite have local storage and chart
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://hala277.github.io/bus-mall-/"
                            
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                   
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
         
                
                
          
         
                     
                     
         </main> 
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
