import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from "reactstrap";
import * as Spinner from "react-spinkit";
import { Container, Row, Col } from "reactstrap";
import FaBarChart from "react-icons/lib/fa/bar-chart";
import FaDatabase from "react-icons/lib/fa/database";
import FaHome from "react-icons/lib/fa/home";
import ReactTooltip from "react-tooltip";
import faker from "faker";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      companyName: "",
      addressbook: [],
      username: ""
    };
  }
  componentDidMount() {
    this.setState({ companyName: faker.company.companyName() });
    const list = new Array(100).fill(true).map(() => ({
      name: faker.name.findName(),
      description: faker.name.jobTitle(),
      location: faker.address.city()
    }));
    this.setState({ addressBook: list });
    this.setState({ username: faker.name.findName() });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Project Riverside</h1>
              </header>
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                  <FaHome data-tip="Project Riverside Homepage" />
                  Project Riverside
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">
                        <FaDatabase data-tip="SQL Server Query" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <FaBarChart data-tip="Reports" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Power Bi Reports</DropdownItem>
                        <DropdownItem>SQL Server Reports</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Custom Reports</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md="9">
              <section>
                This is a section
                <div className="App-intro">
                  Welcome to Project Riverside DEMO!
                </div>
              </section>
              <article>
                This is an article
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.addressBook &&
                      this.state.addressBook.map((address, key) => (
                        <tr>
                          <th scope="row">{key}</th>
                          <td>{address.name}</td>
                          <td>{address.description}</td>
                          <td>{address.location}</td>
                        </tr>
                      ))}
                    {!this.state.addressBook && <Spinner name="three-bounce" />}
                  </tbody>
                </Table>
              </article>
            </Col>
            <Col md="auto">
              <aside>
                <Spinner name="ball-grid-beat" color="coral" />This is a sidebar
              </aside>
            </Col>
          </Row>
          <Row>
            <Col>
              <footer>&copy;2018 {this.state.companyName}</footer>
              <ReactTooltip />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
