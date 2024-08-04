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
    return res.send(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Add transaction
// @route   POST /api/transactions
export const addTransactions = async (req, res, next) => {
  try {
    const transactions = await Transactions;
  } catch (error) {}
};

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
export const deleteTransactions = async (req, res, next) => {
  res.send('DELETE transactions');
};
