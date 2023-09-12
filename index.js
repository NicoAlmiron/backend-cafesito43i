import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import 'dotenv/config' //permite procesar variables de entorno
import productoRouter from './src/routes/productos.routes.js';
import usuarioRouter from './src/routes/usuarios.routes.js';
import './src/database/database.js';
import path from 'path';
import { fileURLToPath } from 'url';

// 1- configuraciones iniciales

const app = express();

const _filename = fileURLToPath(
    import.meta.url);
const _dirname = path.dirname(_filename);
//crear una variable con express
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
    console.log('estoy escuchando en el puerto: ' + app.get('port'))
});
// 2- middlewares (funciones espesificas antes de las rutas (antes de llegar al backend))

app.use(cors()); // permite conexiones remotas
app.use(express.json()); // permite entender los datos en formato json
app.use(express.urlencoded({ extended: true })); //ayuda entender datos tipo array del body (request)
app.use(morgan('dev')); //herramienta de ayuda para el developer (nos da datos en la terminal)
// console.log(path.join(__dirname, '/public'));
// agregar un archivo estatico
// console.log(path.join('C:/Users/Nico/OneDrive/Escritorio/Proyectos/Nueva carpeta/backend-cafesito43i', '/public'));
app.use(express.static(path.join(_dirname, '/public')));
// app.use(express.static(, '/public')));

// 3- crear las rutas (siempre despues de los middlewares)

//https://localhost:4000/api/producto
//https://backend-cafesito43i.vercel.app/api/producto
app.use('/api', productoRouter);

// app.use('/api', usuarioRouter)
//https://backend-cafesito43i.vercel.app/api/auth
app.use('/api/auth', usuarioRouter);

//crear una ruta y controlador para los usuarios