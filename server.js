const express = require('express');

//instantiating server
const server = express();

//global middleware:
server.use(express.json()); // built-in mw
// server.use(logger);


server.get('/', (req, res) => {
    res.send(`<h2>Let's do this authy business!</h2>`)
  });


//   router.post('/projects', async (req, res) => {
//     try {
//         const project= await Projects.addProject(req.body)
//         res.status(201).json(project);
//     }
//     catch (error){
//         console.log(error);
//         res.status(500).json({
//           message: 'Error creating a new project suckas',
//         });
  
//     }
//   });

//   router.post('/actions', async (req, res) => {
//     try {
//         const action= await Projects.addAction(req.body)
//         res.status(201).json(action);
//     }
//     catch (error){
//         console.log(error);
//         res.status(500).json({
//           message: 'Error creating a new action suckas',
//         });

//     }
// });

// router.get('/projects', async (req, res) => {
//     try {
      
//       const projects = await Projects.findProjects();
     
//       res.status(200).json(projects);
//     } catch (error) {
      
//       res.status(500).json({
//         message: 'Error retrieving the dang projects',
//       });
//     }
//   });


//   //routing and API:
  
// //   const cohortRouter = require('./data/cohortRouter.js');
// //   const studentRouter = require('./data/studentRouter.js');
// //   server.use('/api/cohorts', cohortRouter);
// //   server.use('/api/students', studentRouter);
  
module.exports = server;