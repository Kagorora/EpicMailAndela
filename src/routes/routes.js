import signController from '../controller/signUpController';
import express from 'express';

const router = express.Router();
router.post('/api/v1/signups', signController.saveUser);
router.get('/api/v1/signups', signController.displayUser);
router.delete('/api/v1/signups/:email', signController.deleteUser);
export default router;