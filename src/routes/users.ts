import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Fetching all users' });
});

router.post('/', (req: Request, res: Response) => {
    const { name } = req.body;
    res.json({ message: `Creating a new user: ${name}` });
});

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ message: `Fetching user with ID: ${id}` });
});

export default router;