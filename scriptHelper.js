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
 function updateShuttleRequirements(fuelLevel, cargoLevel) {
    div = document.getElementById("faultyItems");
    launchStatus = document.getElementById("launchStatus")
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `${pilot.value} is ready for launch`;
    copilotStatus.innerHTML = `${copilot.value} is ready for launch`;

    if(fuelLevel < 10000) {
        div.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML = "Not enough fuel for mission";
    } else if(cargoLevel > 10000) {
        div.style.visibility = "visible";
        cargoStatus.innerHTML = "Too much mass for take off";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle ready for launch";
    }
};
 
 function validateInput(testInput) {
    return testInput === "" ? "Empty"
    : isNaN(testInput) ? "Not a Number"
    : "Is a Number"
 };
 
 function formSubmission( pilot, copilot, fuelLevel, cargoLevel, document) {
    const pilotValidation = validateInput(pilot.value);
    const copilotValidation = validateInput(copilot.value);
    const fuelLevelValidation = validateInput(fuelLevel.value);
    const cargoLevelValidation = validateInput(cargoLevel.value);
    
    if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty") {
        alert("All fields required!");
    };
    updateShuttleRequirements(fuelLevel.value)
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