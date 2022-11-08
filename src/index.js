const calcularButton = document.getElementById("calcular-button");
const resultado = document.getElementById("resultado");

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

/*
console.log(
  gender.value,
  height.value,
  tidalVolumen.value,
  peakPressure.value,
  plateauPressure.value,
  totalPeep.value,
  respiratoryRate.value,
  peakInspiratoryFlow.value,
  peakEspiratoryFlow.value,
  inspiratoryTime.value,
  espiratoryTime.value,
  totalTime.value,
  inspiratoryEsophagealPressure.value,
  espiratoryEsophagealPressure.value,
  carbonDioxidePressure.value
);
*/

calcularButton.addEventListener("click", calcular);

function calcular() {
  //.value from String to Number
  const genderValue = genderInput.value;
  const heightValue = Number(heightInput.value);
  const tidalVolumenValue = Number(tidalVolumenInput.value);
  const peakPressureValue = Number(peakPressureInput.value);
  const plateauPressureValue = Number(plateauPressureInput.value);
  const totalPeepValue = Number(totalPeepInput.value);
  const respiratoryRateValue = Number(respiratoryRateInput.value);
  const peakInspiratoryFlowValue = Number(peakInspiratoryFlowInput.value);
  const peakEspiratoryFlowValue = Number(peakEspiratoryFlowInput.value);
  const inspiratoryTimeValue = Number(inspiratoryTimeInput.value);
  const espiratoryTimeValue = Number(espiratoryTimeInput.value);
  const totalTimeValue = Number(totalTimeInput.value);
  const inspiratoryEsophagealPressureValue = Number(
    inspiratoryEsophagealPressureInput.value
  );
  const espiratoryEsophagealPressureValue = Number(
    espiratoryEsophagealPressureInput.value
  );
  const carbonDioxidePressureValue = Number(carbonDioxidePressureInput.value);

  //Empy array for results
  const results = [];

  //Functions
  const resultRespiratorySistemCompliance =
    calculateRespiratorySistemCompliance(
      tidalVolumenValue,
      plateauPressureValue,
      totalPeepValue
    );
  results.push(
    `La Complacencia del sistema respiratorio es: ${resultRespiratorySistemCompliance} ml/cmH2O`
  );

  const reultPulmonaryCompliance = calculatePulmonaryCompliance(
    tidalVolumenValue,
    plateauPressureValue,
    totalPeepValue,
    inspiratoryEsophagealPressureValue,
    espiratoryEsophagealPressureValue
  );
  results.push(
    `La Complacencia del pulmon es: ${reultPulmonaryCompliance} ml/cmH2O`
  );

  const resultThoraxCompliance = calculateThoraxCompliance(
    tidalVolumenValue,
    inspiratoryEsophagealPressureValue,
    espiratoryEsophagealPressureValue
  );
  results.push(
    `La Complacencia de la caja toracica es: ${resultThoraxCompliance} ml/cmH2O`
  );

  const resultDinamicCompliance = calculateDinamicCompliance(
    tidalVolumenValue,
    peakPressureValue,
    totalPeepValue
  );
  results.push(
    `La Complacencia dinamica del sistema respiratorio es: ${resultDinamicCompliance} ml/cmH2O`
  );

  const resultRespiratorySistemElastance = calculateRespiratorySistemElastance(
    plateauPressureValue,
    totalPeepValue,
    tidalVolumenValue
  );
  results.push(
    `La Elastancia del sistema respiratorio es: ${resultRespiratorySistemElastance} cmH2O/l`
  );

  const resultPulmonaryElastance = calculatePulmonaryElastance(
    plateauPressureValue,
    inspiratoryEsophagealPressureValue,
    espiratoryEsophagealPressureValue,
    totalPeepValue,
    tidalVolumenValue
  );
  results.push(
    `La Elastancia del pulmon es: ${resultPulmonaryElastance} cmH2O/l`
  );

  const resultThoraxElastance = calculateThoraxElastance(
    espiratoryEsophagealPressureValue,
    inspiratoryEsophagealPressureValue,
    tidalVolumenValue
  );
  results.push(
    `La Elastancia de la caja toracica es: ${resultThoraxElastance} cmH2O/l`
  );

  const resultMaximalInspiratoryResistance =
    calculateMaximalInspiratoryResistance(
      peakPressureValue,
      plateauPressureValue,
      peakInspiratoryFlowValue
    );
  results.push(
    `La Resistencia inspiratoria máxima del sistema respiratorio es: ${resultMaximalInspiratoryResistance} cmH2O/l/seg`
  );

  const resultMaximalEspiratoryResistance =
    calculateMaximalEspiratoryResistance(
      plateauPressureValue,
      totalPeepValue,
      peakEspiratoryFlowValue
    );
  results.push(
    `La Resistencia espiratoria del sistema respiratorio es: ${resultMaximalEspiratoryResistance} cmH2O/l/seg`
  );

  const resultInspiratoryTimeConstant = calculateInspiratoryTimeConstant(
    tidalVolumenValue,
    plateauPressureValue,
    totalPeepValue,
    peakPressureValue,
    peakInspiratoryFlowValue
  );
  results.push(
    `La Constante de tiempo inspiratoria del sistema respiratorio es: ${resultInspiratoryTimeConstant} seg`
  );

  const resultDrivingPressure = calculateDrivingPressure(
    tidalVolumenValue,
    plateauPressureValue,
    totalPeepValue
  );
  results.push(`La Driving pressure es: ${resultDrivingPressure} cmH2O`);

  const resultMinuteVolume = calculateMinuteVolume(
    tidalVolumenValue,
    respiratoryRateValue
  );
  results.push(`El Volumen minuto es: ${resultMinuteVolume} l/min`);

  const resultPredictedBodyWeight = calculatePredictedBodyWeight(
    genderValue,
    heightValue
  );
  results.push(`El Peso Corporal Predicho es: ${resultPredictedBodyWeight} kg`);

  const resultVentilatoryRatio = calculateVentilatoryRatio(
    carbonDioxidePressureValue,
    tidalVolumenValue,
    respiratoryRateValue,
    genderValue,
    heightValue
  );
  results.push(`El Ratio Ventilatorio es: ${resultVentilatoryRatio}`);

  const resultCorrectedMinuteVolume = calculateCorrectedMinuteVolume(
    tidalVolumenValue,
    carbonDioxidePressureValue,
    respiratoryRateValue
  );
  results.push(
    `El Volumen Minuto Corregido es: ${resultCorrectedMinuteVolume} l/min`
  );

  const resultMechanicalPower = calculateMechanicalPower(
    respiratoryRateValue,
    tidalVolumenValue,
    peakPressureValue,
    plateauPressureValue,
    totalPeepValue
  );
  results.push(
    `El Mechanical power del sistema respiratorio es: ${resultMechanicalPower} J/min`
  );

  const resultTalmorInspiratoryTranspulmonaryPressure =
    calculateTalmorInspiratoryTranspulmonaryPressure(
      plateauPressureValue,
      inspiratoryEsophagealPressureValue
    );
  results.push(
    `La Presion transpulmonar de fin de inspiracion segun Talmor es: ${resultTalmorInspiratoryTranspulmonaryPressure} cmH2O`
  );

  const resultTalmorEspiratoryTranspulmonaryPressure =
    calculateTalmorEspiratoryTranspulmonaryPressure(
      totalPeepValue,
      espiratoryEsophagealPressureValue
    );
  results.push(
    `La Presion transpulmonar de fin de espiracion segun Talmor es: ${resultTalmorEspiratoryTranspulmonaryPressure} cmH2O`
  );

  const resultGattinoniInspiratoryTranspulmonaryPressure =
    calculateGattinoniInspiratoryTranspulmonaryPressure(
      plateauPressureValue,
      espiratoryEsophagealPressureValue,
      inspiratoryEsophagealPressureValue,
      tidalVolumenValue,
      totalPeepValue
    );
  results.push(
    `La Presion transpulmonar de fin de inspiracion segun Gattinoni es: ${resultGattinoniInspiratoryTranspulmonaryPressure} cmH2O`
  );

  const resultGattinoniEspiratoryTranspulmonaryPressure =
    calculateGattinoniEspiratoryTranspulmonaryPressure(
      totalPeepValue,
      plateauPressureValue,
      espiratoryEsophagealPressureValue,
      inspiratoryEsophagealPressureValue,
      tidalVolumenValue
    );
  results.push(
    `La Presion transpulmonar de fin de espiracion segun Gattinoni es: ${resultGattinoniEspiratoryTranspulmonaryPressure} cmH2O`
  );

  resultado.textContent = results.join(`\n`);
}

