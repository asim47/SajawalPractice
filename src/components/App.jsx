import React, { useState, useEffect, Fragment } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import axios from "axios";

const App = (props) => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [data, setData] = useState([]);


  useEffect(() => {
    axios.get("/api/user").then(res => {
      setData(res.data)
    })
  }, [])

console.log(data);



  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    }

    axios.post("/api/user", body).then(res => {
      setData([
        ...data,
        res.data
      ])

    })
    setEmail("");
    setPassword("");
  }



  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <br />
        <input placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, null)(App));


