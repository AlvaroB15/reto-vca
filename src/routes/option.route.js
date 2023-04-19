import {Router} from 'express';
import {getChooseOption} from "../controllers/option.controller.js";

const router = Router();

router.get('/choose', getChooseOption);

router.all('*', (req, res) => {
    res.status(404);
    res.send({error: 'Not found'});
})

export default router;
