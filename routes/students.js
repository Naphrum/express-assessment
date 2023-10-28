const express = require('express');
const router = express.Router();

// GET api/students
router.get('/', async (req, res) => {
  const db = req.app.get('db');

  const student = await db.students.find();
  res.json(student);
});


// GET api/students/:id:
router.get('/:id', async (req,res) => {
  const db = req.app.get('db')

  const {id} = req.params;

  const [student] = await db.students.find({id})
  res.json(student)
})

// POST api/students
router.post('/', async (req, res) => {
  const db = req.app.get('db');

  const {body} = req
  console.log(body)

  const student = await db.students.insert(body)
  console.log(student)
  res.json(student)
})

// PUT api/students
router.put('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {body} = req
  const {id} = req.params

  const student = await db.students.update(id, body,)
  res.json(student)
})

// DELETE api/students/:id
router.delete('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {id} = req.params

  await db.students.destroy(id)
  res.sendStatus(200)
})

module.exports = router;
