require('./config/database');
projectsRouter = require('./Routes/projectRouter')

const PORT = 5000;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);


app.listen(PORT, () => {
    try{
        console.log(`Server is listening on port ${PORT}!`);
    } catch(error){
        console.log(error)
    }
})