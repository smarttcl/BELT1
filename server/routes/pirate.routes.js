const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PirateController.index);
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAll);
    app.get('/api/pirate/:_id', PirateController.getOne);
    app.put('/api/pirate/:_id', PirateController.updateObject);
    app.delete('/api/pirate/:_id', PirateController.deleteObject);
}