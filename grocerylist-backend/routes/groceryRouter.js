var express = require("express");
var router = express.Router();

var {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery,
} = require("./controller/groceryController");

router.get('/get-all-groceries', getAllGroceries);
router.post('/create-grocery', createGrocery);
router.put('/update-grocery-by-id/:id', updateGrocery);
router.delete('/delete-grocery-by-id/:id', deleteGrocery);

module.exports = router;
