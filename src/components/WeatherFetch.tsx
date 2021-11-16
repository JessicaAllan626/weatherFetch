import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

type WeatherLocate = {
    latitude: number,
    longitude: number,
    weather: any,
};

class WeatherFetch extends Component<{}, WeatherLocate> {
    setState(arg0: { weather: any; }) {
        throw new Error('Method not implemented.');
    }
    state: any;
    constructor(props: any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            weather: 0,
        }
    }

    success = (pos: any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const lon: number = crd.longitude;
        this.setState({
            latitude: lat,
            longitude: lon
        });

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=0383a8d6df7c559fe219ab16a47f1c42`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                weather: data.main.temp
            })
            console.log('this.state.weather: ', this.state.weather);
        });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);
    }

    render() {
        return (
            <div>
                <WeatherDisplay weather={this.state.weather} />
            </div>
        )
    }
}

export default WeatherFetch;