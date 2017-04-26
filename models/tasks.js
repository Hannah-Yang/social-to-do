'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const stringField = {
  type: String,
  minlength: 1,
  maxlength: 500,
};

const TaskSchema = new Schema({
  owner: ObjectId,
  name: stringField,
  description: stringField,
  isComplete: Boolean,
  collaborators: [String],
  mine: Boolean,
});

module.exports = mongoose.model('Tasks', TaskSchema);
