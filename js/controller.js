// controller.js
import { calcTE, calcTP, calcTPA, calcTPN, calcTPAA, calcTPNA } from './model.js';

function convertirTN() {
  const tn = parseFloat(document.getElementById('inpTN').value);
  const n = parseInt(document.getElementById('selN1').value);

  const resTE = document.getElementById('resTE');
  const resTP = document.getElementById('resTP');

  if (isNaN(tn) || isNaN(n) || n <= 0) {
    resTE.textContent = 'Ingrese valores válidos.';
    return;
  }

  const tp = calcTP(tn, n);
  const te = calcTE(tn, n);

  resTE.textContent = `Tasa efectiva: ${te.toFixed(2)}%`;
  resTP.textContent = `Tasa periódica: ${tp.toFixed(2)}%`;
}

document.getElementById("btnConvertirTN").addEventListener("click", convertirTN);

function convertirTE() {
  const te = parseFloat(document.getElementById('inpTE').value);
  const n = parseFloat(document.getElementById('selN2').value);

  const resTPA = document.getElementById('resTPA');
  const resTPNV = document.getElementById('resTPNV');
  const resTPAA = document.getElementById('resTPAA');
  const resTPNA = document.getElementById('resTPNA');

  if (isNaN(te) || isNaN(n) || n <= 0) {
    resTPA.textContent = 'Ingrese valores válidos.';
    return;
  }

  const tpa = calcTPA(te, n);
  const tpn = calcTPN(tpa, n);
  const tpaa = calcTPAA(tpa);
  const tpna = calcTPNA(tpaa,n)

  resTPA.textContent = `TP aplicada vencida: ${tpa.toFixed(2)}%`;
  resTPNV.textContent = `TP nominal vencida: ${tpn.toFixed(2)}%`;
  resTPAA.textContent = `TP aplicada anticipada: ${tpaa.toFixed(2)}%`;
  resTPNA.textContent = `TP nominal anticipada: ${tpna.toFixed(2)}%`;
}

document.getElementById("btnConvertirTE").addEventListener("click", convertirTE);
