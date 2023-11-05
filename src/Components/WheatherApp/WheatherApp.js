import React, { useState } from "react";
import "./WheatherApp.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import Alert from "./Alert";

export default function WheatherApp() {
    const [msg, setMsg] = useState("");
    const [icon, setIcon] = useState(cloud_icon);

    let apikey = "4244e61f2db5229888dd3d93d4dd76ef";

    let search = async () => {
        try {
            let inptvalue = document.querySelector("#cityipt");
            if (inptvalue.value === "") {
                return setMsg("Enter the valid city Name");
            }

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inptvalue.value}&units=Metric&appid=${apikey}`;
            let response = await fetch(url, {
                method: "GET",
                mode: "cors",
                redirect: "follow",
                referrerPolicy: "no-referrer",
            });

            if (!response.ok) {
                throw new Error(`City not found. Please enter a valid city name.`);
            }

            let data = await response.json();
            console.log(data);

            let wheatherLocation = document.querySelector(".wheather_location");
            wheatherLocation.innerHTML = data.name;

            let humidityPercentage = document.querySelector(".humidity_percentage");
            humidityPercentage.innerHTML = data.main.humidity + "%";

            let wind = document.querySelector(".wind");
            wind.innerHTML = Math.floor(data.wind.speed) + " km/h";

            let wheatherTemp = document.querySelector(".wheather_temp");
            wheatherTemp.innerHTML = `${Math.floor(data.main.temp)}°C`;

            if (data.weather.icon === "01d" || data.weather.icon === "01n") {
                setIcon(clear_icon);
            } else if (data.weather.icon === "02d" || data.weather.icon === "02n") {
                setIcon(cloud_icon);
            } else if (data.weather.icon === "03d" || data.weather.icon === "04n") {
                setIcon(drizzle_icon);
            } else if (data.weather.icon === "04d" || data.weather.icon === "02n") {
                setIcon(drizzle_icon);
            } else if (data.weather.icon === "04d" || data.weather.icon === "02n") {
                setIcon(drizzle_icon);
            } else if (data.weather.icon === "09d" || data.weather.icon === "09n") {
                setIcon(rain_icon);
            } else if (data.weather.icon === "10d" || data.weather.icon === "10n") {
                setIcon(rain_icon);
            } else if (data.weather.icon === "13d" || data.weather.icon === "13n") {
                setIcon(snow_icon);
            } else {
                setIcon(clear_icon);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setMsg(error.message);
            setTimeout(() => {
                setMsg("");
            }, 3000);
        }
    };

    return (
        <>
        <div className="container mt-3"><h1 className="text-center "> Wheather App</h1></div>
            <div className="container2">

                <Alert msg={msg} />

                <div className="top-bar">
                    <input
                        type="text"
                        name="cityipt"
                        id="cityipt"
                        placeholder="search"
                        className="d-flex  align-items-center"
                    />
                    <div className="search-icon" onClick={search}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="whaether_image d-flex justify-content-center">
                    <img src={icon} alt="" />
                </div>
                <div className="wheather_temp">24°C</div>
                <div className="wheather_location">London</div>
                <div className="data_container">
                    <div className="element">
                        <img className="icon" src={humidity_icon}></img>
                        <div className="data">
                            <div className="humidity_percentage">64%</div>
                            <div className="humidity">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img className="icon" src={wind_icon}></img>
                        <div className="data">
                            <div className="wind">18 km/h</div>
                            <div className="text">WindSpeed</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}
