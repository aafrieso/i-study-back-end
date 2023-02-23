const { Quiz } = require('../models')
const cloudinary = require('cloudinary').v2

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

module.exports = {
  create,
  index,
}