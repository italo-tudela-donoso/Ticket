import categoryDAO from '../models/MongoDao/CategoryDAO.js';

export async function getAllCategoryService(rep) {

    return await categoryDAO.find({}).lean();

}

export async function createCategoryService (req) {
    const { name } = req.body;

    const category = await categoryDAO.create( { name: name });

    return category;
}

export async function findOneCategoryService (name) {
    const category = await categoryDAO.findOne(name);   
}


