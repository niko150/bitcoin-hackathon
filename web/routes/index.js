var express = require('express');
var router = express.Router();
var queue = require('../server');
var BitQueueElement = require('../bit_queue_element');

var elem = new BitQueueElement(queue, 'new item', 1);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        bids: queue.queue
    });
});

module.exports = router;
