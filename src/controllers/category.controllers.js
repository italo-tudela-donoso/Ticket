import { getAllCategoryService, createCategoryService} from '../services/category_service.js';

export async function getAll(req, res) {

    try {
        const categories = await getAllCategoryService(req);
        res.status(200).json(categories);
    } catch (error){
        res.status(500).json({error: error.toString()});
    };
    
}
    
export async function createCategory(req, res) {
    try {
        const category = await createCategoryService(req);
        res.status(201).json({ data:category});
    } catch (error) {
        res.status(500).json( { error: error.toString()});
    }
    
}
