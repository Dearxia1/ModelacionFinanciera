// controlador.js
import { calcularTasaEfectiva,calculartasaPeriodica, calcularTasaPeriodicaAlNegocio,calcularTasaPeriodicaNominal} from './model.js';

function convertirTasa() {
  const tasa = parseFloat(document.getElementById('tasa').value);
  const n = parseInt(document.getElementById('periodos').value);

  const resultadoElemento = document.getElementById('resultado');
  const resultadoElemento2 = document.getElementById('resultadoTasaPeriodica');

  if (isNaN(tasa) || isNaN(n) || n <= 0) {
    resultadoElemento.textContent = 'Ingrese valores válidos.';
    return;
  }

  const tasaPeriodica = calculartasaPeriodica(tasa,n);
  const tasaEfectiva = calcularTasaEfectiva(tasa, n);
  resultadoElemento.textContent = `Tasa efectiva: ${tasaEfectiva.toFixed(2)}%`;
  resultadoElemento2.textContent = `Tasa periodica ${tasaPeriodica.toFixed(2)}%`;
}

document.getElementById("convertirBtn1").addEventListener("click", convertirTasa);


function convertirTasa2(){

let tasa = parseFloat(document.getElementById(`tasaEfectiva`).value);
let n = parseFloat(document.getElementById(`periodos2`).value);


  if (isNaN(tasa) || isNaN(n) || n <= 0) {
    resultadoElemento.textContent = 'Ingrese valores válidos.';
    return;
  }

  let TasaAplicada = calcularTasaPeriodicaAlNegocio(tasa,n)
  let TasaPeriodicaNominal = calcularTasaPeriodicaNominal(TasaAplicada,n)
  resultadoTasaPeriodicaAplicadaAlNegocio.textContent = TasaAplicada.toFixed(2);
  resultadoTasaPeriodicaNominal.textContent = TasaPeriodicaNominal.toFixed(2);
  console.log(resultadoTasaPeriodicaNominal)

}


document.getElementById("convertirBtn2").addEventListener("click", convertirTasa2);

