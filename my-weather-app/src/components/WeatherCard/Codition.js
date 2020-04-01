import React from 'react'
import styled from '@emotion/styled'

const Codition = ({temp, condition}) => {

    const Temp = styled.h1`

    font-family: 'Fira Sans', sans-serif;
    font-size: 2em;
    font-weight: 200;
    
    `
    const Condition = styled.h3`
    font-family: 'Merriweather', sans-serif;
  font-size: 1.6em;
    
    `
    return (

          <>

            <Temp>{temp}°C</Temp>
          <Condition>{condition}</Condition>
          </>
            
    )
}

export default Codition
