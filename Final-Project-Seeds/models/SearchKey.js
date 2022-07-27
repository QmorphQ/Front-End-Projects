const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SearchKeySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    itemNo: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = SearchKey = mongoose.model("searchKeys", SearchKeySchema);
