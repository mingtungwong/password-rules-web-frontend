const ping = require('ping');
const router = require('express').Router();

router.get('/valid/:siteName', (req, res, next) => {
    ping.promise.probe(req.params.siteName)
    .then(result => res.send({alive: result.alive}));
});

module.exports = router;