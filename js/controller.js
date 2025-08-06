// controller.js
import { calcTE, calcTP, calcTPA, calcTPN, calcTPAA, calcTPNA, calcTPAEAAtoV } from './model.js';

function convertirTN() {
  const tn = parseFloat(document.getElementById('inpTN').value);
  const n = parseInt(document.getElementById('selN1').value);
  const t = parseInt(document.getElementById('type').value);


  switch (t) {
    case 0:

    console.log(t)

     let resTE = document.getElementById('resTE');
     let resTP = document.getElementById('resTP');

    if (isNaN(tn) || isNaN(n) || n <= 0) {
      resTE.textContent = 'Ingrese valores válidos.';
      return;
    }

     let te = calcTPAEAAtoV(tn, n);
     let tp = calcTP(tn,n)

    resTE.textContent = `Tasa efectiva: ${te.toFixed(2)}%`;
    resTP.textContent = `Tasa periódica: ${tp.toFixed(2)}%`;

      break;

    case 1:

     let resTE1 = document.getElementById('resTE');
     let resTP1 = document.getElementById('resTP');

    if (isNaN(tn) || isNaN(n) || n <= 0) {
      resTE1.textContent = 'Ingrese valores válidos.';
      return;
    }

     let tp1 = calcTP(tn, n);
     let te1 = calcTE(tn, n);

    resTE1.textContent = `Tasa efectiva: ${te1.toFixed(2)}%`;
    resTP1.textContent = `Tasa periódica: ${tp1.toFixed(2)}%`;

        
    default:
      break;
  }

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
