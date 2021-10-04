const { drinksModel } = require("../Modules/favorait.schema");

const addToFavorite = async (req, res) => {
    const favoriteItem = req.body
    const newFavoriteItem = new drinksModel(favoriteItem)
    try {
        newFavoriteItem.save()
        res.send(newFavoriteItem)
    } catch (err) {
        console.log(err);
    }
}
const getFavorites = (req, res) => {
    drinksModel.find().then(
        allFavorites => res.send(allFavorites)
    ).catch(err => res.send(err))
}
const updateFavorites = (req, res) => {
    const id = req.params.id;
    const obj = req.body
    drinksModel.findByIdAndUpdate(id, obj, { new: true }, () => drinksModel.find().then(
        data => res.send(data)
    ))
}
const delFavorite = (req, res) => {
    const id = req.params.id;
    drinksModel.findByIdAndDelete(id).then(
        del => drinksModel.find().then(
            allFavorites => res.send(allFavorites)
        ).catch(err => res.send(err))
    )
}

module.exports = { addToFavorite, getFavorites, updateFavorites, delFavorite }