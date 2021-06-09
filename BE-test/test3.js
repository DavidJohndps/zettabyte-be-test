/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "budi" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "adi" }] },
    ],
  },
];

function result(data) {
  
  let stringfiedObj = JSON.stringify(data, (key, value) => {
    return ["", null].includes(value) ||
      (typeof value === "object" &&
        (value.length === 0 || Object.keys(value).length === 0))
      ? undefined
      : value;
  });
  let resObj = JSON.parse(stringfiedObj);
  // let isEmptyPropsPresent = ["{}", "[]", '""', "null"].some((key) =>
  //   stringfiedObj.includes(key)
  // );
  // if (isEmptyPropsPresent) {
  //   return getPurgedObj(resObj);
  // }
  return resObj
  // return resObj;

  // Your Code Here
  // data.forEach(session => {
  // console.log(session)
  // for(prop in session) {
  // console.log(prop.value)
  // }
  // if (session === null) delete session;
  // session.classes.forEach(val => {
  // if(val === null) delete val
  // })
  // })
}

console.log(result(data));
