import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  // Jumbotron,
  Button
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my first react app</p>
          </header>*/}
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarBrand className="navbar-brand" href="/">
              This Scenic Life
            </NavbarBrand>
            <NavbarToggler className="navbar-toggler" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="nav-items ml-auto" navbar>
                <NavItem>
                  <NavLink href={"#places"}>Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"#videos"}>Videos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"#photography"}>Photos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"#about"}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={"#contact"}>Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div className="intro-section">
          <div className="overlay" />
          <Container className="container">
            <Row>
              <Col>
                <p>Love For The Outdoors</p>
                <p>
                  <Button tag="a" color="success" size="large" href={"#places"}>
                    Explore
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="places" id="places">
          <Container>
            <Row>
              <Col>
                <img
                  className="rounded-circle"
                  src={require("./img/zion-canyon.jpg")}
                />
                <h3>Zion</h3>
              </Col>
              <Col>
                <img
                  className="rounded-circle"
                  src={require("./img/crested-butte-fall.jpg")}
                />
                <h3>Rocky Mountains</h3>
              </Col>
              <Col>
                <img
                  className="rounded-circle"
                  src={require("./img/san-diego-coast.jpg")}
                />
                <h3>San Diego</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
