import express from 'express';
console.log('esto es una pruebita')

// 1- configuraciones iniciales

const app = express();
//crear una variable con express
app.set('port', process.env.PORT || 4004)

// 2- middlewares 

// 3- crear las rutas (siempre despues de los middlewares)