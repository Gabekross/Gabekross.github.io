
// BMI Calculation

const massLucas = 78;
const heightLucas = 1.69;
const massPeter = 92;
const heightPeter = 1.95;

const BMILucas = massLucas / (heightLucas * heightLucas);
const BMIPeter = massPeter / (heightPeter * heightPeter);

const lucasHigherBMI = BMILucas > BMIPeter;

console.log("Part A");
console.log("-------");

console.log(`“The BMI of Peter is ${BMIPeter.toFixed(2)}kg/m^2`);
console.log(`“The BMI of Lucas is ${BMILucas.toFixed(2)}kg/m^2`);

console.log("------------------------------------------------------------------------");
console.log("Part B");
console.log("-------");

if (lucasHigherBMI) {
    console.log(`Lucas's BMI (${BMILucas.toFixed(1)}kg/m^2) is higher than John's (${BMIPeter.toFixed(1)}kg/m^2).`);
  } else {
    console.log(`Peter's BMI (${BMIPeter.toFixed(1)}kg/m^2) is higher than Lucas's (${BMILucas.toFixed(1)}kg/m^2).`);
  }

if (!lucasHigherBMI) {
    console.log(`Lucas's BMI (${BMILucas.toFixed(1)}kg/m^2) is higher than John's (${BMIPeter.toFixed(1)}kg/m^2).`);
  } else {
    console.log(`Peter’s BMI is higher than Lucas’s BMI that is(${!lucasHigherBMI}) `);
  }

  console.log("------------------------------------------------------------------------");
  console.log("Part C");
  console.log("-------");

// Convert temperatures

const celsiusTemp = 100;
const fahrenheitTemp = 35;

const celsius = (fahrenheitTemp - 32) * 5/9;
const fahrenheit = (celsiusTemp * 9/5) + 32;

console.log(`(${celsiusTemp}\u00B0C) is ${fahrenheit.toFixed(1)}\u00B0F`);
console.log(`(${fahrenheitTemp}\u00B0F) is ${celsius.toFixed(1)}\u00B0C`);

console.log("------------------------------------------------------------------------");
console.log("Part D");
console.log("-------");



// Converting Temperatures using functions
// Convert Celsius to Fahrenheit
const convertToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(1)}°F.`);
  };

console.log("Covert the following from Celsius to Fahrenheit (100°C 0°C 10°C) ......"); 
convertToFahrenheit(100);
convertToFahrenheit(0);
convertToFahrenheit(10);

console.log("");

// Convert  Fahrenheit to Celsius

 const convertToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5/9;
   console.log (`${fahrenheit}°F is equal to ${celsius.toFixed(1)}°C.`);
  };
console.log("Covert the following from Fahrenheit to Celsius (32°F 10°F 102°F) ......");
convertToCelsius(32);
convertToCelsius(10);
convertToCelsius(102);


