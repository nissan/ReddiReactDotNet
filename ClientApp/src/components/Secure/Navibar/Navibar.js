import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import FaBarChart from "react-icons/lib/fa/bar-chart";
import FaDatabase from "react-icons/lib/fa/database";
import FaHome from "react-icons/lib/fa/home";
import ReactTooltip from "react-tooltip";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

class Navibar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle=this.toggle.bind(this);
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
    this.props.log.info("Navibar component rendered");
    const { isAuthenticated } = this.props.auth;
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <FaHome
              data-tip={
                this.props.appName
                  ? this.props.appName
                  : "ReddiReactDotNet Homepage"
              }
            />
            {this.props.appName ? this.props.appName : "ReddiReactDotNet"}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!isAuthenticated() && (
                <NavItem>
                  <Login auth={this.props.auth} log={this.props.log} />
                </NavItem>
              )}
              {isAuthenticated() && (
                <NavItem>
                  <Logout auth={this.props.auth} log={this.props.log} />
                </NavItem>
              )}
              <NavItem>
                <NavLink href="/components/">
                  <FaDatabase data-tip="SQL Server Query" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/nissan/ReddiReactDotNet">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FaBarChart data-tip="Reports" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Administrative Reports</DropdownItem>
                  <DropdownItem>Executive Reports</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Custom Reports</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <ReactTooltip />
      </React.Fragment>
    );
  }
}

export default Navibar;
