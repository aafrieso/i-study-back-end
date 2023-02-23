const { Quiz } = require('../models')

const create = async (req, res) => {
  try {
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
    quiz.set(req.body);
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
    
    res.status(200).json(numberOfRowsRemoved);
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