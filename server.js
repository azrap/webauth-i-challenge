const express = require('express');
const server = express();
server.use(express.json()); // built-in mw
// server.use(logger);
const bcrypt=require('bcrypt');
const Users=require('./data/user-model.js');
const restricted = require('./data/restricted.js')



server.get('/', (req, res) => {
    res.send(`<h2>Let's do this authy business!</h2>`)
  });


  server.post('/api/register', async (req, res) => {
    try {
        userInfo=req.body
        console.log(userInfo.username)
        userInfo.password = await bcrypt.hashSync(userInfo.password, 10)
        const user = await Users.addUser(userInfo)
        res.status(201).json(user);
    }

    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new user suckas',
        });
  
    }
  });

  server.post('/api/login', async (req, res) => {

    let {username, password} = req.body;
    console.log(username)
    console.log(password)

    try {
        const user = await Users.findBy( { username })
        console.log(user);
        console.log();

        if (user && bcrypt.compareSync(password, user[0].password)){
            res.status(200).json({message:`Welcome user!`});

        }
        else {
            res.status(401).json({message: 'Invalid Credentials'})
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({
          message: 'Error creating a new login suckas',
        });

    }
});

server.get('/api/users', restricted, async (req, res) => {
    try {
      
     const users= await Users.findUsers()
    
      res.status(200).json(users);
    } catch (error) {
      
      res.status(500).json({
        message: 'Error retrieving the dang users',
      });
    }
  });


//   //routing and API:
  
// //   const cohortRouter = require('./data/cohortRouter.js');
// //   const studentRouter = require('./data/studentRouter.js');
// //   server.use('/api/cohorts', cohortRouter);
// //   server.use('/api/students', studentRouter);
  
module.exports = server;