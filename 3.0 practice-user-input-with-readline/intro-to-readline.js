//import the readline module into the file
const readline = require("readline");

//create an interface where we can talk to the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});

    //ask the user question
    rl.question("What's up, doc? ", answer => {
        //print their response
        console.log("you responded: " + answer);
        //close the interface
        rl.close();
    });
