const express = require('express');
const router = express.Router();
const company = require('../dataAccess/companys');
const comments = require('../dataAccess/comments');


router.get('/:id', (req, res) => {
    comments.getCustomerComments(req.params.id).then(data => {
      res.send(JSON.stringify(data))
    }) 
    })

    router.post('/addcomment', (req, res) => {
      var text = req.body.text;
      var id = req.body.customer_id;
      comments.addNewComment(text,id).then(allComments => {
      res.send(JSON.stringify(allComments));       
     })
  });




module.exports = router;