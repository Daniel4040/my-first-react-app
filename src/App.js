import React, { Component } from "react";
import appStyles from "./App.module.css";
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
  Button
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.blogRef = React.createRef();
    this.videosRef = React.createRef();
    this.researchRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className={appStyles.App}>
        <Navbar color="dark" dark expand="md" className={"fixed-top text-left"}>
          <Container>
            <NavbarBrand className={appStyles["navbar-brand"]} href="#">
              This Scenic Life
            </NavbarBrand>
            <NavbarToggler
              className={appStyles["navbar-toggler"]}
              onClick={this.toggle}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={`${appStyles["nav-items"]} ml-auto`} navbar>
                <NavItem>
                  <NavLink
                    href={"#blog"}
                    onClick={() => {
                      this.scroll(this.blogRef);
                    }}
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"#videos"}
                    onClick={() => {
                      this.scroll(this.videosRef);
                    }}
                  >
                    Videos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"#research"}
                    onClick={() => {
                      this.scroll(this.researchRef);
                    }}
                  >
                    Research
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"#about"}
                    onClick={() => {
                      this.scroll(this.aboutRef);
                    }}
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"#contact"}
                    onClick={() => {
                      this.scroll(this.contactRef);
                    }}
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <div className={appStyles["intro-section"]}>
          <Container className={"container"}>
            <Row>
              <Col>
                <p>Love For The Outdoors</p>
                <p>
                  <Button tag="a" color="success" size="large" href={"#blog"}>
                    Explore
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={appStyles.blog} id={appStyles.blog} ref={this.blogRef}>
          <Container>
            <h1>Blog</h1>
            <Row className={"d-flex"}>
              <Col>
                <a href="/zion001">
                  <img
                    className={"rounded-circle"}
                    src={require("./img/zion-canyon.jpg")}
                    alt=""
                  />
                </a>
                <a href="/zion001">
                  <h3>Zion National Park</h3>
                  <p>The most magical place in the American desert!</p>
                </a>
              </Col>
              <Col>
                <a href="./">
                  <img
                    className={"rounded-circle"}
                    src={require("./img/crested-butte-fall.jpg")}
                    alt=""
                  />
                </a>
                <a href="./">
                  <h3>Rocky Mountains</h3>
                  <p>
                    Pheonomenal fall colors in Western Colorado do not
                    disappoint.
                  </p>
                </a>
              </Col>
              <Col>
                <a href="./">
                  <img
                    className={"rounded-circle"}
                    src={require("./img/san-diego-coast.jpg")}
                    alt=""
                  />
                </a>
                <a href="./">
                  <h3>California Coast</h3>
                  <p>
                    Anywhere along the Pacific Coast Highway is a place to stop
                    and take in the view!
                  </p>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className={appStyles.videos}
          id={appStyles.videos}
          ref={this.videosRef}
        >
          <h1>Videos</h1>
          <Container>
            <Row className={"row"}>
              <Col>
                <iframe
                  title="youtube-alum-cave"
                  src="https://www.youtube.com/embed/vbG6sN6dfCk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Col>
              <Col>
                <h3>Great Smoky Mountains</h3>
                <h5>Alum Cave Trail</h5>
                <p>
                  Join us as we hike to Alum Cave on the Tennessee side of Great
                  Smoky Mountains National Park! Alum Cave can be accessed via
                  the trail to the summit of Mt Le Conte and is about half way
                  up, offering beautiful views of the surrounding mountains
                  amidst the bluffs!
                </p>
              </Col>
            </Row>
            <Row className={"row"}>
              <Col>
                <iframe
                  title="youtube-angels-landing"
                  src="https://www.youtube.com/embed/nHWv6SiL1Gs"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Col>
              <Col>
                <h3>Zion National Park</h3>
                <h5>Angel's Landing Trail</h5>
                <p>
                  We truly believe Angel's Landing is the best trail in Zion
                  National Park, hands down! This trail offers one of the most
                  unique hiking experiences you can ever have.
                </p>
              </Col>
            </Row>
            <Row className={"row"}>
              <Col>
                <iframe
                  title="youtube-phelps-lake"
                  src="https://www.youtube.com/embed/E_oJAkvobP0"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Col>
              <Col>
                <h3>Grand Teton National Park</h3>
                <h5>Phelps Lake Trail</h5>
                <p>
                  We truly believe Angel's Landing is the best trail in Zion
                  National Park, hands down! This trail offers one of the most
                  unique hiking experiences you can ever have.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className={appStyles.research}
          id={appStyles.research}
          ref={this.researchRef}
        >
          <Container>
            <h1>Research</h1>
            <Row className={"d-flex"}>
              <Col>
                <a href="./">
                  <img
                    className={"rounded-circle"}
                    src={require("./img/zion-canyon.jpg")}
                    alt=""
                  />
                </a>
                <a href="./">
                  <h3>National Park Traffic</h3>
                  <p>
                    We've been studying yearly and monthly visitation data in
                    the National Parks, looking for trends for tent campers,
                    backpackers, hikers and more. If you're curious to learn
                    more about our beautiful shared public spaces, check out our
                    big data analysis project!
                  </p>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className={appStyles.about}
          id={appStyles.about}
          ref={this.aboutRef}
        >
          <Container>
            <Row>
              <Col>
                <h1>About</h1>
                <p className={appStyles["about-header"]}>
                  This Scenic Life is all about exploring and enjoying the
                  outdoors while bringing you on the journey. We are two
                  passionate outdoors guys with an interest in providing high
                  quality media for our fellow outdoors enthusiasts.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  className={"rounded-circle"}
                  src={require("./img/about-kyle-portrait.jpg")}
                  alt=""
                />
                <h3>Kyle</h3>
                <p>
                  Kyle is an expert on the mountains of the southeast,
                  particularly anything in North Carolina. He also has
                  significant miles in the American Southwest. re you a fan of
                  Asheville, the Black Mountains, the Smokies, or even Zion? If
                  so, Kyle has you covered.
                </p>
              </Col>
              <Col>
                <img
                  className={"rounded-circle"}
                  src={require("./img/about-daniel-portrait.jpg")}
                  alt=""
                />
                <h3>Daniel</h3>
                <p>
                  Daniel is quickly learning as much as possible about the Rocky
                  Mountains and the Colorado Plateau. Recently he's also been
                  exploring the pacific coast. If you want some inspiration out
                  West beyond the Southwest, you're in the right place.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className={appStyles.contact}
          id={appStyles.contact}
          ref={this.contactRef}
        >
          <Container>
            <Row>
              <Col>
                <h1>Contact</h1>
                <p>
                  <hr id={appStyles["email-split"]} />
                  <a href="mailto:evacreations.home@gmail.com">
                    <i
                      className={`${appStyles.far} ${appStyles["fa-envelope"]}`}
                    />
                    evacreations.home@gmail.com
                  </a>
                  <hr id={appStyles["email-split"]} />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
