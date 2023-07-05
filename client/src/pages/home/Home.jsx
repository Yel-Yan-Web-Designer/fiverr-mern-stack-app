import React from 'react';
import "./Home.scss";

import {Featured, TrustedBy} from "../../components/index";

const Home = () => {
  return (
    <div className="home">
      <Featured/>
      <TrustedBy/>
    </div>
  )
}

export default Home