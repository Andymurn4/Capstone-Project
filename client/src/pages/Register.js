import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
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
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          //   value={values.email}
          //   error={errors.email ? true : false}
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
        <Form.Input
          label="Confirm Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          //   value={values.confirmPassword}
          //   error={errors.confirmPassword ? true : false}
          //   onChange={onChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
}
export default Register;
