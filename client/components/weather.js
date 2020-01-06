import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import Styled from "styled-components";

const Button = Styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ADD8E6;
  border-radius: 3px;
`;
const Input = Styled.input`
color: #ADD8E6;
font-size: 1em;
border: 2px solid #ADD8E6;
border-radius: 3px;
`;

const ImagesContainer = Styled.div`
display: flex;
flex-direction: row;
`;



class Weather extends Component { 
    state = {
        city: "Dallas",
        state_code: "TX",
        country: "US", 
        day0: [],
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
        day6: [],
        outfits0: [],
        outfits1: [],
        outfits2: [],
        outfits3: [],
        outfits4: [],
        outfits5: [],
        outfits6: [],

    };

    async componentDidMount() {
       await this.getWeather(this.state.city, this.state.state_code, this.state.country );
        
    }

    getWeather = async (city, state_code, country) => {
        const city_code = city;
        const country_code = country;
        const stateCode = state_code;

        const data = await loadData(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city_code}&country=${country_code}&state=${stateCode}&units=I&data=7&key=ff8d52c3d6f547cfab9b10d50f932e7e`);
        
        const apparentTemp0 = data.data[0].app_max_temp;
        const apparentTemp1 = data.data[1].app_max_temp;
        const apparentTemp2 = data.data[2].app_max_temp;
        const apparentTemp3 = data.data[3].app_max_temp;
        const apparentTemp4 = data.data[4].app_max_temp;
        const apparentTemp5 = data.data[5].app_max_temp;
        const apparentTemp6 = data.data[6].app_max_temp;

        const getHot = await loadData(`http://localhost:3001/closet/hot`)
        const getWarm = await loadData(`http://localhost:3001/closet/warm`)
        const getCool = await loadData(`http://localhost:3001/closet/cool`)
        const getCold = await loadData(`http://localhost:3001/closet/cold`)
        const getFreezing = await loadData(`http://localhost:3001/closet/freezing`)

        if (apparentTemp0 >= 80) {
            this.outfit0 = getHot.map(item => item.picture);
        } 
        if (apparentTemp0 >= 65 && apparentTemp0 < 80) {
            this.outfit0 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp0 >= 45 && apparentTemp0 < 64) {
            this.outfit0 = getCool.map(item => item.picture);
        } 
        if (apparentTemp0 >= 25 && apparentTemp0 < 44) {
            this.outfit0 = getCold.map(item => item.picture);
        } 
        if (apparentTemp0 < 25) {
            this.outfit0 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp1 >= 80) {
            this.outfit1 = getHot.map(item => item.picture);
        } 
        if (apparentTemp1 >= 65 && apparentTemp1 < 80) {
            this.outfit1 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp1 >= 45 && apparentTemp1 < 64) {
            this.outfit1 = getCool.map(item => item.picture);
        } 
        if (apparentTemp1 >= 25 && apparentTemp1 < 44) {
            this.outfit1 = getCold.map(item => item.picture);
        } 
        if (apparentTemp1 < 25) {
            this.outfit1 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp2 >= 80) {
            this.outfit2 = getHot.map(item => item.picture);
        } 
        if (apparentTemp2 >= 65 && apparentTemp2 < 80) {
            this.outfit2 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp2 >= 45 && apparentTemp2 < 64) {
            this.outfit2 = getCool.map(item => item.picture);
        } 
        if (apparentTemp2 >= 25 && apparentTemp2 < 44) {
            this.outfit2 = getCold.map(item => item.picture);
        } 
        if (apparentTemp2 < 25) {
            this.outfit2 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp3 >= 80) {
            this.outfit3 = getHot.map(item => item.picture);
        } 
        if (apparentTemp3 >= 65 && apparentTemp3 < 80) {
            this.outfit3 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp3 >= 45 && apparentTemp3 < 64) {
            this.outfit3 = getCool.map(item => item.picture);
        } 
        if (apparentTemp3 >= 25 && apparentTemp3 < 44) {
            this.outfit3 = getCold.map(item => item.picture);
        } 
        if (apparentTemp3 < 25) {
            this.outfit3 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp4 >= 80) {
            this.outfit4 = getHot.map(item => item.picture);
        } 
        if (apparentTemp4 >= 65 && apparentTemp4 < 80) {
            this.outfit4 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp4 >= 45 && apparentTemp4 < 64) {
            this.outfit4 = getCool.map(item => item.picture);
        } 
        if (apparentTemp4 >= 25 && apparentTemp4 < 44) {
            this.outfit4 = getCold.map(item => item.picture);
        } 
        if (apparentTemp4 < 25) {
            this.outfit4 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp5 >= 80) {
            this.outfit5 = getHot.map(item => item.picture);
        } 
        if (apparentTemp5 >= 65 && apparentTemp5 < 80) {
            this.outfit5 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp5 >= 45 && apparentTemp5 < 64) {
            this.outfit5 = getCool.map(item => item.picture);
        } 
        if (apparentTemp5 >= 25 && apparentTemp5 < 44) {
            this.outfit5 = getCold.map(item => item.picture);
        } 
        if (apparentTemp5 < 25) {
            this.outfit5 = getFreezing.map(item => item.picture);
        }

        if (apparentTemp6 >= 80) {
            this.outfit6 = getHot.map(item => item.picture);
        } 
        if (apparentTemp6 >= 65 && apparentTemp6 < 80) {
            this.outfit6 = getWarm.map(item => item.picture);
        } 
        if (apparentTemp6 >= 45 && apparentTemp6 < 64) {
            this.outfit6 = getCool.map(item => item.picture);
        } 
        if (apparentTemp6 >= 25 && apparentTemp6 < 44) {
            this.outfit6 = getCold.map(item => item.picture);
        } 
        if (apparentTemp6 < 25) {
            this.outfit6 = getFreezing.map(item => item.picture);
        }

        this.setState({
            day0: data.data[0],
            day1: data.data[1],
            day2: data.data[2],
            day3: data.data[3],
            day4: data.data[4],
            day5: data.data[5],
            day6: data.data[6],
            outfits0: this.outfit0,
            outfits1: this.outfit1,
            outfits2: this.outfit2,
            outfits3: this.outfit3,
            outfits4: this.outfit4,
            outfits5: this.outfit5,
            outfits6: this.outfit6
        });

        return data;
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const city = this.refs.city.value;
        const state_code = this.refs.state_code.value;
        const country = this.refs.country.value;
        await this.getWeather(city, state_code, country);

        this.setState({ city, state_code, country })
    }

    

    render() {
    
        const { city } =this.state;
        const { state_code } =this.state;
        const { country } =this.state;
        const { day0 } = this.state;
        const { day1 } = this.state;
        const { day2 } = this.state;
        const { day3 } = this.state;
        const { day4 } = this.state;
        const { day5 } = this.state;
        const { day6 } = this.state;
        const { outfits0 } = this.state;
        const { outfits1 } = this.state;
        const { outfits2 } = this.state;
        const { outfits3 } = this.state;
        const { outfits4 } = this.state;
        const { outfits5 } = this.state;
        const { outfits6 } = this.state;
        

        return (
            <>
                <form className="weatherInput" onSubmit={this.handleSubmit}>
                    <label>
                        <Input
                        type="text"
                        city={city}
                        ref="city"
                        placeholder="Enter city"
                        />
                    </label>
                    <label>
                        <Input
                        type="text"
                        state_code={state_code}
                        ref="state_code"
                        placeholder="Enter state"
                        />
                    </label>
                    <label>
                        <Input
                        type="text"
                        country={country}
                        ref="country"
                        placeholder="Enter country"
                        />
                    </label>
                    <Button type="submit" value="Submit">Pick Place</Button>
                </form>
                
                <h1 className="place">{city}, {state_code}, {country}</h1>
                    <h2>Today, {day0.valid_date}</h2>
                        <p>Temperature: {day0.temp} °F</p>
                        <p>Apparent Max Temp: {day0.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day0.app_min_temp} °F</p>
                        <p>{day0.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day0.wind_spd} mph</p>
                    <ImagesContainer>
                        <ul>
                            {outfits0.map(day => (
                                <img src={day} className="image" />
                            ))}
                        </ul>
                    </ImagesContainer>
                    <h2>Tomorrow, {day1.valid_date} °F</h2>
                        <p>Temperature: {day1.temp} °F</p>
                        <p>Apparent Max Temp: {day1.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day1.app_min_temp} °F</p>
                        <p>{day1.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day1.wind_spd} mph</p>
                        <ul>
                            {outfits1.map(day => (
                                <img src={day} className="image" />
                            ))}
                            
                        </ul>
                
                
                    <h2>{day2.valid_date}</h2>
                        <p>Temperature: {day2.temp} °F</p> 
                        <p>Apparent Max Temp: {day2.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day2.app_min_temp} °F</p>
                        <p>{day2.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day2.wind_spd} mph</p>
                        <ul>
                            {outfits3.map(day => (
                                    <img src={day} className="image" />
                            ))}
                            
                        </ul>
                    
                    <h2>{day3.valid_date}</h2>
                        <p>Temperature: {day3.temp} °F</p>
                        <p>Apparent Max Temp: {day3.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day3.app_min_temp} °F</p>
                        <p>{day3.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day3.wind_spd} mph</p> 
                        <ul>
                            {outfits3.map(day => (
                                    <img src={day} className="image" />
                            ))}
                        </ul>
                    
                    <h2>{day4.valid_date}</h2>
                        <p>Temperature: {day4.temp} °F</p>
                        <p>Apparent Max Temp: {day4.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day4.app_min_temp} °F</p>
                        <p>{day4.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day4.wind_spd} mph</p>
                        <ul>
                            {outfits4.map(day => (
                                    <img src={day} className="image" />
                            ))}
                        </ul>
                    
                    <h2>{day5.valid_date}</h2>
                        <p>Temperature: {day5.temp} °F</p>
                        <p>Apparent Max Temp: {day5.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day5.app_min_temp} °F</p>
                        <p>{day5.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day5.wind_spd} mph</p>
                        <ul>
                            {outfits5.map(day => (
                                    <img src={day} className="image" />
                            ))}
                        </ul>
                    
                    <h2>{day6.valid_date}</h2>
                        <p>Temperature: {day6.temp} °F</p>
                        <p>Apparent Max Temp: {day6.app_max_temp} °F</p>
                        <p>Apparent Min Temp: {day6.app_min_temp} °F</p>
                        <p>{day6.pop}% Chance of Rain</p>
                        <p>Wind Speed: {day6.wind_spd} mph</p>
                        <ul>
                            {outfits6.map(day => (
                                    <img src={day} className="image" />
                            ))}
                        </ul>
                    <style jsx>{`
                        .weatherInput {
                            display: relative;
                            text-align: center;
                        }
                        .place {
                            display: relative;
                            text-align: center;
                            font-size: 36px;
                        }
                        .image {
                            border-radius: 50%;
                        }
                    `}</style> 
            </>
        );
    };
}

export default Weather;