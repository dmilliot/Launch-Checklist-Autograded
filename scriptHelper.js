// Write your helper functions here!

// require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
 };
 function updateShuttleRequirements(fuelLevel, cargoLevel, document) {
    div = document.getElementById("faultyItems");
    launchStatus = document.getElementById("launchStatus")
    fuelStatus = document.getElementById("fuelStatus");
    cargoStatus = document.getElementById("cargoStatus");
    pilotStatus = document.getElementById("pilotStatus");
    copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `${pilot} ready for launch`;//no work
    copilotStatus.innterHTML = `${copilot} ready for launch`;//no work

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
    }
};
 
 function validateInput(testInput) {
    return testInput === "" ? "Empty"
    : isNaN(testInput) ? "Not a Number"
    : "Is a Number"
 };
 
 function formSubmission( pilot, copilot, fuelLevel, cargoLevel) {
    const pilotValidation = validateInput(pilot.value);
    const copilotValidation = validateInput(copilot.value);
    const fuelLevelValidation = validateInput(fuelLevel.value);
    const cargoLevelValidation = validateInput(cargoLevel.value);
    
    if (pilotValidation === "Empty" || copilotValidation === "Epmty" || fuelLevelValidation === "Empty" || cargoLevelValidation === "Empty") {
        alert("All fields required!");
    };
    updateShuttleRequirements(fuelLevel.value)
  };
  

 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;