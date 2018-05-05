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

class Navibar extends React.Component {
  constructor(props) {
    super(props);
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
      <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <FaHome data-tip={this.props.appName? this.props.appName : 'ReddiReactDotNet Homepage'} />
          {this.props.appName? this.props.appName : 'ReddiReactDotNet'}
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
