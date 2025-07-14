//A CLI tool that tells the no of words in the file taken as input from teminal. 

const fs=require("fs")
const { program } = require('commander');
program
  .option('--first')
  .option('-s, --separator <char>')
  .argument('<string>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
const data=program.args[0].split(options.separator, limit)
const info=fs.readFileSync(data[0],'utf8')
console.log("The given file has "+info.split(" ").length+"words.")
