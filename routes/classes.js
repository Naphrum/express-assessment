const express = require('express');
const router = express.Router();

// GET api/classes
router.get('/', async (req, res) => {
  const db = req.app.get('db');

  const _class = await db.classes.find();
  res.json(_class);
});


// GET api/classes/:id:
router.get('/:id', async (req,res) => {
  const db = req.app.get('db')

  const {id} = req.params;

  const [_class] = await db.classes.find({id})
  res.json(_class)
})

// POST api/classes
router.post('/', async (req, res) => {
  const db = req.app.get('db');

  const {body} = req
  console.log(body)

  const _class = await db.classes.insert(body)
  console.log(_class)
  res.json(_class)
})

// PUT api/classes
router.put('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {body} = req
  const {id} = req.params

  const _class = await db.classes.update(id, body,)
  res.json(_class)
})

// DELETE api/classes/:id
router.delete('/:id', async (req, res) => {
  const db = req.app.get('db')

  const {id} = req.params

  await db.classes.destroy(id)
  res.sendStatus(200)
})

module.exports = router;