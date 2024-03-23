const express = require('express');
const router = express.Router();


const Task = require('../model/task')();
const Usuario = require('../model/usuarioModel');

router.get('/healthcheck', async (req, res) => {
  res.status(200).json({
    conection: true
  })
});

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.status(200)
  .json(tasks);
});

router.get('/index', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', {
    title: 'Example Node.js y MongoDB',
    tasks: tasks 
  });
});

// Ruta del botón para agregar tarea
router.post('/add', async (req, res) => {
  let body = req.body; 
  console.log(req.body);
  body.status = false; 
  try {
        const task = new Task(body);
        const saved = await task.save();
        //res.redirect("/index");
        res.status(201).json(saved);
      } catch (error) {
        res.status(500).send('Error interno del servidor al guardar');
      }
});

// Ruta del botón estado de tarea
router.get('/turn/:id', async (req, res) => {
  let id = req.params.id;
  try {
    const task = await Task.findById(id);
    task.status = !task.status;
    const saved = await task.save();
    //res.redirect('/index');
    res.status(200).json(saved);
  } catch (error) {
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta del botón de eliminar tarea
router.get('/delete/:id', async (req, res) => {
  let id = req.params.id;
  try {
      const task = await Task.deleteOne({_id: id});
      res.status(200).json(task);
      //res.redirect('/index');
    } catch (error) {
      console.log(error)
      res.status(500).send('Error interno del servidor');
    }
  });

module.exports = router;

