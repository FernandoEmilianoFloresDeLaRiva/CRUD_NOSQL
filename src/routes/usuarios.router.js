import { Router } from 'express'
import * as usuarioController from '../controllers/usuario.controller.js'
import {login} from "../controllers/auth.controller.js"
import {verificarJWT} from '../middlewares/auth.middleware.js'

const usuarioRouter = Router()

usuarioRouter.get('/', verificarJWT,usuarioController.index)
usuarioRouter.post("/login", login)
usuarioRouter.post('/',verificarJWT, usuarioController.create)
usuarioRouter.delete('/:id',verificarJWT, usuarioController.deleteLogico)
usuarioRouter.patch('/:id',verificarJWT, usuarioController.updateParcial)
usuarioRouter.put('/:id',verificarJWT, usuarioController.updateCompleto)

export default usuarioRouter
