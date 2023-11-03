import bcrypt from 'bcrypt'
import jwt  from 'jsonwebtoken'
import usuarioModel  from '../models/usuario.model.js'
const secretWord = process.env.JWTSECRET

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const usuarioEncontrado = await usuarioModel.findOne({email});
        if (!usuarioEncontrado) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }
        const passwordCorrecto = bcrypt.compareSync(password, usuarioEncontrado.password);
        console.log(passwordCorrecto)
        if (!passwordCorrecto) {
            return res.status(400).json({
                message: "email o password incorrecto"
            });
        }

        const payload = {
            usuario: {
                id: usuarioEncontrado._id
            }
        }

        const token = jwt.sign(payload, secretWord, {expiresIn: '1h'});

        return res.status(200).json({
            message: "acceso correcto",
            token
        });
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error al validar credenciales",
            error: error.message
        });
    }
}
