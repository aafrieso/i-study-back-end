const router = require('express').Router()
const quizzesCtrl = require('../controllers/quizzes.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

router.use(decodeUserFromToken)

router.post('/', checkAuth, quizzesCtrl.create)
router.get('/', checkAuth, quizzesCtrl.index)
router.put('/:id', checkAuth, quizzesCtrl.update)
router.delete('/:id', checkAuth, quizzesCtrl.delete)

module.exports = router