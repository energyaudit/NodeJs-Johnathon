// /////////////////////////////////
// /////////////////////////////////version 1
// const mongoose = require('mongoose');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   rating: {
//     type: Number,
//     default: 4.5
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   }
// });
// //Tour T capital means deal with model
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 2,add more fields of tour model
// const mongoose = require('mongoose');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date]
// });

// //Tour T capital means deal with model
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 3,virturl schema
// const mongoose = require('mongoose');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date]
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // tourSchema.pre('save', function(next) {
// //   console.log('Will save document...');
// //   next();
// // });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 3,virturl schema
// const mongoose = require('mongoose');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date]
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// //docomemnt middleware,runs before .save and .create()
// tourSchema.pre('save', function() {
//   console.log(this);//document created show in console
//   next();
// });
// // tourSchema.pre('save', function(next) {
// //   console.log('Will save document...');
// //   next();
// // });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 4,document pre middileware slugify
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date]
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// //docomemnt middleware,runs before .save and .create(),following 3 lines commented out into slugify ones
// // tourSchema.pre('save', function() {//there is only one middleware so far,that is why no next still no error
// //   console.log(this);//document created show in console
// //   next();
// // });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function(next) {//because add next() function,so next is add in middleware para as well
//   this.slug = slugify(this.name, { lower: true });//slugify create string before save and all to lower case
//   next();//slug is not in shcema,so cannot save into DB ,need go to shcema add slug  field
// });

// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 5,document post middileware 
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date]
// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// //save is the hook
// // tourSchema.pre('save', function(next) {//because add next() function,so next is add in middleware para as well
// //   this.slug = slugify(this.name, { lower: true });//slugify create string before save and all to lower case
// //   next();//slug is not in shcema,so cannot save into DB ,need go to shcema add slug  field
// // });
// ////post middleware happeed after event
// // tourSchema.post('save', function(doc, next) {//one para is document,one para is next,after all previoius middleware completed
// //   console.log(doc);//no long has this keyword only finished document here
// //   next();
// // });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 6,Query middileware 
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date],
//   secretTour: {
//     type: Boolean,
//     default: false
//   }

// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// //save is the hook
// // tourSchema.pre('save', function(next) {//because add next() function,so next is add in middleware para as well
// //   this.slug = slugify(this.name, { lower: true });//slugify create string before save and all to lower case
// //   next();//slug is not in shcema,so cannot save into DB ,need go to shcema add slug  field
// // });
// ////post middleware happeed after event
// // tourSchema.post('save', function(doc, next) {//one para is document,one para is next,after all previoius middleware completed
// //   console.log(doc);//no long has this keyword only finished document here
// //   next();
// // });
// // QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {//this is the current query
//   this.find({ secretTour: { $ne: true } });//if copy true id and postman still find it, because find is not findone
//   next();
// });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 8,Aggregation middileware ,change find to /^find/
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date],
//   secretTour: {
//     type: Boolean,
//     default: false
//   }

// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// //save is the hook
// // tourSchema.pre('save', function(next) {//because add next() function,so next is add in middleware para as well
// //   this.slug = slugify(this.name, { lower: true });//slugify create string before save and all to lower case
// //   next();//slug is not in shcema,so cannot save into DB ,need go to shcema add slug  field
// // });
// ////post middleware happeed after event
// // tourSchema.post('save', function(doc, next) {//one para is document,one para is next,after all previoius middleware completed
// //   console.log(doc);//no long has this keyword only finished document here
// //   next();
// // });
// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {//this is the current query,//commented to regular expression,
//   tourSchema.pre(/^find/, function(next) {//^find will match both find and findone,if copy true id and postman still find it, because find is not findone
//   this.find({ secretTour: { $ne: true } });//in aggregation the serectour true still show,and no good write code in controller,it need write everywhere.
//   this.start = Date.now();//get start time
//   next();
// });
// tourSchema.post(/^find/, function(docs, next) {//run after query,acces docs return from query
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);//deduct time difference to get how long to query 
//   // console.log(docs);
//   next();
// });
// // AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {//use aggregate hook to exlude the serectour true in schedma to prevetn write everywhere in controller
//   console.log(this)//this point to current aggregation
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });//unshift exclude the one secretTour=true
//   // console.log(this.pipeline());//this.pipeline() return a array
//   next();
// });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version 8,Aggregation middileware ,change find to /^find/
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true,
//     maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//     minlength: [10, 'A tour name must have more or equal then 10 characters']
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date],
//   secretTour: {
//     type: Boolean,
//     default: false
//   }

// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// //save is the hook
// // tourSchema.pre('save', function(next) {//because add next() function,so next is add in middleware para as well
// //   this.slug = slugify(this.name, { lower: true });//slugify create string before save and all to lower case
// //   next();//slug is not in shcema,so cannot save into DB ,need go to shcema add slug  field
// // });
// ////post middleware happeed after event
// // tourSchema.post('save', function(doc, next) {//one para is document,one para is next,after all previoius middleware completed
// //   console.log(doc);//no long has this keyword only finished document here
// //   next();
// // });
// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {//this is the current query,//commented to regular expression,
//   tourSchema.pre(/^find/, function(next) {//^find will match both find and findone,if copy true id and postman still find it, because find is not findone
//   this.find({ secretTour: { $ne: true } });//in aggregation the serectour true still show,and no good write code in controller,it need write everywhere.
//   this.start = Date.now();//get start time
//   next();
// });
// tourSchema.post(/^find/, function(docs, next) {//run after query,acces docs return from query
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);//deduct time difference to get how long to query 
//   // console.log(docs);
//   next();
// });
// // AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {//use aggregate hook to exlude the serectour true in schedma to prevetn write everywhere in controller
//   console.log(this)//this point to current aggregation
//   // this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });//unshift exclude the one secretTour=true
//   // console.log(this.pipeline());//this.pipeline() return a array
//   next();
// });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// ////////////////////////////////
// /////////////////////////////////version 9,schema validation
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true,
//     maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//     minlength: [10, 'A tour name must have more or equal then 10 characters']
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount: Number,
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date],
//   secretTour: {
//     type: Boolean,
//     default: false
//   }

// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()

// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {//this is the current query,//commented to regular expression,
//   tourSchema.pre(/^find/, function(next) {//^find will match both find and findone,if copy true id and postman still find it, because find is not findone
//   this.find({ secretTour: { $ne: true } });//in aggregation the serectour true still show,and no good write code in controller,it need write everywhere.
//   this.start = Date.now();//get start time
//   next();
// });
// tourSchema.post(/^find/, function(docs, next) {//run after query,acces docs return from query
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);//deduct time difference to get how long to query 
//   // console.log(docs);
//   next();
// });
// // AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {//use aggregate hook to exlude the serectour true in schedma to prevetn write everywhere in controller
//   console.log(this)//this point to current aggregation
//   // this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });//unshift exclude the one secretTour=true
//   // console.log(this.pipeline());//this.pipeline() return a array
//   next();
// });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// ////////////////////////////////
// /////////////////////////////////version 10, schema custom validator
// const mongoose = require('mongoose');
// //add following line for slugify
// const slugify = require('slugify');
// const tourSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'A tour must have name'],
//     unique: true,
//     maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//     minlength: [10, 'A tour name must have more or equal then 10 characters']
//   },
//   slug: String,
//   duration: {
//     type: Number,
//     required: [true, 'A tour must have a duration']
//   },
//   maxGroupSize: {
//     type: Number,
//     required: [true, 'A tour must have a group size']
//   },
//   difficulty: {
//     type: String,
//     required: [true, 'A tour must have a difficulty'],
//     enum: {
//       values: ['easy', 'medium', 'difficult'],
//       message: 'Difficulty is either: easy, medium, difficult'
//     }
//   },
//   ratingsAverage: {
//     type: Number,
//     default: 4.5,
//     min: [1, 'Rating must be above 1.0'],
//     max: [5, 'Rating must be below 5.0'],
//     set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//   },
//   ratingsQuantity: {
//     type: Number,
//     default: 0
//   },
//   price: {
//     type: Number,
//     default: 4.5,
//     required: [true, 'A tour must have price']
//   },
//   priceDiscount:  {
//     type: Number,
//     validate: {
//       validator: function(val) {
//         // this only points to current doc on NEW document creation
//         return val < this.price;
//       },
//       message: 'Discount price ({VALUE}) should be below regular price'
//     }
//   },
//   summary: {
//     type: String,
//     trim: true,
//     required: [true, 'A tour must have a description']
//   },
//   description: {
//     type: String,
//     trim: true
//   },
//   imageCover: {
//     type: String,
//     required: [true, 'A tour must have a cover image']
//   },
//   images: [String],
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//     select: false
//   },
//   startDates: [Date],
//   secretTour: {
//     type: Boolean,
//     default: false
//   }

