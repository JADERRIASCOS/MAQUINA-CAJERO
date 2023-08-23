const costoGalleta = 2;
const costoGaseosa = 4;

const saldoUsuario = parseFloat(prompt("Por favor, ingrese un saldo:"));
const seleccion = parseInt(prompt("Seleccione un producto:\n1. Galleta (costo: 2)\n2. Gaseosa (costo: 4)"));

if (seleccion === 1) {
  if (saldoUsuario >= costoGalleta) {
    const cambio = saldoUsuario - costoGalleta;
    alert("Disfrute de su galleta :D");
    if (cambio > 0) {
      alert(`Su cambio es de ${cambio} pesos. Vuelva pronto ♥`);
    } else {
      alert("Vuelva pronto ♥");
    }
  } else {
    alert("Saldo insuficiente para comprar una galleta.");
  }
} else if (seleccion === 2) {
  if (saldoUsuario >= costoGaseosa) {
    const cambio = saldoUsuario - costoGaseosa;
    alert(" Disfrute de su gaseosa :D");
    if (cambio > 0) {
      alert(`Su cambio es de ${cambio} pesos. Vuelva pronto ♥`);
    } else {
      alert("Vuelva pronto ♥");
    }
  } else {
    alert("Saldo insuficiente para comprar una gaseosa.");
  }
} else {
  alert("Opción no válida. Por favor, seleccione 1 para galleta o 2 para gaseosa.");
}