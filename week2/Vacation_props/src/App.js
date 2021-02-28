import React from "react";
import Vacation from "./components/Vacation";
import Footer from "./Footer"
import Header from "./Header"

function App() {
  return(
    <div >
      <Header/>
        <Vacation
          place= "Meridian, Idaho"
          price= "40"
          timeToGo= "Spring"
        />

        <Vacation
          place= "Cancun"
          price= "900"
          timeToGo= "Winter"
        />

        <Vacation
          place= "China"
          price= "1200"
          timeToGo= "Fall"
        />

        <Vacation
          place= "Russia"
          price= "1100"
          timeToGo= "Summer"
        />

        <Vacation
          place= "Lebanon"
          price= "400"
          timeToGo= "Spring"
        />

        <Footer/>

    </div>
  )
 
  // return <div>{vacationComponent}</div>;
}

export default App;
