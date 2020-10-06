//Если элемент делится на 3 - вывести 'Fizz'
//Если делится на 5 - вывести 'Buzz'
//Если делится на 3 и на 5 - вывести  'FizzBuzz'

//Топорный вариант
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

console.log('--------------------------------------------------------')

//Через тернарный оператор
for (let i = 1; i <= 100; i++) {
  console.log(
    i % 3 === 0 ? (i % 5 === 0 ? 'FizzBuzz' : 'Fizz') : i % 5 === 0 ? 'Buzz' : i
  )
}

console.log('--------------------------------------------------------')

//Функциональный стиль
const gen = (n, w) => num => (num % n === 0 ? w : '')

const fizz = gen(3, 'Fizz')
const buzz = gen(5, 'Buzz')

;[...Array(100).keys()]
  .map(i => i + 1)
  .forEach(el => {
    console.log(fizz(el) + buzz(el) || el)
  })

debugger
