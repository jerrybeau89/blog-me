const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

router.post('/login', async (req, res) => { });
router.post('/logout', async (req, res) => { });
router.get('/', async (req, res) => { });
router.post('/', async (req, res) => { });


module.exports = router;