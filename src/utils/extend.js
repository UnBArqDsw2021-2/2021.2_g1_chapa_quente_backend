const mongoose = require('mongoose');

const extend = (Schema, obj) => new mongoose.Schema({ ...Schema.obj, ...obj });

module.exports = { extend };
