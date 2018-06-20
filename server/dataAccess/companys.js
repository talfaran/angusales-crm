var Sequelize = require('sequelize');
var angusales = require('./dataAccess').connection;

class Company_Model {

    constructor() {

        this.company = angusales.define('Company', {
            company_id: { type: Sequelize.INTEGER, primaryKey: true },
            name: { type: Sequelize.STRING },
            Adrress: { type: Sequelize.STRING },
            Country: { type: Sequelize.STRING },
        }, {
                freezeTableName: { type: true }//ntice,add this as adittional object 
            });
    }

    getAllCompanys() {
        var companies;
      return  this.company.findAll().then(data => {
            return data;
            
        }, err => {
            console.error(err)
        });
    }

} // end of class

var companyInstance = new Company_Model();

module.exports = companyInstance;
