const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Створення маршруту для головної сторінки
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Docker CI/CD Demo</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #333; }
          .container { border: 1px solid #ddd; padding: 20px; border-radius: 5px; }
          .success { color: green; }
        </style>
      </head>
      <body>
        <h1>Лабораторна робота - CI/CD з Docker</h1>
        <div class="container">
          <p>Веб-додаток успішно розгорнуто у контейнері</p>
          <p class="success">✅ Розгортання працює!</p>
          <p>Час сервера: ${new Date().toLocaleString()}</p>
          <p>Середовище: ${process.env.NODE_ENV || 'development'}</p>
        </div>
      </body>
    </html>
  `);
});

// Додаткові маршрути для перевірки працездатності
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/info', (req, res) => {
  res.json({
    app: 'docker-webapp-demo',
    version: '1.0.0',
    status: 'running'
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});