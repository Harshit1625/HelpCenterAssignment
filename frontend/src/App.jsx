import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cards")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  async function fetchCard(title) {
    console.log(title);
    axios
      .get(`http://localhost:4000/cards/${title}`)
      .then((response) => {
        setData([response.data]);
      })
      .catch((e) => console.log(e));
  }
  return (
    <>
      <div>
        <Header />
        <HeroSection fetchCardFn={fetchCard} />
        <CardSection data={data} />
        <Footer />
      </div>
    </>
  );
}

export default App;
