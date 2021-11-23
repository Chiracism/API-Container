const db = require("../models/index");
const { Op } = require("sequelize");

// Endpoint to create navire
exports.createChoix = async (req, res, next) => {
  const navireObject = JSON.parse(JSON.stringify(req.body));

  delete choixbject.id;

  db.Choix.create({
    ...choixObject,
  })
    .then((choix) => {
      res.status(200).json(choix.dataValues);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to get single navire
exports.getOneChoix = async (req, res, next) => {
  let choix = await db.choix.findOne({
    where: { id: req.params.id },
  });

  if (choix) {
    res.status(200).json(choix);
  } else {
    res.status(400).json({ message: "Error on getting choix" });
  }
};

// Endpoint to update navire
exports.modifyChoix = async (req, res, next) => {
  const choixObject = JSON.parse(JSON.stringify(req.query));

  db.choix.update(
    { ...choixObject },
    {
      where: { id: req.params.id },
    }
  )
    .then(async () => {
      await db.Choix.findOne({ where: { id: req.params.id } })
        .then((choix) => {
          res.status(200).json(choix);
        })
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => error.message);
};

// Endpoint to get all choix
exports.getAllChoix = async (req, res, next) => {
  db.Ch.findAll()
    .then((choix) => {
      res.status(200).json(choix);
    })
    .catch((error) => res.status(400).json({ error }));
};

// Endpoint to delete choix
exports.deleteChoix = async (req, res, next) => {
  db.Choix.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Choix deleted !" });
    })
    .catch((error) => res.status(400).json({ error }));
};
