import {
  calculateCorrectedMinuteVolume,
  calculateDinamicCompliance,
  calculateDrivingPressure,
  calculateGattinoniEspiratoryTranspulmonaryPressure,
  calculateGattinoniInspiratoryTranspulmonaryPressure,
  calculateInspiratoryTimeConstant,
  calculateMaximalEspiratoryResistance,
  calculateMaximalInspiratoryResistance,
  calculateMechanicalPower,
  calculateMinuteVolume,
  calculatePredictedBodyWeight,
  calculatePulmonaryCompliance,
  calculatePulmonaryElastance,
  calculateRespiratorySistemCompliance,
  calculateRespiratorySistemElastance,
  calculateTalmorEspiratoryTranspulmonaryPressure,
  calculateTalmorInspiratoryTranspulmonaryPressure,
  calculateThoraxCompliance,
  calculateThoraxElastance,
  calculateVentilatoryRatio,
} from "./functions.js";

const calcularButton = document.getElementById("calcular-button");

//Inputs
const genderInput = document.getElementById("genderValue-input");
const heightInput = document.getElementById("heightValue-input");
const tidalVolumenInput = document.getElementById("tidalVolumeValue-input");
const peakPressureInput = document.getElementById("peakPressureValue-input");
const plateauPressureInput = document.getElementById(
  "plateauPressureValue-input"
);
const totalPeepInput = document.getElementById("totalPeepValue-input");
const respiratoryRateInput = document.getElementById(
  "respiratoryRateValue-input"
);
const peakInspiratoryFlowInput = document.getElementById(
  "peakInspiratoryFlowValue-input"
);
const peakEspiratoryFlowInput = document.getElementById(
  "peakEspiratoryFlowValue-input"
);
const inspiratoryTimeInput = document.getElementById(
  "inspiratoryTimeValue-input"
);
const espiratoryTimeInput = document.getElementById(
  "espiratoryTimeValue-input"
);
const totalTimeInput = document.getElementById("totalTimeValue-input");
const inspiratoryEsophagealPressureInput = document.getElementById(
  "inspiratoryEsophagealPressureValue-input"
);
const espiratoryEsophagealPressureInput = document.getElementById(
  "espiratoryEsophagealPressureValue-input"
);
const carbonDioxidePressureInput = document.getElementById(
  "carbonDioxidePressureValue-input"
);

calcularButton.addEventListener("click", calcular);

function calcular() {
  const inputsValues = {
    gender: genderInput.value,
    height: Number(heightInput.value),
    tidalVolumen: Number(tidalVolumenInput.value),
    peakPressure: Number(peakPressureInput.value),
    plateauPressure: Number(plateauPressureInput.value),
    totalPeep: Number(totalPeepInput.value),
    respiratoryRate: Number(respiratoryRateInput.value),
    peakInspiratoryFlow: Number(peakInspiratoryFlowInput.value),
    peakEspiratoryFlow: Number(peakEspiratoryFlowInput.value),
    inspiratoryTime: Number(inspiratoryTimeInput.value),
    espiratoryTime: Number(espiratoryTimeInput.value),
    totalTime: Number(totalTimeInput.value),
    inspiratoryEsophagealPressure: Number(
      inspiratoryEsophagealPressureInput.value
    ),
    espiratoryEsophagealPressure: Number(
      espiratoryEsophagealPressureInput.value
    ),
    carbonDioxidePressure: Number(carbonDioxidePressureInput.value),
  };

  document.getElementById("resultPredictedBodyWeight").textContent =
    calculatePredictedBodyWeight(inputsValues);

  document.getElementById("resultRespiratorySystemCompliance").textContent =
    calculateRespiratorySistemCompliance(inputsValues);

  document.getElementById("resultPulmonaryCompliance").textContent =
    calculatePulmonaryCompliance(inputsValues);

  document.getElementById("resultThoraxCompliance").textContent =
    calculateThoraxCompliance(inputsValues);

  document.getElementById("resultDinamicCompliance").textContent =
    calculateDinamicCompliance(inputsValues);

  document.getElementById("resultRespiratorySistemElastance").textContent =
    calculateRespiratorySistemElastance(inputsValues);

  document.getElementById("resultPulmonaryElastance").textContent =
    calculatePulmonaryElastance(inputsValues);

  document.getElementById("resultThoraxElastance").textContent =
    calculateThoraxElastance(inputsValues);

  document.getElementById("resultMaximalInspiratoryResistance").textContent =
    calculateMaximalInspiratoryResistance(inputsValues);

  document.getElementById("resultMaximalEspiratoryResistance").textContent =
    calculateMaximalEspiratoryResistance(inputsValues);

  document.getElementById("resultInspiratoryTimeConstant").textContent =
    calculateInspiratoryTimeConstant(inputsValues);

  document.getElementById("resultDrivingPressure").textContent =
    calculateDrivingPressure(inputsValues);

  document.getElementById("resultMinuteVolume").textContent =
    calculateMinuteVolume(inputsValues);

  document.getElementById("resultVentilatoryRatio").textContent =
    calculateVentilatoryRatio(inputsValues);

  document.getElementById("resultCorrectedMinuteVolume").textContent =
    calculateCorrectedMinuteVolume(inputsValues);

  document.getElementById("resultMechanicalPower").textContent =
    calculateMechanicalPower(inputsValues);

  document.getElementById(
    "resultTalmorInspiratoryTranspulmonaryPressure"
  ).textContent =
    calculateTalmorInspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    "resultTalmorEspiratoryTranspulmonaryPressure"
  ).textContent = calculateTalmorEspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    "resultGattinoniInspiratoryTranspulmonaryPressure"
  ).textContent =
    calculateGattinoniInspiratoryTranspulmonaryPressure(inputsValues);

  document.getElementById(
    "resultGattinoniEspiratoryTranspulmonaryPressure"
  ).textContent =
    calculateGattinoniEspiratoryTranspulmonaryPressure(inputsValues);

document.getElementById("results").className += "show-results";

  }
