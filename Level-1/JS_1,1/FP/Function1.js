export function Function1(csvString) {
    return csvString
        .split('\n')
        .filter(item => (item !== '' && item !== '#' && !item.startsWith('#')))
        .map(item => {
            const [x, y, name, population] = item.split(',');
            return { x: x, y: y, name: name, population: population};
        })
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
        .reduce((acc, item, index) => {
            return {...acc, [item.name]: {population: item.population, rating: index + 1}};
        }, {});
}