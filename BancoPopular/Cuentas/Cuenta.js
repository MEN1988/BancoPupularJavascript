export class Cuenta{

    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo){ 
        
        if(this.constructor == Cuenta){
            throw new Error('No se deben instanciar objetos de la clase cuenta.');
            
        }
        
        this.#cliente = cliente;        
        this.numeroCuenta = numero;
        this.agencia = agencia;        
        this.#saldo = saldo;        
    }

    set setCliente(valor){
        if (valor instanceof Cliente){
            this.#cliente = valor;
        }            
    }

    get getCliente(){
        return this.#cliente;
    }


    depositoEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;            
            return console.log(`- Se depositan $ ${valor}. Saldo actual cuenta N° ${this.numeroCuenta}: $ ${this.consultarSaldo()}`);
        } else{
            return console.log('- Por favor ingresar solo importes positivos.')
        }
    }

    //Metodo Abstracto
    extraccionDeCuenta(valor) {        
        throw new Error('Debe implementar el metodo extraccionDeCuenta de su clase.')
    }

    _extraccionDeCuenta(valor, comision) {        
        if (this.#saldo >= valor) {
            valor = valor * (1+(comision/100));
            this.#saldo -= valor;            
            return console.log(`- Se retiran $ ${valor}. Saldo actual cuenta N° ${this.numeroCuenta}: $ ${this.consultarSaldo()}`);
        } else if ((this.#saldo + 10000) == valor) {
            console.log('- Se autoriza un giro en descubierto de $10.000 para poder realizar la extracción.')
            this.#saldo -= valor;
            return console.log(`- Saldo actual: $ ${this.consultarSaldo()}`);
        } else {
            return console.log(`- Su saldo actual es de: $ ${this.#saldo}, es insuficiente para realizar el retiro de ${valor}.`)
        }
    }

    consultarSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.extraccionDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        console.log(`- Se transfieren $ ${valor}. Saldo actual cuenta origen ${this.numeroCuenta}, $ ${this.#saldo}.`)
        console.log(`- Se reciben $ ${valor}. Saldo actual cuenta destino ${cuentaDestino.numeroCuenta}, $ ${cuentaDestino.consultarSaldo()}.`)        
    }

    prueba(){
        console.log('Metodo padre');
    }


}