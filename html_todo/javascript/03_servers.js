// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  // Extraemos la ruta solicitada por el usuario
  const url = req.url;

  if (url === '/' || url === '') {
    // 1. Ruta de inicio (raíz)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Inicio</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>¡Hola Mundo desde Node.js!</h1>
        <p>Bienvenido a la página principal.</p>
        <p><a href="/contactos">Ir a Contactos</a></p>
      </body>
      </html>
    `);

  } else if (url === '/contactos') {
    // 2. Ruta de contactos
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Contacto</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>Contáctanos</h1>
        <p>Escríbenos a nuestro correo o déjanos un mensaje aquí.</p>
        <p><a href="/">Volver al Inicio</a></p>
      </body>
      </html>
    `);

  } else {
    // 3. Ruta no encontrada (Error 404)
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 Not Found</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px; color: red;">
        <h1>Error 404</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <p><a href="/">Volver al Inicio</a></p>
      </body>
      </html>
    `);
  }
});

// Inicia el servidor http localmente en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});
