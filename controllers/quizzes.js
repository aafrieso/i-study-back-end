const { Quiz } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id
    const quiz = await Quiz.create(req.body);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
}

const index = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json(error);
  }
}

const update = async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    // quiz.set(req.body);
    quiz.question = req.body.question
    quiz.option1 = req.body.option1
    quiz.option2 = req.body.option2
    quiz.option3 = req.body.option3
    quiz.option4 = req.body.option4
    quiz.answer = req.body.answer
    await quiz.save();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    await quiz.destroy();
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteQuiz
}