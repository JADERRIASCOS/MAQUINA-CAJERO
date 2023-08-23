let saldo = 0;

function manejarOpcion() {
  let opcion = prompt("Seleccione una opción:\n1. Depositar\n2. Retirar\n3. Consultar saldo\n4. Salir");

  if (opcion === "1") {
    let montoDeposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    saldo += montoDeposito;
    alert(`Has depositado ${montoDeposito} unidades. Saldo actual: ${saldo} unidades`);
    manejarOpcion();
  } else if (opcion === "2") {
    let montoRetiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (montoRetiro <= saldo) {
      saldo -= montoRetiro;
      alert(`Has retirado ${montoRetiro} unidades. Saldo actual: ${saldo} unidades`);
    } else {
      alert("Saldo insuficiente.");
    }
    manejarOpcion();
  } else if (opcion === "3") {
    alert(`Tu saldo actual es: ${saldo} unidades`);
    manejarOpcion();
  } else if (opcion === "4") {
    alert("Gracias por usar nuestro cajero.");
  } else {
    alert("Opción inválida. Por favor, elija una opción válida.");
    manejarOpcion();
  }
}

manejarOpcion();