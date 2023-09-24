// если пишет что нет каталога npm то: sudo apt install npm
// если проблемы с node то: sudo apt-get install -y nodejs
//                          sudo apt update && sudo apt install -y nodejs

// Тестовое задание для городов

// import _ from 'lodash'   (соответственно для лодаша);

// 1ое задание
export default (string) => {
    const data = string.split('\n');
    const rows = data.slice(1, data.length - 1).map((row) => row.split(','));
    console.log(`Count: ${rows.length}`);
//опционально
// 2ое задание
    const cities = rows.map((row) => row[7])
    //2ое задание при помощи лодаша ===>   const uniques = _.uniq(cities);
    const uniques = [];
    for (let i = 0; i < cities.length; i++) {
        if (!uniques.includes(cities[i])) {
            uniques.push(cities[i]);
        }
    }
    console.log(`Cities: ${uniques.sort().join(', ')}`);
    //________
    //3е задание  ((МАКСИМАЛЬНО МИНИМАЛЬНЫЕ ЗНАЧЕНИЯ)встречаются в разных вариантах экза)  (несколько способов)
    const humidities = rows.map((row) => Number(row[3]))
    // цифры в row[...] это столбик отсчет с нуля
    // number превращает строки в числа

// 1ый способ через лодаш

    // const minHumidity = _.min(humidities);
    // const maxHumidity = _.max(humidities);
    // console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`)

// 2ой способ через Math

    // const minHumidity = Math.min(...humidities);
    // const maxHumidity = Math.max(...humidities);
    // console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`)

// 3ий способ через редусе

    // const minHumidity = humidities.reduce((acc, curr) => (curr < acc ? curr : acc));
    // const maxHumidity = humidities.reduce((acc, curr) => (curr > acc ? curr : acc));
    // console.log(`Humidity: Min: ${minHumidity}, Max: ${maxHumidity}`)

// 4ый способ через цикл

    // let min = Infinity;
    // let max = -Infinity;
    // for (let i = 0; i < humidities.length; i++) {
    //     if (humidities[i] > max) {
    //         max = humidities[i]
    //     }
    //     if (humidities[i] < min) {
    //         min = humidities[i];
    //     }
    // }
    // console.log(`Humidity: Min: ${min}, Max: ${max}`);

    //________
    //4ое задание
    //1ый способ
    const dates = rows.map((row) => row[0])
    const maxTemps = rows.map((row) => Number(row[1]));
    const maxTempIndex = maxTemps.indexOf(Math.max(...maxTemps));
    console.log(`HottestDay: ${dates[maxTempIndex]} ${cities[maxTempIndex]}`)

    // выводим даты только для сиэтла, может пригодится опционально
    // const seattleRows = rows.filter((row) => row[7] === 'Seattle');
    // const seattleDates = seattleRows.map((row) => row[8]);
    // const maxTempsSeattle = seattleRows.map((row) => Number(row[1]));
    // const maxTempSeattleIndex = maxTempSeattle.indexOf(Math.max(...maxTempSeattle));
    //console.log(HottestDaySeattle: `${seattleDates[maxTempSeattleIndex]}`);

    //________
    //5ое задание
    const getAverage = (values) => Math.floor(values
        .reduce((acc, elem) => Number(acc) + Number(elem), 0) / values.length);

        const averageTemps = uniques.map((city) => {
            const cityTemps = rows.filter((row) => row[7] === city)
            .map((row) => Number(row[1]))
            return [city, getAverage(cityTemps)]
        })
        const maxAverageTemperatureCity = averageTemps.reduce((acc, elem) => acc[1] < elem[1] ? elem : acc)
    console.log(`HottestCity: ${maxAverageTemperatureCity[0]}`)

    
    //2ой способ
    // for (let i = 0; i < uniques.length; i++) {
    //     // i++ и i+=1 это тоже самое если не работе i++ пробуй i+=1
    //     citiesAverageTemps[uniques[i]] = [];
    //     for (let i = 0; i < cities.length; i++) {
    //     citiesAverageTemps[cities[i]].push(Number(rows[i][1]));
    //     }
    //     //eslint-disable-next-line
    //     for (let city in Object.keys(citiesAverageTemps)) {
    //         citiesAverageTemps[city] = getAverageTemp(citiesAverageTemps[city])
    //     }

    //     const maxTempCity = Object.entries(citiesAverageTemps).reduce((acc, elem) => {
    //         if(elem[1] > acc[1]) {
    //         return elem;
    //     } return acc; 
    // })
    // }
    // console.log(`HottestCity: ${maxTempCity[0]}`);
}