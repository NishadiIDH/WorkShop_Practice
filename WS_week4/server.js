var express = require("express")
var app = express()
var port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
  });
const Project = mongoose.model('Project', ProjectSchema);

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})