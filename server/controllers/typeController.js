const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{
    async create (req, res, next){
        const {name} = req.body
        const condidate = await Type.findOne({where: {name}})
        if (condidate) {
            return next(ApiError.badRequest("Такой тип товаров уже существует"))
        }
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types);
    }
}

module.exports = new TypeController()