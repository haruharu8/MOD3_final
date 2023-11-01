const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    storeName: String,
    amount: Number,
    isNegative: Boolean,
},
{

    timestamps: true

});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
