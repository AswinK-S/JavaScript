const prompt = require("prompt-sync")()


const writtenScore = parseInt(prompt("Enter your written text exam: "))
const labScore = parseInt(prompt("Enter your written text exam: "))
const assignmentScore = parseInt(prompt("Enter your written text exam: "))


let grade = (writtenScore*70)/100 + (labScore*20)/100 + (assignmentScore*10)/100


console.log(`grade = ${grade}`)
