
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync')

exports.getAll = Model => catchAsync(async (req,res,next)=>{
    

        //EXECUTE QUERY
       
        const doc = await Model.find();


        //SEND RESPONSE
    res.status(200).json({
        status: 'success',
        result: doc.length,
        data: {
            data:doc
        }
    })
    
})