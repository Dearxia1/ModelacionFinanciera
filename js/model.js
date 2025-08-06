// model.js

export function calcTE(tn, n) {
  return (Math.pow(1 + (tn / 100) / n, n) - 1) * 100;
}

export function calcTP(tn, n) {
  return ((tn / 100) / n) * 100;
}

export function calcTPA(te, n) {
  return (Math.pow(1 + (te / 100), 1 / n) - 1) * 100;
}

export function calcTPN(tpa, n) {
  return ((tpa / 100) * n) * 100;
}

export function calcTPAA(te){
  return ((te / 100)/(1 + (te / 100))) * 100;
}

export function calcTPNA(tpa,n){
  return (((tpa) * (n)));
}

export function calcTPAEAAtoV(tpa){
  return ( (tpa / 100) / ((1 - (tpa/100))) * 100);
}


