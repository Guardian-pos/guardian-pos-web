const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001; // Usamos el puerto 3001 para que no choque con tu API de administración (3000)

// Servir la carpeta public de manera estática
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Página web pública corriendo en http://localhost:${PORT}`);
});