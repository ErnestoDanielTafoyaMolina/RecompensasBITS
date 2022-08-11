import app from './app';//escuchar las dependencias, middlewares y más de la app en la aplicación
app.listen(app.get('port'));//esuccha al puerto asignado 
console.log('Server on port',app.get('port'));/*El puerto escuchado se muestra en consola*/