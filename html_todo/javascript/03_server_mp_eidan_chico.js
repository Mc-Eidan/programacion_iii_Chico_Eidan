// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  // Extraemos la ruta solicitada por el usuario
  const url = req.url;

  if (url === '/' || url === '') {
    // 1. Ruta de inicio - Catálogo de Autos
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>AutoMarket - Compra y Venta de Autos</title>
      </head>
      <body style="font-family: sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 20px;">
        <header style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #1e3a8a; margin-bottom: 5px;">🚗 AutoMarket</h1>
          <p style="font-size: 1.1em; color: #555;">Encuentra el auto de tus sueños o vende el tuyo hoy mismo</p>
          <nav style="margin-top: 20px;">
            <a href="/" style="margin: 0 15px; text-decoration: none; color: #1e3a8a; font-weight: bold;">Inicio</a> | 
            <a href="/vender" style="margin: 0 15px; text-decoration: none; color: #1e3a8a; font-weight: bold;">Vender mi Auto</a>
          </nav>
        </header>

        <main style="max-width: 900px; margin: 0 auto;">
          <h2 style="border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">Autos Destacados en Venta</h2>
          
          <div style="display: flex; gap: 20px; justify-content: space-around; margin-top: 20px; flex-wrap: wrap;">
            <!-- Auto 1 -->
            <div style="background: white; border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 250px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <h3 style="margin-top: 0; color: #2c3e50;">SUV Familiar 2022</h3>
              <p style="color: #e74c3c; font-weight: bold; font-size: 1.2em;">$24,500 USD</p>
              <p style="font-size: 0.9em; color: #666;">Kilometraje: 15,000 km<br>Transmisión: Automática</p>
              <a href="/vender" style="display: block; text-align: center; background: #1e3a8a; color: white; padding: 8px; text-decoration: none; border-radius: 4px; margin-top: 10px;">Preguntar</a>
            </div>

            <!-- Auto 2 -->
            <div style="background: white; border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 250px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <h3 style="margin-top: 0; color: #2c3e50;">Sedán Deportivo 2020</h3>
              <p style="color: #e74c3c; font-weight: bold; font-size: 1.2em;">$18,900 USD</p>
              <p style="font-size: 0.9em; color: #666;">Kilometraje: 45,000 km<br>Transmisión: Manual</p>
              <a href="/vender" style="display: block; text-align: center; background: #1e3a8a; color: white; padding: 8px; text-decoration: none; border-radius: 4px; margin-top: 10px;">Preguntar</a>
            </div>
          </div>
        </main>
      </body>
      </html>
    `);

  } else if (url === '/vender') {
    // 2. Ruta para publicar / vender un auto
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Vender mi Auto - AutoMarket</title>
      </head>
      <body style="font-family: sans-serif; background-color: #f4f4f9; color: #333; margin: 0; padding: 20px;">
        <header style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #1e3a8a;">Publica tu Auto</h1>
          <p><a href="/" style="color: #1e3a8a; text-decoration: none; font-weight: bold;">← Volver al Catálogo</a></p>
        </header>

        <main style="max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          <h2 style="margin-top:0; text-align: center;">Datos del Vehículo</h2>
          <form style="display: flex; flex-direction: column; gap: 15px;">
            <label style="font-weight: bold;">Marca y Modelo:
              <input type="text" placeholder="Ej. Toyota Corolla" style="width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box;">
            </label>
            <label style="font-weight: bold;">Año:
              <input type="number" placeholder="Ej. 2021" style="width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box;">
            </label>
            <label style="font-weight: bold;">Precio Deseado ($):
              <input type="text" placeholder="Ej. 15000" style="width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box;">
            </label>
            <button type="button" onclick="alert('¡Gracias! Tu auto se enviará a revisión.')" style="background: #27ae60; color: white; padding: 12px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Publicar Anuncio</button>
          </form>
        </main>
      </body>
      </html>
    `);

  } else {
    // 3. Ruta no encontrada (Error 404)
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 - No Encontrado</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9;">
        <h1 style="color: #e74c3c; font-size: 3em; margin-bottom: 10px;">404</h1>
        <h2>Vehículo o página no encontrada</h2>
        <p>El enlace al que intentas acceder no está disponible.</p>
        <p><a href="/" style="color: #1e3a8a; font-weight: bold; text-decoration: none;">Volver al Inicio</a></p>
      </body>
      </html>
    `);
  }
});

// Inicia el servidor http localmente en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor de AutoMarket ejecutándose en http://127.0.0.1:3000');
});
