import React from 'react'
import styled from '@emotion/styled'

const Icon = ({condition}) => {
    const Icon = styled.img`
        width: 40%;
    
    `
    var icon = '';
    switch (condition) {
        case 'Sunny':
            icon = `./Weather Icons/Mostly Sunny-2x.png`
            
            break;
        case 'Clouds':
            icon = `./Weather Icons/Mostly Cloudy-2x.png`
                
            break;
        case 'Haze':
            icon = `./Weather Icons/Haze-2x.png`
            
            break;
        case 'Hail':
            icon = `./Weather Icons/Hail-2x.png`
            
            break;
        case 'Fog':
            icon = `./Weather Icons/Fog-2x.png`
            
            break;
           
        case 'Tornado':
            icon = `./Weather Icons/Tornado-2x.png`
            
            break;
        case 'Dust':
            icon = `./Weather Icons/Dust-2x.png`
            
            break;
        case 'Mist':
            icon = `./Weather Icons/Fog-2x.png`
            
            break;
        case 'Snow':
            icon = `./Weather Icons/Snow-2x.png`
            
            break;
        case 'Rain':
            icon = `./Weather Icons/Rain-2x.png`
            
            break;
        case 'Drizzle':
            icon = `./Weather Icons/Drizzle-2x.png`
            
            break;
        case 'Thunderstorm':
            icon = `./Weather Icons/Scattered Thunderstorm-2x.png`
            
            break;
        default:
            icon = `./Weather Icons/Fog-2x.png`
            break;
    }


    return (
        

           <Icon  src={icon} alt="weather icon" />
            
        
    )
}

export default Icon