// },
// {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true }
// });
// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });
// // DOCUMENT MIDDLEWARE: runs before .save() and .create()

// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {//this is the current query,//commented to regular expression,
//   tourSchema.pre(/^find/, function(next) {//^find will match both find and findone,if copy true id and postman still find it, because find is not findone
//   this.find({ secretTour: { $ne: true } });//in aggregation the serectour true still show,and no good write code in controller,it need write everywhere.
//   this.start = Date.now();//get start time
//   next();
// });
// tourSchema.post(/^find/, function(docs, next) {//run after query,acces docs return from query
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);//deduct time difference to get how long to query 
//   // console.log(docs);
//   next();
// });
// // AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {//use aggregate hook to exlude the serectour true in schedma to prevetn write everywhere in controller
//   console.log(this)//this point to current aggregation
//   // this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });//unshift exclude the one secretTour=true
//   // console.log(this.pipeline());//this.pipeline() return a array
//   next();
// });
// const Tour = mongoose.model('Tour', tourSchema);
// module.exports = Tour;
// ////////////////////////////////
// /////////////////////////////////version 10, schema custom validator,npm install validator
const mongoose = require('mongoose');
//add following line for slugify
const slugify = require('slugify');
const validator = require('validator');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [10, 'A tour name must have more or equal then 10 characters']
    //  validate: [validator.isAlpha, 'Tour name must only contain characters']
  },
  slug: String,
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium, difficult'
    }
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 4.5,
    required: [true, 'A tour must have price']
  },
  priceDiscount:  {
    type: Number,
    validate: {
      validator: function(val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: 'Discount price ({VALUE}) should be below regular price'
    }
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date],
  secretTour: {
    type: Boolean,
    default: false
  }

},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});
// DOCUMENT MIDDLEWARE: runs before .save() and .create()

// QUERY MIDDLEWARE
// tourSchema.pre('find', function(next) {//this is the current query,//commented to regular expression,
  tourSchema.pre(/^find/, function(next) {//^find will match both find and findone,if copy true id and postman still find it, because find is not findone
  this.find({ secretTour: { $ne: true } });//in aggregation the serectour true still show,and no good write code in controller,it need write everywhere.
  this.start = Date.now();//get start time
  next();
});
tourSchema.post(/^find/, function(docs, next) {//run after query,acces docs return from query
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);//deduct time difference to get how long to query 
  // console.log(docs);
  next();
});
// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function(next) {//use aggregate hook to exlude the serectour true in schedma to prevetn write everywhere in controller
  console.log(this)//this point to current aggregation
  // this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });//unshift exclude the one secretTour=true
  // console.log(this.pipeline());//this.pipeline() return a array
  next();
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
// /////////////////////////////////
// /////////////////////////////////version ?
// const mongoose = require('mongoose');
// const slugify = require('slugify');
// // const User = require('./userModel');
// // const validator = require('validator');

