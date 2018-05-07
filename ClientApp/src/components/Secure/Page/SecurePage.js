import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Layout/Header/Header";
import Navibar from "../Navibar/Navibar";
import Section from "../../Layout/Section/Section";
import Article from "../../Layout/Article/Article";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Footer from "../../Layout/Footer/Footer";
import faker from "faker";
import "../../../App.css";

export class SecurePage extends React.Component {
  constructor(props) {
    super(props);
    this.props.log.info(
      `Page component constructed with authentication ${this.props.auth}`
    );
    this.goTo = this.goTo.bind(this);
    this.state = {
      addressBook: [],
      companyName: "",
      appName: "",
      sidebarLinks: []
    };
  }
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  componentDidMount() {
    this.props.log.info("Page component mounted");
    const list = new Array(100).fill(true).map(() => ({
      name: faker.name.findName(),
      description: faker.name.jobTitle(),
      location: faker.address.city()
    }));
    const sidebarItems = new Array(10).fill(true).map(() => ({
      title: faker.commerce.productName(),
      url: faker.internet.url()
    }));
    this.setState({ addressBook: list });
    this.setState({ companyName: faker.company.companyName() });
    this.setState({ appName: faker.commerce.productName() });
    this.setState({ sidebarLinks: sidebarItems });
  }
  render() {
    this.props.log.info("Secure Page component rendered");
    const {isAuthenticated} = this.props.auth;
    return (
      <Container>
        <Row>
          <Col>
            <Header appName={this.state.appName} log={this.props.log} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navibar
              appName={this.state.appName}
              log={this.props.log}
              auth={this.props.auth}
            />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Section appName={this.state.appName} log={this.props.log} />
            {isAuthenticated() && (
            <Article
              addressBook={this.state.addressBook}
              log={this.props.log}
            />
            )}
            {!isAuthenticated() && (
              <div>You need to Log In to view data </div>
            )}
          </Col>
          <Col md="auto">
            {isAuthenticated() && (
              <Sidebar items={this.state.sidebarLinks} log={this.props.log} />
            )}
            {!isAuthenticated() && (
              <Sidebar log={this.props.log} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer companyName={this.state.companyName} log={this.props.log} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SecurePage;