//Functions for calculate Basic Pulmonary Mechanics
//Compliance: Respiratory sistem, Respiratory sistem in liters, Pulmonary, Thorax, Dinamic,

function calculateRespiratorySistemCompliance(
  tidalVolumenValue,
  plateauPressureValue,
  totalPeepValue
) {
  return (tidalVolumenValue / (plateauPressureValue - totalPeepValue)).toFixed(
    1
  );
}

function calculateRespiratorySistemComplianceLiters(
  tidalVolumenValue,
  plateauPressureValue,
  totalPeepValue
) {
  return (
    tidalVolumenValue /
    1000 /
    (plateauPressureValue - totalPeepValue)
  ).toFixed(1);
}

function calculatePulmonaryCompliance(
  tidalVolumenValue,
  plateauPressureValue,
  totalPeepValue,
  inspiratoryEsophagealPressureValue,
  espiratoryEsophagealPressureValue
) {
  return (
    tidalVolumenValue /
    (plateauPressureValue -
      inspiratoryEsophagealPressureValue -
      (totalPeepValue - espiratoryEsophagealPressureValue))
  ).toFixed(1);
}

function calculateThoraxCompliance(
  tidalVolumenValue,
  inspiratoryEsophagealPressureValue,
  espiratoryEsophagealPressureValue
) {
  return (
    tidalVolumenValue /
    (inspiratoryEsophagealPressureValue - espiratoryEsophagealPressureValue)
  ).toFixed(1);
}

