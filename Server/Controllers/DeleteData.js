var MovieModel=require('../ModelDB/db').Movie;
module.exports= function(req,res)
{
    var movienanme=req.params.movieName;
    MovieModel.remove({movieName: movienanme},function(err){
        if(!err)
        {
            res.send('Document Deleted Successfully');
        }

    });

}