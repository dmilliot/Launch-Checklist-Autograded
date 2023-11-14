// Write your helper functions here!

// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    missionTarget = document.getElementById("missionTarget");
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src = "${imageUrl}">`
 };
 function updateShuttleRequirements(document, list, fuelLevel, cargoLevel, pilot, copilot) {
    launchStatus = document.getElementById("launchStatus")
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let fuelCheck = fuelLevel >= 10000;
    let cargoCheck = cargoLevel <= 10000;
    launchStatus.style.color = "red";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";

    if(fuelCheck) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    } else{
        fuelStatus.innerHTML = "Fuel level too low for launch";
    }
    if(cargoCheck) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"; 
    } else {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    }

    if (fuelCheck && cargoCheck) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
    } else {
        list.style.visibility = "visible";
    }
};
 
 function validateInput(testInput) {
    return testInput === "" ? "Empty"
    : isNaN(testInput) ? "Not a Number"
    : "Is a Number"
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotValidation = validateInput(pilot);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoLevelValidation = validateInput(cargoLevel);
    
    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty") {
        alert("All fields required!");
    };
    updateShuttleRequirements(document, list, fuelLevel, cargoLevel, pilot, copilot)
  };
  

 
 async function myFetch() {
    const url = "https://handlers.education.launchcode.org/static/planets.json";
     let planetsReturned;
 
     planetsReturned = await fetch(url).then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;