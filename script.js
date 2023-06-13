let arre = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let yournumber = arre.filter(item => {
    if(typeof number.lenght >= 5){
        console.log('good');
    }else{
        console.log('bad');
    }
})

let user = {
    name: "Aziz",
    surname: "Xotamov",
    age: 15,
    isMarried: false, 
    passport: { 
        serries: "AC",
        number: 214124124,
        start_date: "2024-02-02",
        exp_date: "2034-02-02",
        visa: ["russia", "ukrain", "usa", "japan"]  
    },
    country: "Uzb",
    wives: ["dildora", "malika", "natasha", "gulnoz", "pokiza"],  
    children: [ 
        {
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
        {
            name: "aziza",
            date: "2034-02-02"
        },
    ]
}

let car = {
    model: 'Mersades-benz', 
    marca: 'G 500',
    coutry: 'dubai',
    production:'Italiya',
    sale:'350,000$',
    while:'michlen',
    mileage: 13400,
    chaire:'8',
    car:'beatufule',
    date_of_come:2022,
}

let all = Object.assign({},user, {car})
let keys = Object.keys(all)
let values = Object.values(all)
let arrey = [].concat(keys,values) 

let types ={
    number: [],
    string: [],
    boolean: [],
    object: []
}


arrey.filter(item =>{
    if(typeof item === 'number'){
        types.number.push(item)
    }
    if(typeof item === 'string'){
        types.string.push(item)
    }
    if(typeof item === 'object'){
        types.object.push(item)
    }
    if(typeof item === 'boolean'){
        types.boolean.push(item)
    }
})
console.log(types);
console.log(arrey);
let arr = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut au`tem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

let a_ = {
  count: 0,
  arr: [],
};
let b_ = {
  count: 0,
  arr: [],
};

arr.filter(item => {
if(item.completed === true){
    b_.arr.push(item)
    b_.count += 1;
}else{
    a_.arr.push(item);
    a_.count += 1;
  }
})

console.log(a_);
console.log(b_);
