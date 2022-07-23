import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{

    constructor(cliente, numeroCuenta, agencia) { 
        super(cliente, numeroCuenta, agencia, 0); 
    }  

    extraccionDeCuenta(valor) {        
        super._extraccionDeCuenta(valor,2);
    }
}