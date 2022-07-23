import { Cuenta } from "./Cuenta.js";


export class CuentaCorriente extends Cuenta {

    static cantidadCuentas = 0;

    constructor(cliente, numeroCuenta, agencia) {
        super(cliente, numeroCuenta, agencia, 0);
        CuentaCorriente.cantidadCuentas++;
    }

    prueba() {
        console.log('Metodo hijo');
    }

    extraccionDeCuenta(valor) {        
        super._extraccionDeCuenta(valor,5);
    }
}