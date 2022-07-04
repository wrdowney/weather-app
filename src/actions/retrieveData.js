const apiKey = '6b539a1088bdf6f05a6c551f8bd38f54';

export default async function retrieveData(location = 'Burke') {
    if (location === null) return;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`);
    const data = await response.json();
    // eslint-disable-next-line new-cap
    // eslint-disable-next-line consistent-return
    return new Promise((resolve, reject) => {
        // location not found
        if (data.cod === 400) {
            reject(Error('City not found'));
        }
        resolve(data);
    });
}
