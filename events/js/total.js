// class Total {
//     constructor() {
//       const countrySelect = document.querySelector('#country-name');
//       this.report = countrySelect.value;
//     }
  
//     // Get Briefings from API
//     async getTotalStats() {
//       // Query the API
//       const totalResponse = await fetch(
//         `https://api.covid19api.com/total/country/${this.report}`
//       );
  
//       // hold for response and then return as json
//       const total = await totalResponse.json();

//       return total;
      
//     }
//   }