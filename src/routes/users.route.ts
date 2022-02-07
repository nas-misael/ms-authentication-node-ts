import { Router, Response, Request, NextFunction } from "express";
import user_repository from "../repositories/user_repository";


const usersRoute = Router();

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await user_repository.findAllUsers();
    res.status(200).send(users)
})

usersRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await user_repository.findById(uuid);
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }

})

usersRoute.post('/users', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await user_repository.create(newUser);
    res.status(200).send(uuid)
})

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await user_repository.update(modifiedUser)

    res.status(200).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    await user_repository.remove(req.params.uuid)
    res.sendStatus(200);
});

export default usersRoute;
