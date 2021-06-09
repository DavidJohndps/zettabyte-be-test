/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  let missing
  numbers.sort((first, second) => {return first-second})
  for (let index = 0; index < numbers.length; index++) {
    if(numbers.indexOf(index+1) == -1) {
      missing = index+1
      break;
    } 
  }
  return missing
  // for (i in numbers) {
  //   numbers[i] > max ? max = numbers[i] :  numbers[i] < min ? min = numbers[i] : null
  //   console.log(min, max)
  // }
  // numbers[i] > numbers[i+1] ? console.log(max=numbers[i]): numbers[i+1] < min ? console.log(min=numbers[i+1]) : null
  // return ()
}

console.log(result(numbers));
