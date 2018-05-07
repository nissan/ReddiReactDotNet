import React from "react";
import { Button } from "reactstrap";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login() {
    this.props.auth.login();
  }
  render() {
    this.props.log.info("Login component rendered");
    return (
      <Button
        color="primary"
        className="btn-margin"
        onClick={this.login.bind(this)}
      >
        Log In
      </Button>
    );
  }
}
export default Login;
