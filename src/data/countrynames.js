import countriesData from "./country-code-jsonformatted";

const extractCountryData = (data) => {
    const uniqueCountries = {}; 
    const accentedCharRegex = /[\u0300-\u036f]/; // regex to remove all diacritical marks 

    data.forEach(item => {
        const countryName = item.label_en.split(/:|,/)[0].trim(); 
        const iso2Code = item.iso2_code || ''; // Extract ISO 2-letter code or use empty string if not available

        if (!accentedCharRegex.test(countryName)) {
            uniqueCountries[countryName]=iso2Code
        }
    })

    return Object.keys(uniqueCountries)
        .map(label_en => ({ label_en: `${label_en} (${uniqueCountries[label_en]})` }))
        .sort((a,b) => a.label_en < b.label_en ? -1 : (a.label_en > b.label_en ? 1 : 0)) 
}

const countries = extractCountryData(countriesData); 

console.log(countries)

export default countries; 