function calculateDinamicCompliance(
  tidalVolumenValue,
  peakPressureValue,
  totalPeepValue
) {
  return (tidalVolumenValue / (peakPressureValue - totalPeepValue)).toFixed(1);
}

//Elastance: Respiratory sistem, Pulmonary, Thorax

function calculateRespiratorySistemElastance(
  plateauPressureValue,
  totalPeepValue,
  tidalVolumenValue
) {
  return (
    (plateauPressureValue - totalPeepValue) /
    (tidalVolumenValue / 1000)
  ).toFixed(1);
}

function calculatePulmonaryElastance(
  plateauPressureValue,
  inspiratoryEsophagealPressureValue,
  espiratoryEsophagealPressureValue,
  totalPeepValue,
  tidalVolumenValue
) {
  return (
    (plateauPressureValue -
      inspiratoryEsophagealPressureValue -
      (totalPeepValue - espiratoryEsophagealPressureValue)) /
    (tidalVolumenValue / 1000)
  ).toFixed(1);
}

function calculateThoraxElastance(
  espiratoryEsophagealPressureValue,
  inspiratoryEsophagealPressureValue,
  tidalVolumenValue
) {
  return (
    (inspiratoryEsophagealPressureValue - espiratoryEsophagealPressureValue) /
    (tidalVolumenValue / 1000)
  ).toFixed(1);
}

//Inspiratory resistance

function calculateMaximalInspiratoryResistance(
  peakPressureValue,
  plateauPressureValue,
  peakInspiratoryFlowValue
) {
  return (
    (peakPressureValue - plateauPressureValue) /
    (peakInspiratoryFlowValue / 60)
  ).toFixed(1);
}

//Espiratory resistance

function calculateMaximalEspiratoryResistance(
  plateauPressureValue,
  totalPeepValue,
  peakEspiratoryFlowValue
) {
  return (
    (plateauPressureValue - totalPeepValue) /
    (peakEspiratoryFlowValue / 60)
  ).toFixed(1);
}

//Inspiratory time constant

function calculateInspiratoryTimeConstant(
  tidalVolumenValue,
  plateauPressureValue,
  totalPeepValue,
  peakPressureValue,
  peakInspiratoryFlowValue
) {
  return (
    (tidalVolumenValue / 1000 / (plateauPressureValue - totalPeepValue)) *
    ((peakPressureValue - plateauPressureValue) /
      (peakInspiratoryFlowValue / 60))
  ).toFixed(2);
}

