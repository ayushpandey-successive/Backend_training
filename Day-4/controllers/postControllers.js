const { faker } = require('@faker-js/faker');

let posts = [];
// Seed data (example: posts)
const generateMockData = () => {
  const numPosts = 10;
 
  for (let i = 1; i <= numPosts; i++) {
    posts.push({
      id: Math.random(),
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
    });
  }
  return posts;
};

const createPost= (req, res) => {
    const post = generateMockData();
    console.log(posts.length)
    posts=[...posts,...post]
    res.json(posts);
  }

const getPost=(req,res)=>{
    res.json(posts);
}

const manuallyAddPost= (req, res) => {
    const { title, body } = req.body;
    // Simulate adding to database (not actually persisted)
    const newPost = {
      id: Math.random(),
      title,
      body,
   
    };
    posts=[...posts,newPost]
    res.json(newPost);
  }

module.exports= {createPost,getPost,manuallyAddPost}