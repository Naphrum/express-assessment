const express = require('express');
const router = express.Router();

// GET api/classes
router.get('/', async (req, res) => {
  const db = req.app.get('db');

  const teacher = await db.teachers.find();
  res.json(teacher);
});


// GET api/teachers/:id:
router.get('/:id', async (req,res) => {
  const db = req.app.get('db')

  const {id} = req.params;

  const [teacher] = await db.teachers.find({id})
  res.json(teacher)
})

// POST api/teachers
router.post('/', async (req, res) => {
  const db = req.app.get('db');

  const {body} = req
  console.log(body)

  const teacher = await db.teachers.insert(body)
  console.log(teacher)
  res.json(teacher)
})

// PUT api/teachers
router.put('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {body} = req
  const {id} = req.params

  const teacher = await db.teachers.update(id, body,)
  res.json(teacher)
})

// DELETE api/teachers/:id
router.delete('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {id} = req.params

  await db.teachers.destroy(id)
  res.sendStatus(200)
})

module.exports = router;