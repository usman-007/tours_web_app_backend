const Tour = require('../models/tourModel')
const catchAsync = require('../utils/catchAsync')

exports.getOverview = catchAsync(async (req,res,next)=>{

    // 1. get tour data from the collection
    const tours = await Tour.find();

    // 2. Build Template

    // 3. render that template using data
    res.status(200).render('overview',{
        title: 'All Tours',
        tours
    })
})

exports.getTour = catchAsync(async (req,res,next)=>{

    const tour = await Tour.findById(req.params.slug)
    .populate({
        path:'reviews',
        fields: 'review rating user'
    })
    
    console.log(req.params.slug)
    console.log(tour)

    res.status(200).render('tour',{
        title: 'fsefsef',
        tour
    })
})


exports.getLoginForm = (req,res)=>{
 res.status(200).render('login',{
    title: 'login to your account'
 })   
}