// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotes_db");
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJScopy
app.set('view engine', 'ejs');

// define Schema variable
var Schema = mongoose.Schema;
// define Post Schema
var PostSchema = new mongoose.Schema({
  name: {type: String, require: true, minlength:2,},
  content: {type: String, required: true, minlength: 2 }, 
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: {type: String, required: true, minlength:1},
 content: {type: String, required: true, minlength:1,}
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
  Post.find({})
    .populate("comments")
    .exec(function(err, posts){
      res.render("index", {posts: posts})
    })
})


app.post("/addPost", function(req,res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      console.log("Post did not pass");
      res.render("index", {errors:post.errors})
    }else{
      console.log(req.body + " SUCCESS")
      res.redirect("/")
    }
  })
})


// route for getting a particular post and comments
// app.get('/posts/:id', function (req, res){
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });
// route for creating one comment with the parent post id
app.post('/posts/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); } 
                       else { res.redirect('/'); }
                 });
         });
   });
 });

 app.listen(8000, function() {
  console.log("listening on port 8000");
});