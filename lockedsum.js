//Написать ф-ции, при вызове которой:
// sum(1) --> 1
// sum(1)(2)(3) --> 1 3 6
//

const sum = number => {
  let result = number

  console.log(result)

  return function func() {
    const args = arguments
    result = result + args[0]
    console.log(result)
    return func
  }
}

sum(1)
sum(1)(2)(3)
