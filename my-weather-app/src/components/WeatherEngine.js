
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard/component';


const WeatherEngine = ({location}) => {
   
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [query, setQuery] = useState("");
   const [weather, setWeather] = useState({
        city:null,
        temp:null,
        condition:null,
        country:null
   });
  
  
   
  
    const getWeather = async (q) => {
        setLoading(true);
        setQuery("");
     try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=86f58ffcf6dd3bad9e53b166269a3564`;
      
        const apiResquest = await fetch(url);
        const resJSON = await apiResquest.json();
        setWeather({
          city:resJSON.name,
          temp:resJSON.main.temp,
          condition:resJSON.weather[0].main,
          country:resJSON.sys.country
    
      });
         
     } catch (error) {
         setError(true);
     }

    setLoading(false);
     
    }
  
    const onChange = e => {
          
      setQuery(e.target.value);
  }
  
  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
    
  }
  
  useEffect(() => {
    getWeather(location);
  
  }, [location]);
  
  
    return (
      <div>
       {!loading && !error ? (<div>
        <WeatherCard temp={weather.temp} condition={weather.condition} city = {weather.city} country = {weather.country}/>
        
        <form onSubmit = {handleSearch}>
              
              <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Your City"
              />
              
            </form>
  
       </div>) :loading ? (
       
       <div style={{color: "white"}}>Loading</div>):
       !loading && error ? (
       <div style={{color: "white"}}>There has been an error! <button onClick={() => setError(false)}>Reset</button></div>):null }
        
       
      </div>
    );
}

export default WeatherEngine
