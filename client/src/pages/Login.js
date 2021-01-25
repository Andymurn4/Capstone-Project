import React from "react";
import { Form, Button } from "semantic-ui-react";

function Login(props) {
  return (
    <div>
      <h1>Login Page</h1>
      <Form>
        <Form.Input
          label="Username"
          placeholder="Username"
          name="username"
          type="text"
          //   value={values.username}
          //   error={errors.username ? true : false}
          //   onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          //   value={values.password}
          //   error={errors.password ? true : false}
          //   onChange={onChange}
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login;
