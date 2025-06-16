import express from "express";
import TasksRoutes from "./src/routes/Tasks.js";

import cookieParser from "cookie-parser";


const app = express();



// Middlewares
app.use(express.json());
app.use(cookieParser());

// Rutas

app.use("/api/Tasks", TasksRoutes);

// Middleware de manejo de errores
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({ 
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'production' ? {} : error.message 
  });
});

// Middleware para rutas no encontradas
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;