// @desc    Get all transactions
// @route   GET /api/transactions
export const getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @desc    Add transaction
// @route   POST /api/transactions
export const addTransactions = (req, res, next) => {
  res.send("POST transactions");
};

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
export const deleteTransactions = (req, res, next) => {
  res.send("DELETE transactions");
};
