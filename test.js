//@author P.I.A. Cumaranathunga
//Topic: How to call python script from javascript and pass data between them

// Adding reference to the spawn
const spawn = require("child_process").spawn;

// Data to be send
let d = {"name":"yourName", "age":20};

// Defining the python process as a spawn object
// First argument is the directory to the python virtual env
// Second argument is a collection with reference to the python file and the argument data
const pythonProcess = spawn('./.env/Scripts/python', ['./test.py', JSON.stringify(d)]);

// This is the event listener whenever the python sends stdout data this method will gets trigged
pythonProcess.stdout.on('data', data => {
    console.log(data.toString());
});

/* use JSON.parse(strVal) -> convert string to object
JSON.stringify(obj) -> convert obj to json string */