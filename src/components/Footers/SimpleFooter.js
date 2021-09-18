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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
        
          <Container className="container-lg">
            <Row>
          
          
              <Col className="text-lg-center btn-wrapper" lg="6">
                
                
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="linkedin"
                  href="https://www.linkedin.com/in/hala-almasharfeh-6338b1214/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
               
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/hala277"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
             </Row>
            <hr />
           
          
          </Container>
        
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
