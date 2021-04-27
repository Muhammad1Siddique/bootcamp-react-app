import React from 'react'

class MyComponent extends React.Component{
    render(){
        const cityArray = ['karachi', 'lahore', 'peshawar', 'Quetta']
        return(
            <ul>
                {
                    cityArray.map(city=><li key={city}>{city}</li>)
                }
            </ul>
        )
    }   
}
function Notmap() {
    return (<MyComponent/>)
}
export default Notmap