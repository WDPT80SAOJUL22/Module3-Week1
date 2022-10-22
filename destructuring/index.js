// Desestruturação é extração de dados de Arrays e Objetos

// Objects

let person = {
  name: 'Gabriel',
  age: 31,
  favoriteMusic: 'Bailla Conmigo - Dominó',
  country: 'Spain',
}

// ES5

// let name = person.name
// let age = person.age
// let favoriteMusic = person.favoriteMusic
// let country = person.country ? person.country : 'Brazil'

// ES6

// let { name, age, favoriteMusic } = person

// console.log(name, age, favoriteMusic)

// Default Values:

// let { name, age, favoriteMusic, country = 'Brazil' } = person

// console.log(country)

// Variaveis com nomes diferentes:

// let { name: fullName, age, favoriteMusic } = person

// console.log(fullName)

let person2 = {
  name: 'Gabriel',
  age: 31,
  favoriteMusic: 'Bailla Conmigo - Dominó',
  address: {
    street: 'Rua Iron',
    number: 123,
    city: 'Taubaté',
  },
}

// let {
//   name,
//   favoriteMusic,
//   age,
//   address: { street, number, city },
// } = person2

// console.log(street, number, city)

let newPerson = { ...person2 }

// console.log(newPerson)

// Array

const campus = ['madrid', 'barcelona', 'sao paulo', 'urubici']

let [, secondCampus, , fourthCampus, fifthCampus = 'paris'] = campus

console.log(secondCampus, fourthCampus, fifthCampus)

// nested arrays

// const books = [
//   ['Harry Potter', 'JK Rowling'],
//   ['Viagem Solitária', 'João Nery'],
//   ['Senhor Aneis', 'Tolkien'],
//   ['O Livro das semelhanças', 'Ana Martins Marques'],
//   ['Ficando longe do fato de já estar meio que longe de tudo', 'David Foster'],
// ]

// const [, [secondBookName], , [, fourthBookAuthorName]] = books

// console.log(secondBookName, fourthBookAuthorName)

// Spread operator ...

const reptiles = ['snake', 'lizard', 'alligator']
const mammals = ['puppy', 'kitten', 'bunny']
// ES5

// const animals = reptiles.concat(mammals)

// ES6 =

const animals = [...reptiles, ...mammals]

// console.log(animals)
// copy arrays

const animals2 = [...animals]

// console.log(animals2) //<--- copia
// animals[2] = 'rabbit'
// console.log(animals) // <--- Altero o original
// console.log(animals2) // <-- cópia pós alteração do original

// parametros de fuções

const sum = (...numbers) => {
  const total = numbers.reduce((acc, number) => acc + number)

  console.log(total)
}

sum(1, 2, 3, 4, 5, 6)

const props = {
  login: 'gsicuto',
  email: 'gsicuto@ironhack.com',
}

const fakeFunction = ({ login, email }) => {
  console.log(login, email)
}

const customer = {
  name: {
    firstName: 'ivan',
    lastName: 'zoro',
  },
  age: 32,
  preferences: [
    {
      tech: ['cameras', 'smartwatches'],
      books: ['science fiction', 'coding'],
    },
  ],
}

const {
  name: { firstName, lastName },
  age,
  preferences: [
    {
      tech: [firstTech],
      books,
    },
  ],
} = customer

console.log(firstTech)
console.log(customer.preferences.tech[0])
