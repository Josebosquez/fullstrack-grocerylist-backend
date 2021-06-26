const Grocery = require("../Model/Grocery");

async function getAllGroceries(req, res) {
    try {
        let getAllGroceries = await Grocery.find({})

        res.json({ message: "success", payload: getAllGroceries })
    } catch (e) {
        res.status(500).json({ message: "failure", error: e.message })
    }
}

async function createGrocery(req, res) {
    const { grocery, purchased } = req.body

    let errorObj = {}

    if (Object.keys(errorObj).length > 0) {
        return res.status(500).json({ message: "error", payload: errorObj })
    }

    try {
        let createNewGrocery = new Grocery({
            grocery,
            purchased,
            Date: Date.now()
        })

        let save = await createNewGrocery.save()
        res.json({ message: "Success", save })
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message })
    }
}

async function updateGrocery(req, res) {
    let errorObj = {};

    if (Object.keys(errorObj).length > 0) {
        return res.status(500).json({ message: "error", payload: errorObj })
    }

    try {
        let grocery = req.body.grocery;

        let updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, { $set: { grocery: grocery } }, { new: true })

        res.json({ message: 'success', payload: updatedGrocery })
    } catch {
        res.status(500).json({ message: 'error' })
    }
};

async function deleteGrocery(req, res) {
    try {
        console.log('path hit')
        let delGrocery = await Grocery.findByIdAndRemove(req.params.id)
        res.json({ message: "success", delGrocery })
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message })
    }
};

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
}