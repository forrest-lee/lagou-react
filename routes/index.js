var express = require('express');
var router = express.Router();

var lagou = require('../controller/lagou.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '需求挖掘系统' });
});

var positionRouter = express.Router();
positionRouter.get('/all', lagou.showAllPosition);

var keywordRouter = express.Router();
keywordRouter.get('/', lagou.showAllKeywords);

var apiRouter = express.Router();
apiRouter.use('/position', positionRouter);
apiRouter.use('/keywords', keywordRouter);

router.use('/api/v1', apiRouter);

module.exports = router;
