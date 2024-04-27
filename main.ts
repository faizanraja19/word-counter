import inquirer from "inquirer";

interface UserInput{
    paragraph:string
}

let userInput:UserInput = await inquirer.prompt({
    name:"paragraph",
    type:"input",
    message:"enter your paragraph message"
})
let parInput =userInput.paragraph


// for counting letters
let letterwithoutspace = parInput.replace(/\s/g,"")
let lettercount = letterwithoutspace.length

//for counting words
let wordArray = parInput.split(" ")
let wordcount = wordArray.length
console.log(`In this Paragraph you have ${lettercount} letters and ${wordcount} words`)
