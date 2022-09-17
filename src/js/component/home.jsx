import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';


const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={667} width={375} />
);
//create your first component
const Home = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((perro) => {
        console.log(perro);
        setImage(perro.message);
		setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return <Example type={"balls"} color="black"/>;
  }

  return <img src={image} alt="imagen perro aleatoria" />;
};

export default Home;
