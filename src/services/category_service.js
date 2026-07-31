import categoryModel from '../models/category.model.js';

export async function getAllCategoryService(rep) {

    return await categoryModel.find({}).lean();

}

export async function createCategoryService (req) {
    const { name } = req.body;

    const category = await categoryModel.create( { name: name });

    return category;
}

