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

export function calcTPAEAAtoV(tna, n) {

  let tpa = (tna / 100) / n; // paso 1: nominal anticipada -> periódica anticipada (decimal)
  console.log (tpa);
  const tpv = tpa / (1 - tpa); // paso 2: anticipada -> vencida
  console.log(tpv);
  console.log(`${tna} y ${n}`);
  return (Math.pow(1 + (tpv), n) - 1) * 100; // paso 3: vencida -> EA (%)
}



