const authorization = require('../../middlewares/authorization');

const router = require('express').Router();


router.get('/' ,authorization ,  (req , res)=>{
    if(req.authorized){
       return res.status(200).json({ message: `welcome to ${req.baseUrl}` });
    }
   return res.status(401).json({ message: `please login to use ${req.baseUrl}` });
})

module.exports = router;
