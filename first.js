`use strict`;
const rw = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const myfunc = () => {
  rw.question("Enter a sentence   :  ", (question) => {
    question += " ";
    rw.question("Enter a word  :  ", (word) => {
      const regexp = RegExp(
        word + "\\s|" + "\\s" + word + "|\\s" + word + "\\s",
        "g"
      );
      console.log(question, word, "   ", regexp);
      if (question.match(regexp)) {
        console.log(question.match(regexp).length);
      }
      console.log("ouch");
      rw.close();
    });
  });
};
myfunc();
