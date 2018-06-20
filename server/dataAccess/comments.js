var Sequelize = require('sequelize');
var angusales = require('./dataAccess').connection;
const { customer } = require('./customers');

class Comments_Model {

    constructor() {

        this.comments = angusales.define('Comments', {
            comment_id: { type: Sequelize.INTEGER, primaryKey: true },
            customer_id: { type: Sequelize.INTEGER },
            date: { type: Sequelize.DATE },
            text: { type: Sequelize.STRING },
        },
            {
                freezeTableName: { type: true }
            });

        this.comments.hasMany(customer, { foreignKey: 'id' })
    }


    getCustomerComments(id) {
        return this.comments.findAll({ where: { customer_id: id } }).then(data => {
            return data;
        }, err => {
            console.error(err)
        });
    }
    addNewComment(text, id) {
      return  this.comments.create({
            comment_id: null,
            customer_id: id,
            date: new Date(),
            text: text
        }).then(() => {
        return  this.getCustomerComments(id);
        })
    }
}

var comments = new Comments_Model();

module.exports = comments;