// const tourSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'A tour must have a name'],
//       unique: true,
//       trim: true,
//       maxlength: [40, 'A tour name must have less or equal then 40 characters'],
//       minlength: [10, 'A tour name must have more or equal then 10 characters']
//       // validate: [validator.isAlpha, 'Tour name must only contain characters']
//     },
//     slug: String,
//     duration: {
//       type: Number,
//       required: [true, 'A tour must have a duration']
//     },
//     maxGroupSize: {
//       type: Number,
//       required: [true, 'A tour must have a group size']
//     },
//     difficulty: {
//       type: String,
//       required: [true, 'A tour must have a difficulty'],
//       enum: {
//         values: ['easy', 'medium', 'difficult'],
//         message: 'Difficulty is either: easy, medium, difficult'
//       }
//     },
//     ratingsAverage: {
//       type: Number,
//       default: 4.5,
//       min: [1, 'Rating must be above 1.0'],
//       max: [5, 'Rating must be below 5.0'],
//       set: val => Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
//     },
//     ratingsQuantity: {
//       type: Number,
//       default: 0
//     },
//     price: {
//       type: Number,
//       required: [true, 'A tour must have a price']
//     },
//     priceDiscount: {
//       type: Number,
//       validate: {
//         validator: function(val) {
//           // this only points to current doc on NEW document creation
//           return val < this.price;
//         },
//         message: 'Discount price ({VALUE}) should be below regular price'
//       }
//     },
//     summary: {
//       type: String,
//       trim: true,
//       required: [true, 'A tour must have a description']
//     },
//     description: {
//       type: String,
//       trim: true
//     },
//     imageCover: {
//       type: String,
//       required: [true, 'A tour must have a cover image']
//     },
//     images: [String],
//     createdAt: {
//       type: Date,
//       default: Date.now(),
//       select: false
//     },
//     startDates: [Date],
//     secretTour: {
//       type: Boolean,
//       default: false
//     },
//     startLocation: {
//       // GeoJSON
//       type: {
//         type: String,
//         default: 'Point',
//         enum: ['Point']
//       },
//       coordinates: [Number],
//       address: String,
//       description: String
//     },
//     locations: [
//       {
//         type: {
//           type: String,
//           default: 'Point',
//           enum: ['Point']
//         },
//         coordinates: [Number],
//         address: String,
//         description: String,
//         day: Number
//       }
//     ],
//     guides: [
//       {
//         type: mongoose.Schema.ObjectId,
//         ref: 'User'
//       }
//     ]
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
//   }
// );

// // tourSchema.index({ price: 1 });
// tourSchema.index({ price: 1, ratingsAverage: -1 });
// tourSchema.index({ slug: 1 });
// tourSchema.index({ startLocation: '2dsphere' });

// tourSchema.virtual('durationWeeks').get(function() {
//   return this.duration / 7;
// });

// // Virtual populate
// tourSchema.virtual('reviews', {
//   ref: 'Review',
//   foreignField: 'tour',
//   localField: '_id'
// });

// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// // tourSchema.pre('save', async function(next) {
// //   const guidesPromises = this.guides.map(async id => await User.findById(id));
// //   this.guides = await Promise.all(guidesPromises);
// //   next();
// // });

// // tourSchema.pre('save', function(next) {
// //   console.log('Will save document...');
// //   next();
// // });

// // tourSchema.post('save', function(doc, next) {
// //   console.log(doc);
// //   next();
// // });

// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {
// tourSchema.pre(/^find/, function(next) {
//   this.find({ secretTour: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// tourSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangedAt'
//   });

//   next();
// });

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// // tourSchema.pre('aggregate', function(next) {
// //   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

// //   console.log(this.pipeline());
// //   next();
// // });

// const Tour = mongoose.model('Tour', tourSchema);

// module.exports = Tour;
