const loadCountires = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}


const displayCountries = countries => {
    console.log(countries[0])
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));

    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}
const getCountryHTML = country => {
    return `
        <div class="country">
            <img src="${country.flag}">
            <h1>${country.name}</h1>
            <h4>Capital:${country.capital}</h4>
            <h4>Region:${country.region},  Area:${country.area}</h4>
            <h4>Population: ${country.population} </h4>
        </div>
    `
}
loadCountires();