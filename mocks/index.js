import recipe from './recipe.json';
import { Router } from 'express';

function getRecipe(request, response) {
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify(recipe));
}

const router = Router();

router.use('/recipes', getRecipe);

export default router;