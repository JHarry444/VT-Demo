const { Trainer } = require("../db");

const router = require("express").Router();

router.get('/', async (req, res) => {
  const trainers = await Trainer.findAll();
  res.json(trainers);
});

router.get('/:id', async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  res.json(trainer);
});

router.post('/', async (req, res) => {
  if (!res.body) return next({ msg: "NO DATA", status: 400 });
  const { name, age, specialism } = res.body;
  if (!name) return next({ msg: "Name must not be blank", status: 400 });
  if (!age) return next({ msg: "Name must not be blank", status: 400 });
  if (!specialism) return next({ msg: "Name must not be blank", status: 400 });

  const trainer = await Trainer.create(req.body);
  res.json(trainer);
});

router.put('/:id', async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.update(req.body);
    res.json(trainer);
  } else {
    res.status(404).json({ message: 'Trainer not found' });
  }
});

router.delete('/:id', async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);
  if (trainer) {
    await trainer.destroy();
    res.json({ message: 'Trainer deleted' });
  } else {
    res.status(404).json({ message: 'Trainer not found' });
  }
});

module.exports = router;