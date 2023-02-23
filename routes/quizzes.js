const router = require('express').Router()
const quizzesCtrl = require('../controllers/quizzes.js')

router.post('/', quizzesCtrl.create)
router.get('/', quizzesCtrl.index)
router.put('/:id', quizzesCtrl.update)
router.delete('/:id', quizzesCtrl.delete)

module.exports = router