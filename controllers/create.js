require ('../config/db.controller')
const Post = require ('../model/Post')

Post.create({
    week: 'week number',
    content: 'ffffotw  post'
},
(err, createdPost) => {
    if(err) {
        console.log(err);
    } else{
        console.log(createdPost)
    }
}
)