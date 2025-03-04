const projectModel = require("../models/project.model");

module.exports.createPorject = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ message: "Name is required" });
    }

    const project = await projectModel.create({
      name,
      code: " ",
    });
    console.log(project)

    res.status(200).json({
      message: "project created successfully",
      data: project,
    });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

module.exports.listAllPorject = async (req, res) => {
    try {
        const list = await projectModel.find()

        res.status(200).json({ message: "list of all porjects", projects: list})
    } catch (error) {
        res.status(400).json({ message: error})
    }
}
