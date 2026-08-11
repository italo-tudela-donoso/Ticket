import categoryModel from '../category.model.js';


class CategoryDAO { 
    async create(category) {
        return await categoryModel.create(category);    
    }

    async update(categoryId, update) {
        return await categoryModel.findByIdAndUpdate(categoryId, update);
    }

    async delete(categoryId) {
        return await categoryModel.findByIdAndDelete(categoryId);
    }

    async findOne(name) {
        return await categoryModel.findOne({ name });
    }
}

export default new CategoryDAO();
