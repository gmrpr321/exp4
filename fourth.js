`use strict`;
const rw = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myFunc = () => {
  rw.question("Enter a number  :  ", (question) => {
    question = question.replace(/([02468]{2})/g, (match) => {
      return match.replace(/\d{1}/, "$&-");
    });
    console.log(question);
    rw.close();
  });
};
myFunc();
