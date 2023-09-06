const { Logger } = require('../config')

class CrudRepository {
    constructor(model){
        this.model=model;
    }

    async create(data)
    {
        // try {
            const response = await this.model.create(data);
            return response;
        // } catch (error) {
        //     Logger.error('something went wrong in the crud repo : create');
        //     throw error;
        // }
    }

    async destroy(data)
    {
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in the crud repo : destroy');
            throw error;
        }
    }

    async getAll()
    {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('something went wrong in the crud repo : getAll');
            throw error;
        }
    }

    async update(id, data) //data ->object -> {col: value, ...}
    {
        try {
            const response = await this.model.update(data, {
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('something went wrong in the crud repo : update');
            throw error;
        }
    }
    
}

module.exports = CrudRepository;