const Fellow = require('../models/Fellow');

/* 
These controllers take incoming requests and utilize the
methods provided by the Fellow "model" before sending a
response back to the client (or an error message).
*/


// Create
const createFellow = (req, res) => {
  const { fellowName } = req.body;
  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const newFellow = Fellow.create(fellowName);
  res.send(newFellow);
};

// Get All (Read)
const listFellows = (req, res) => {
  const fellowsList = Fellow.list();
  res.send(fellowsList);
}

// Get One (Read)
const findFellow = (req, res) => {
  const { id } = req.params;
  const fellow = Fellow.find(Number(id));

  if (!fellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }
  res.send(fellow);
};

// Update
const updateFellow = (req, res) => {
  const { fellowName } = req.body;

  if (!fellowName) {
    return res.status(400).send({ message: "Invalid Name" });
  }

  const { id } = req.params;
  const updatedFellow = Fellow.editName(Number(id), fellowName);

  if (!updatedFellow) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.send(updatedFellow);
}

// Delete
const deleteFellow = (req, res) => {
  const { id } = req.params;
  const didDelete = Fellow.delete(Number(id));

  if (!didDelete) {
    return res.status(404).send({
      message: `No fellow with the id ${id}`
    });
  }

  res.sendStatus(204);
}

module.exports = {
  createFellow,
  listFellows,
  findFellow,
  updateFellow,
  deleteFellow
};