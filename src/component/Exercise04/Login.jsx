import { Input } from "antd";
import React from "react";

export default function Login() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <h2>Login</h2>
            <label>Email</label>
            <br />
            <Input type="primary" placeholder="email"></Input>
            <br />
            <label>Password</label>
            <br />
            <Input type="primary" placeholder="password"></Input>
          </td>
        </tr>
      </table>
    </div>
  );
}
