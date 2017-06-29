var MovieModel=require('../ModelDB/db').Movie;
module.exports= function(req,res)
{
    MovieModel.find(function(err,response){
        if(!err){
            res.send({response : response});
        }

    });
}