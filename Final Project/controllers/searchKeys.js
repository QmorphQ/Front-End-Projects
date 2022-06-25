const SearchKey = require("../models/SearchKey");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addSearchKey = (req, res, next) => {
  SearchKey.findOne({ name: req.body.name }).then((searchKey) => {
    if (searchKey) {
      return res
        .status(400)
        .json({
          message: `SearchKey with name "${searchKey.name}" already exists`,
        });
    } else {
      const newSearchKey = new SearchKey(queryCreator(req.body));

      newSearchKey
        .save()
        .then((searchKey) => res.json(searchKey))
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          })
        );
    }
  });
};

exports.updateSearchKey = (req, res, next) => {
  SearchKey.findOne({ _id: req.params.id })
    .then((searchKey) => {
      if (!searchKey) {
        return res
          .status(400)
          .json({
            message: `SearchKey with _id "${req.params.id}" is not found.`,
          });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedSize = queryCreator(initialQuery);

        SearchKey.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedSize },
          { new: true }
        )
          .then((searchKey) => res.json(searchKey))
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.deleteSearchKey = (req, res, next) => {
  SearchKey.findOne({ _id: req.params.id }).then(async (searchKey) => {
    if (!searchKey) {
      return res
        .status(400)
        .json({
          message: `SearchKey with _id "${req.params.id}" is not found.`,
        });
    } else {
      const searchKeyToDelete = await SearchKey.findOne({ _id: req.params.id });

      SearchKey.deleteOne({ _id: req.params.id })
        .then((deletedCount) =>
          res.status(200).json({
            message: `SearchKey with name "${searchKeyToDelete.name}" is successfully deletes from DB `,
          })
        )
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          })
        );
    }
  });
};

exports.getSearchKeys = (req, res, next) => {
  SearchKey.find()
    .then((searchKeys) => res.send(searchKeys))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};
