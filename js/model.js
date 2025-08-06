// model.js - versión con máxima precisión usando Number

function precise(value) {
  return Number.parseFloat(Number(value).toPrecision(15));
}

export function calcTE(tn, n) {
  return precise((Math.pow(1 + (tn / 100) / n, n) - 1) * 100);
}

export function calcTP(tn, n) {
  return precise(((tn / 100) / n) * 100);
}

export function calcTPA(te, n) {
  return precise((Math.pow(1 + (te / 100), 1 / n) - 1) * 100);
}

export function calcTPN(tpa, n) {
  return precise(((tpa / 100) * n) * 100);
}

export function calcTPAA(te) {
  return precise(((te / 100) / (1 + (te / 100))) * 100);
}

export function calcTPNA(tpa, n) {
  return precise(tpa * n);
}

export function calcTPAEAAtoV(tna, n) {
  let tpa = (tna / 100) / n;
  let tpv = tpa / (1 - tpa);
  return precise((Math.pow(1 + tpv, n) - 1) * 100);
}