//Driving pressure

function calculateDrivingPressure(
  tidalVolumenValue,
  plateauPressureValue,
  totalPeepValue
) {
  return (
    tidalVolumenValue /
    (tidalVolumenValue / (plateauPressureValue - totalPeepValue))
  ).toFixed(1);
}

//Minute volume

function calculateMinuteVolume(tidalVolumenValue, respiratoryRateValue) {
  return ((tidalVolumenValue / 1000) * respiratoryRateValue).toFixed(1);
}

//Predicted body weight

function calculatePredictedBodyWeight(genderValue, heightValue) {
  if (genderValue == "Masculino") {
    return (50 + 0.91 * (heightValue - 152.4)).toFixed(1);
  }
  return (45.5 + 0.91 * (heightValue - 152.4)).toFixed(1);
}

//Ventilatory ratio

function calculateVentilatoryRatio(
  carbonDioxidePressureValue,
  tidalVolumenValue,
  respiratoryRateValue,
  genderValue,
  heightValue
) {
  if (genderValue == "Masculino") {
    return (
      (tidalVolumenValue * respiratoryRateValue * carbonDioxidePressureValue) /
      ((50 + 0.91 * (heightValue - 152.4)) * 100 * 37.5)
    ).toFixed(1);
  }
  return (
    (tidalVolumenValue * respiratoryRateValue * carbonDioxidePressureValue) /
    ((45.5 + 0.91 * (heightValue - 152.4)) * 100 * 37.5)
  ).toFixed(1);
}

//Corrected minute volume

function calculateCorrectedMinuteVolume(
  tidalVolumenValue,
  carbonDioxidePressureValue,
  respiratoryRateValue
) {
  return (
    (tidalVolumenValue / 1000) *
    respiratoryRateValue *
    (carbonDioxidePressureValue / 40)
  ).toFixed(1);
}

//Mechanical power

function calculateMechanicalPower(
  respiratoryRateValue,
  tidalVolumenValue,
  peakPressureValue,
  plateauPressureValue,
  totalPeepValue
) {
  return (
    0.098 *
    respiratoryRateValue *
    (tidalVolumenValue / 1000) *
    (peakPressureValue - (plateauPressureValue - totalPeepValue) / 2)
  ).toFixed(1);
}

//Talmor Inspiratory transpulmonary pressure

function calculateTalmorInspiratoryTranspulmonaryPressure(
  plateauPressureValue,
  inspiratoryEsophagealPressureValue
) {
  return (plateauPressureValue - inspiratoryEsophagealPressureValue).toFixed(1);
}

//Talmor Espiratory transpulmonary pressure

function calculateTalmorEspiratoryTranspulmonaryPressure(
  totalPeepValue,
  espiratoryEsophagealPressureValue
) {
  return (totalPeepValue - espiratoryEsophagealPressureValue).toFixed(1);
}

//Gattinoni Inspiratory transpulmonary pressure

function calculateGattinoniInspiratoryTranspulmonaryPressure(
  plateauPressureValue,
  espiratoryEsophagealPressureValue,
  inspiratoryEsophagealPressureValue,
  tidalVolumenValue,
  totalPeepValue
) {
  return (
    plateauPressureValue -
    plateauPressureValue *
      ((inspiratoryEsophagealPressureValue -
        espiratoryEsophagealPressureValue) /
        (tidalVolumenValue / 1000) /
        ((plateauPressureValue - totalPeepValue) / (tidalVolumenValue / 1000)))
  ).toFixed(1);
}

//Gattinoni Espiratory transpulmonary pressure

function calculateGattinoniEspiratoryTranspulmonaryPressure(
  totalPeepValue,
  plateauPressureValue,
  espiratoryEsophagealPressureValue,
  inspiratoryEsophagealPressureValue,
  tidalVolumenValue
) {
  return (
    totalPeepValue -
    totalPeepValue *
      ((inspiratoryEsophagealPressureValue -
        espiratoryEsophagealPressureValue) /
        (tidalVolumenValue / 1000) /
        ((plateauPressureValue - totalPeepValue) / (tidalVolumenValue / 1000)))
  ).toFixed(1);
}
