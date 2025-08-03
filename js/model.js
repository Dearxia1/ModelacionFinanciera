// modelo.js
export function calcularTasaEfectiva(tasaNominal, periodos) {
  return (Math.pow(1 + (tasaNominal / 100) / periodos, periodos) - 1) * 100;
}


export function calculartasaPeriodica(tasaNominal,periodos){
return((tasaNominal/100) / periodos) * 100
}


export function calcularTasaPeriodicaAlNegocio(tasaEfectiva,periodos){
  return ((Math.pow(1 + (tasaEfectiva / 100), 1 / periodos )) - 1) * 100
}

export function calcularTasaPeriodicaNominal(tasaPeriodicaAlNegocio,periodos){
return ((tasaPeriodicaAlNegocio / 100 ) * periodos) * 100;
}