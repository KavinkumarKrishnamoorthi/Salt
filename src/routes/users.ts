import { Router, Request, Response } from 'express';
import User, { IUser } from '../models/user';

const router: Router = Router();

// Fetch all users
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Create a new user
router.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const newUser: IUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

export default router;
