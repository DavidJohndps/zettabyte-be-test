/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  // let newData = [...new Set(data)]
  let newData = []
  data.forEach(el => {
    let index = newData.indexOf(el)
    // console.log(index)
    index == -1 ? newData.push(el) : null
  })
  newData.sort((first, second) => {return first-second})
  // for (i in newData) {
  //   let temp = 0
  //   if(newData[i] > newData[i+1]) {
  //     temp = newData[i]
  //     newData[i] = newData[i+1]
  //     newData[i+1] = temp
  //   }
  // }
  return newData
}

console.log(result(data));
