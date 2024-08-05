import Transaction from '../models/Transaction.js';

// @desc    Get all transactions
// @route   GET /api/transactions
export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Add transaction
// @route   POST /api/transactions
export const addTransactions = async (req, res, next) => {
  try {
    const text = req.body.text;
    const amount = req.body.amount;

    const transaction = await Transaction.create(req.body);

    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }
};

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
export const deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    // if no transaction is found
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: `No transaction found with id ${req.params.id}`,
      });
    }

    // id there is a transaction, remove it
    await Transaction.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      data: {}, // return empty object, could be something else
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};
