var express = require('express');
var router = express.Router();
const user= require("./users");
router.use(express.urlencoded({extended: true}));
const data = user.name;

/* GET home page. */
router.post("/",async(req,res)=>{
  const userData = new user(req.body)
  await userData.save();
  res.render('submit')
 
 
 
 
 
})

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/delete',  function(req, res, next) {
  res.render('delete')
});
router.post('/delete', async function(req, res, next) {
  const userNameToDelete = req.body.name;

  try {
    // Use mongoose to delete data based on the provided name
    const deletedUser = await user.findOneAndDelete({ name: userNameToDelete });

    if (deletedUser) {
      res.send(`User ${userNameToDelete} deleted successfully`);
    } else {
      res.send(`User with name ${userNameToDelete} not found`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
  
  });
  
 




router.get("/allusers",async function(req,res){
 

  try {
    // Fetch all users from the database
    const userss = await user.find();
    
    // Display users in HTML
    let html = '<h1>User List</h1><ul>';
    userss.forEach(user => {
     
     
      
      
      html += `<li>${user.name} - ${user.roll}</li>`;
    });
    html += '</ul>';

    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})


router.get("/allusersdata",async function(req,res){
  const usersss = await user.find();
  
  res.render('user', { usersss });
 

  
    // Fetch all users from the database
    
    
    // Display users in HTML
   
    
     
    
   

    
  
})

module.exports = router;
