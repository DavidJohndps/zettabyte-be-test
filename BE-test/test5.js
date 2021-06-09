/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];

function result(words) {
  // Your Code Here
  var word = words.concat().sort(),
    first = word[0],
    last = word[word.length - 1],
    max = first.length,
    i = 0;
  while (i < max && first.charAt(i) === last.charAt(i)) i++
  return first.substring(0,i)
}

console.log(result(words));
