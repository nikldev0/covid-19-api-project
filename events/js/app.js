const api = {
    summary: "summary"
}

// api call

async function getCountriesAPI() {
    //Query the Api
    const countriesResponse = await fetch(`https://api.covid19api.com/${api.summary}`);
    // hold for response and then return as json
    const countries = await countriesResponse.json();
    
    return countries
}



getCountriesAPI()
    .then(displayCountries)
    .then(displayStats)
    .catch(err => alert('Error received, please examine API call and try again.'))

const submit = document.getElementById("submitBtn");
const result = document.getElementById("result");
const countrySelect = document.querySelector('#country-name');



// UI Selector Function

function displayCountries(countries) {

    // console.log(countries);
    // variable for selection box
    
    // produces an array of objects, each object has a country name
    const countryList = countries.Countries;
    console.log(countryList);
    // loops through each object in this array and outputs the country name only
    
    // let selectedCountry = "";

    countryList.forEach(country => {
        const countryName = country.Country
    // appends an option to the select element for each country
        const option = document.createElement('option');
        option.value = countryName;
        option.appendChild(document.createTextNode(countryName))
        countrySelect.appendChild(option);
  })

} 

function displayStats() {
  // Hitting submit to output country
    //   selectedCountry =  countrySelect.value;
      countryList.forEach(country => {
        if (country.Country === countrySelect.value) {
            result.innerHTML = `${country.TotalDeaths} ${country.Country}`;
            console.log(country.TotalDeaths);
        }
      })
  // result.innerHTML = `${countrySelect.value}`
})

    


  
  
    // if(countrySelect.value )
    // adds in stats relevant to the country
        // console.log(country.TotalConfirmed);
        // const countryDied = country.TotalDeaths;
        // const countryRecovered = country.TotalRecovered;















    // countryList.forEach(country =>  {
         // create select options
            // console.log(country.Country);
    //         const countrySlug = country.Slug;
    //         const option = document.createElement('option');
    //         option.value = countrySlug;
    //         option.appendChild(document.createTextNode(countryName));
    //         countrySelect.appendChild(option);

    //     // Hitting submit to output country
    //         const submit = document.getElementById("submitBtn");
    //         const result = document.getElementById("result");
    //         submit.addEventListener("click", function() {
    //             result.innerHTML = countrySelect.value;
    //         })
    // })
// })
}





// function init() {
//     let countriesList = fetch(`https://api.covid19api.com/${api.countries}`).then(response => response.json());
//     let summaryList = fetch(`https://api.covid19api.com/${api.summary}`).then(response => response.json());

//     const retrieveAll = async function() {
//         let results = await Promise.all([countriesList, summaryList]);
//         let myCountries = (results[0]);
//         console.log(myCountries);
//     }();
// }


// let array = init()




// console.log(myCountries);


// async getCountriesAPI() {
//     // Query the API
//     const countriesResponse = await fetch(
//       `https://api.covid19api.com/${this.report}`
//     );

//     // hold for response and then return as json
//     const countries = await countriesResponse.json();

//     return countries;
//   }

