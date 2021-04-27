import React from 'react'
class MyComponent extends React.Component{
    render(){
        const cityArray = ['karachi', 'lahore','peshawar','Quetta']
        const shortListedCities = cityArray.filter(city => city.length>6)
        console.log(shortListedCities);
        return(
            <ul>
                {
                    shortListedCities.map(city=><li key={city}>{city}</li>)
                }
            </ul>
        )
    }
}
function Notfilter(){
    return(<MyComponent/>)
}
export default Notfilter