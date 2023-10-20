import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Hero from "./components/2-hero/Hero";
import { useEffect, useState } from "react";

function All() {
 

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header/>
    
      <Hero/>
      <div className="divider"></div>

      <Main/>
      <div className="divider"></div>

    
    </div>
  );
}

export default All;
