import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


const empleado1 = new Empleado('Juan Perez','12453854',150000);
empleado1.asignarClave('12345');
console.log(`Empleado: `,SistemaAutenticacion.login(empleado1,'12345'));

const gerente1 = new Gerente('Matias','34857854',170000);
gerente1.asignarClave('654321');
//const director1 = new Director('Francisco','34012584',190000);

console.log(`Gerente: `,SistemaAutenticacion.login(gerente1, '654321'));

const cliente1 = new Cliente('Emanuel', '33761385', '123456');
cliente1.asignarClave('789456');
console.log(`Cliente: `,SistemaAutenticacion.login(cliente1,'789456'));
