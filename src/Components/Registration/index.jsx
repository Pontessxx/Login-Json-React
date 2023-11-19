import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Login";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          profession,
        }),
      });

      if (!response.ok) {
        throw new Error("Error creating user");
      }

      setFlag(false);
      setLogin(!login);
    } catch (error) {
      console.error("Error creating user:", error);
      setFlag(true);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div>
        {" "}
        {login ? (
          <form onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Phone No.</label>
              <input
                type="Phone"
                className="form-control"
                placeholder="Enter contact no"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Choose your Profession</label>
              <Form.Control
                as="select"
                onChange={(event) => setProfession(event.target.value)}
              >
                <option>Select</option>
                <option>Artist</option>
                <option>Photographer</option>
                <option>Team Player</option>
                <option>Full Stack</option>
              </Form.Control>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p onClick={handleClick} className="forgot-password text-right">
              Already registered{" "}log in?
            </p>
            {flag && (
              <Alert color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;
