use('test')


//to find all the records

//db.orders.find({})


//to get limit of contents as required

//db.orders.find({}).limit(5)

//to find all the delivered orders

//db.orders.find({status: 'delivered'})

//orders with total > 100 and total <= 300

// db.orders.find({
//     total:{ $gt : 1300}
// })

// db.orders.find({
//     $and: [{total:{$gt:100, $lt:300}}]
// })

// db.orders.find({total:{$gt:100,$lt:300}})

//logical operators
