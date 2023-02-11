`use strict`;
rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myFunc = () => {
  rl.question(
    "Enter a string to check if it starts and ends with vowel   :   ",
    (question) => {
      const result = question.match(/^[aeiouAEIOU].*[aeiouAEIOU]$/);
      if (result) console.log("It begins and ends with a vowel");
      else console.log("It doesnt begin and end with vowel");
      rl.close();
    }
  );
};
myFunc();
