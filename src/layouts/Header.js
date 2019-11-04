import React from "react";
import { Route, Switch } from "react-router-dom";

import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import img4 from "../images/header4.jpg";
import error from "../images/error1.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="las" />} />
        <Route path="/products" render={() => <img src={img2} alt="gory" />} />
        <Route
          path="/product/:idProduct"
          render={() => <img src={img1} alt="las" />}
        />
        <Route path="/contact" render={() => <img src={img3} alt="szopa" />} />
        <Route path="/admin" render={() => <img src={img4} alt="most" />} />
        <Route path="/login" render={() => <img src={img4} alt="most" />} />
        <Route render={() => <img src={error} alt="error" />} />
      </Switch>
    </>
  );
};

export default Header;
