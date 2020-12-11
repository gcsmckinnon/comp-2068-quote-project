const Quote = require('../models/quote');
const User = require('../models/user');

exports.index = async (req, res, next) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const quote = await Quote.findById(req.params.id);

    res.status(200).json(quote);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { quote, date } = req.body;

    const user = await User.findById(req.user._id);

    const qt = await Quote.create({
      author: user.name,
      quote: quote,
      date: new Date(date)
    });

    res.status(200).json({ message: "Quote was created successfully", quote: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, quote, date } = req.body;
    console.log(req.body);
    const qt = await Quote.findOneAndUpdate({ _id: _id }, {
      quote,
      date: new Date(date)
    });

    res.status(200).json({ message: "Quote was updated successfully", quote: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Quote.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Quote was deleted successfully" });
  } catch (error) {
    next(error);
  }
};