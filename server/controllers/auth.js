const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { CATEGORIES } = require('../utils/categories');
const saltRounds = 10;

exports.singUp = async(req, res) => {
    const {email, password, name, isAdmin} = req.body
    try {
        const userExists = await db.user.findFirst({
            where:{
                email
            }
        })
        if(userExists){
            throw new Error("User Already Exists")
        }
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const user = await db.user.create({
            data:{
                email,
                password:hashPassword,
                name,
                isAdmin
            }
        })
        if(isAdmin){
            const userCategories = CATEGORIES.map((category) => {
                return{
                    ...category,
                   userId: user.id
                }
            })
            await db.categories.createMany({
                data: userCategories
            })
        }
        return res.json({
            message: "User Created Successfully",
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.signIn = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await db.user.findFirst({
            where: {
                email
            }
        })
        if(!user){
            throw new Error("User Does Not Exists")
        }
        if(email !== user.email){
            throw new Error("Incorrect Email")
        }
        if(!bcrypt.compareSync(password, user.password)){
            throw new Error("Incorrect Password")
        }

        const {password: newPassword, ...userWithoutPassword } = user
        const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET_KEY)
        return res.json({
            message: "User Logged In Successfully",
            userWithoutPassword,
            token
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.getMe = (req, res) => {
     const user = req.user;
    return res.json({
            user
    })
}   