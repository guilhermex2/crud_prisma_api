import e, { Router } from "express";
import { createUser } from "../services/user";
import { readUser } from "../services/user";
import { updateUser } from "../services/user";
import { deleteUser } from "../services/user";

const mainRouter = Router();

//Try catch para tratar erros na criação do usuário
/*Os dados podem ser recebidos pelo body, query, params, etc.*/
mainRouter.post('/user', async(req, res) => {
    try{
        const result = await createUser({
            name: req.body.name,
            email: req.body.email,
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({error: "Erro ao criar usuário"});
    }
})

mainRouter.get('/users', async(req, res) => {
    const result = await readUser();
    res.json(result);
})

mainRouter.put('/users', async(req, res) => {
    const result = await updateUser();
    res.json(result);
})

mainRouter.delete('/users', async(req, res) => {
    const result = await deleteUser();
    res.json(result);
})
export default  mainRouter;