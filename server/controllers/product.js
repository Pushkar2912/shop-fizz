const db = require('../config/db')
exports.getProducts = async(req, res) => {
    try {
        const products = db.product.findMany({
            where: {
                userId: req.user.id
            }
        })
        return res.json({
            products
        })
    } catch (error) {
        return res.staus(404).json({
            message:error
        })
    }
}

exports.getProduct = async(req, res) => {
    const id =  req.params.id
    try {
        const product = db.product.findUniqueOrThrow({
            where: {
                id,
                userId: req.user.id
            }
        })
        
        return res.json({
            product
        })
    } catch (error) {
        return res.json({
            message: error
        })
    }
}

exports.createProduct = (req, res) => {

    try {
            const product = db.product.create({
                data: {
                    ...req.body,
                    userId: req.user.id
                }
            })
            return res.json({
                message: "product created successfully",
                product
            })
    } catch (error) {
        return res.json({
            message: error
        })
    }
}