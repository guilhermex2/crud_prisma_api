import{ Router } from "express";
import { createUser, createUsers, readUser, readUsers, updateUsers, deleteUser} from "../services/user";

const mainRouter = Router();

//Try catch para tratar erros na criação do usuário
/*Os dados podem ser recebidos pelo body, query, params, etc.*/
mainRouter.post('/createUser', async(req, res) => {
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

mainRouter.post('/createUsers', async(req, res) => {
    try{
        const result = await createUsers(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: "Erro ao criar usuários"});
    }
})

mainRouter.get('/users', async(req, res) => {
    const result = await readUser();
    res.json(result);
})

mainRouter.get('/readUsers', async(req, res) => {
    try{
        const result = await readUsers();
        res.json(result);
    } catch (error) {
        res.status(500).json({error: "Erro ao bucar usuários"});
    }
})

mainRouter.put('/updateUsers', async(req, res) => {
    const result = await updateUsers();
    res.json(result);
})
 
mainRouter.delete('/deleteUser', async(req, res) => {
    const result = await deleteUser();
    res.json(result);
})
export default  mainRouter;