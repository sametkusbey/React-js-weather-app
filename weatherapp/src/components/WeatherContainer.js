import { useState, useEffect } from 'react';
import { Grid, Image, Card, CardContent } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Sun from '../assets/sun.png';
import Rain from '../assets/rain.png'
import AppTitle from './AppTitle';

function WeatherContainer() {
    const [weathers, setWeathers] = useState([])
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=9c5a70b66193a1f330c16b2792fc64e2")
            .then((response) => {
                return response.json()
            })
            .then(data => {
                setWeathers(data.list)
                console.log(data.list)
            })
    }, [])

    return (

        <Grid className="weather-app">

            <Grid.Row columns={10}>
                {
                    weathers.map((weather) => {
                        return (
                            <Grid.Column key={weather.id}>
                                <Card>
                                    <Image src={weather.main.temp > 282.80 ? Sun : Rain} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>{weather.name}</Card.Header>
                                        <Card.Meta>
                                            {(weather.main.temp) + ' F'}

                                        </Card.Meta>
                                        <Card.Description>
                                            <span className='date'>{weather.weather[0].description}</span>
                                        </Card.Description>
                                    </Card.Content>

                                </Card>
                            </Grid.Column>
                        )
                    })
                }
            </Grid.Row>
        </Grid>

    )
}

export default WeatherContainer;
