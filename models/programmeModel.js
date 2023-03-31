const mongoose = require("mongoose");

const programmeModel = new mongoose.Schema(
  {
    nomProgramme: {
      type: String,
      required: true,
    },
    coach: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    IdCategorie: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Categorie",
      required: true,
    },
    nombreExercices: {
      type: Number,
      required: true,
      default: 0,
    },
    
    disponible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("programmes", programmeModel);
