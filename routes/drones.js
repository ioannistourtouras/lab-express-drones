const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")

// require the Drone model here
const Drone = require('../models/Drone.model')
router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  const drones = await Drone.find();
  //console.log(drones);
  res.render("drones/list.hbs", { allTheDrones: drones })
});

router.get('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const userCreatedDrone = new Drone({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,    
  });
   
  await userCreatedDrone.save();
  res.redirect("/drones");
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = mongoose.Types.ObjectId(req.params.id);
  const droneDetails = await Drone.findById(droneId);
  console.log(droneDetails, "dornedetails");
  res.render("drones/update-form", {droneDetails})
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = mongoose.Types.ObjectId(req.params.id);
  await Drone.findByIdAndUpdate(droneId,  {  
    name:req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed});
  res.redirect("/drones/" + droneId)
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
