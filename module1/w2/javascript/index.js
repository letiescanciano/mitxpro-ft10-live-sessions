function checkAge(age) {
  let result = "";
  console.log("Age", age);
  if (age >= 18) {
    result = "allowed";
  } else {
    result = "not allowed";
  }

  console.log("Result", result);
  return result;
}
