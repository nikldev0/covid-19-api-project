class UI {
    constructor() {
        this.init();
    }
    init() {
        // display countries in container
        this.printCountries()
        // this.printStats()
    }
    // print the briefings
    printCountries() {
        const countriesList = country.getCountriesAPI()
            .then((countryList) => {
                const countrySelect = document.querySelector('#country-name');
                console.log(countryList);
                // console.log(arrayList);

                // Insert our countries into the select element
                countryList.forEach((country)  =>  {
                // create select options
                    const countryName = country.Country;
                    const countrySlug = country.Slug;
                    const option = document.createElement('option');
                    option.value = countrySlug;
                    option.appendChild(document.createTextNode(countryName));
                    countrySelect.appendChild(option);

                // Hitting submit to output country
                    const submit = document.getElementById("submitBtn");
                    const result = document.getElementById("result");
                    submit.addEventListener("click", function() {
                        result.innerHTML = countrySelect.value;
                    })
            })
        })
    // }).catch(err => {
    //     console.log(err);
    // })
    // const totalList = total.getTotalStats()
    //     .then((statsList) => {
    //         console.log(statsList);
    //     })

}
//     printStats() {
//         const totalList = stats.getTotalStats()

        
//  }
}

