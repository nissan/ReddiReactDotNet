import React from "react";
import { Button } from "reactstrap";
export class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    this.props.log.info("Logout component rendered");
    return (
      <Button
        color="primary"
        className="btn-margin"
        onClick={this.logout.bind(this)}
      >
        Log Out
      </Button>
    );
  }
}
export default Logout;
