import { Router, Response, Request, NextFunction } from "express";


const usersRoute = Router();

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Misael'}]
    res.status(200).send(users)
})

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(200).send({uuid});

})

usersRoute.post('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(200).send(newUser)
})

usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    res.status(200).send(modifiedUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(200);
});

export default usersRoute;
