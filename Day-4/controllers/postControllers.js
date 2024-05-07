const { faker } = require('@faker-js/faker');

let users = [];
// Seed data (example: posts)
const generateMockData = () => {
  const numPosts = 10;
    
  for (let i = 1; i <= numPosts; i++) {
    users.push({
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    });
  }
  return users;
};

const createUser= (req, res) => {
    const user = generateMockData();
    
    users=[...users,...user]
    res.json(users);
  }

const getUser=(req,res)=>{
    res.json(users);
}
const protectedroute=(req, res) => {
  res.json({ message: 'You have accessed a protected route' });
}


module.exports= {createUser,getUser,protectedroute}