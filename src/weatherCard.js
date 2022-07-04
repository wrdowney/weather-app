import retrieveData from './actions/retrieveData';

export default function weatherCard(location) {
    const weatherContainer = document.querySelector('.weather-card');
    weatherContainer.innerHTML = '';
    if (location === null) return;
    retrieveData(location)
        .then((data) => {
            const { main, weather, name } = data;
            const { temp, humidity } = main;
            const { description } = weather[0];
            const temperature = Math.round(temp - 273.15);
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h1>${name}</h1>
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
            `;
            weatherContainer.appendChild(card);
        })
        .catch(() => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h1>Location could not be found</h1>
            `;
            weatherContainer.appendChild(card);
        });
}
