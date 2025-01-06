export const lambdaFunction = (cityObject, template) => {
    return Object.keys(cityObject).map(cityName => {
        const city = cityObject[cityName];
        return template
            .replace("name", cityName)
            .replace("population", city.population)
            .replace("rating", city.rating);
    });
};