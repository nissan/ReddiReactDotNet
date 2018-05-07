import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../Header/Header";
import Navibar from "../Navibar/Navibar";
import Section from "../Section/Section";
import Article from "../Article/Article";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import faker from "faker";
import '../../../App.css';

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressBook: [],
      companyName: '',
      appName:'',
      sidebarLinks:[]
    }
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
    this.setState({addressBook:list})
    this.setState({companyName:faker.company.companyName() })
    this.setState({appName:faker.commerce.productName()})
    this.setState({sidebarLinks: sidebarItems});
  }
  render() {
    this.props.log.info("Page component rendered");
    return (
      <Container>
        <Row>
          <Col>
              <Header appName={this.state.appName} log={this.props.log} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navibar appName={this.state.appName} log={this.props.log} />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Section appName={this.state.appName} log={this.props.log} />
            <Article addressBook={this.state.addressBook} log={this.props.log} />
          </Col>
          <Col md="auto">
            <Sidebar items={this.state.sidebarLinks} log={this.props.log} />
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
export default Page;
