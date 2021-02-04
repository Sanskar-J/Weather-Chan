class Forecast{
    constructor(){
        this.key='D9GaqJf6Hpf9GlbxLmHtPzGkqdjlzPnU';
        this.WeatherURI='http://dataservice.accuweather.com/currentconditions/v1/';
        this.CityURI='http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets=await this.getCity(city);
        const weather=await this.getWeather(cityDets.Key);
        return {
        cityDets: cityDets,
        weather: weather
        };
    }
    async getWeather(id){
        const query=`${id}?apikey=${this.key}`;
        const response=await fetch(this.WeatherURI+query);
        const data=await response.json();
        return data[0];
    }
    async getCity(city){
        const query=`?apikey=${this.key}&q=${city}`;
        const response= await fetch(this.CityURI+query);
        const data=await response.json();
        console.log(data);
        return data[0];
    }
}


