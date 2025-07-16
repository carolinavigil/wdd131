// Mostrar año actual y última modificación
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Cálculo de sensación térmica en grados Celsius
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);
const chillSpan = document.querySelector("#chill");

function calculateWindChillC(tempC, speedKmh) {
  // Fórmula del Canadian Weather Service en grados C y km/h
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  chillSpan.textContent = `${calculateWindChillC(temp, speed)} °C`;
} else {
  chillSpan.textContent = "N/A";
}
