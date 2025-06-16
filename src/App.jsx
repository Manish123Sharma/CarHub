import React from 'react'
import Header from './components/header.jsx';
import { Typography } from '@mui/material'
import './App.css'
import Cards from './components/Cards.jsx'
import carData from "./data.json";

const images = import.meta.glob("./assets/*.png", { eager: true });

const App = () => {
    return (
        <div>
            {/* <Button color="warning" variant="contained">Hello Manish</Button> */}
            <Header />
            <div className='heading'>
                <Typography align='center' variant='h1'>
                    Welcome to CarHub
                </Typography>
                <Typography variant='body2' align='center'>
                    Welcome to CarHub, your ultimate destination for exploring a wide range of modified and stock cars. Whether you're a car enthusiast, a tuner, or simply curious about automotive builds, CarHub showcases some of the most iconic vehicles—both in their factory form and fully customized avatars. From performance upgrades to aesthetic modifications, we bring you detailed insights, specs, and images that highlight the uniqueness of every car. At CarHub, our mission is to fuel your passion for automobiles by celebrating the art and engineering behind every ride.
                </Typography>
            </div>
            <Typography variant='h2' align='center' marginTop='30px' marginBottom='20px'>
                Below are Details of Cars
            </Typography>
            {/* <Cards /> */}
            <div className='cardDiv'>
                {carData.map((item) => {
                    const imgPath = `./assets/${item.img}`;
                    const image = images[imgPath]?.default;
                    return (
                        <Cards
                            key={item.id}
                            img={image}
                            title={item.title}
                            desc={item.desc}
                            colour={item.colour}
                            price={item.price}
                        />
                    );
                })}
            </div>
            <footer>
                <Typography align='center' variant='h6'>
                    Made with Manish Kumar Sharma
                </Typography>
            </footer>
        </div>
    )
}

export default App
