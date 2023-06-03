let nym = prompt()
let arr = [4,16,19,22,11,144,967,19124]
let even =[]
let odd =[]

arr.filter(item =>{
    if(item % 2 === 0){
    return item      
    }else{
        return arr
    }
})
let guestname = ['jafar','dilik','emin','azizjon']
let name =guestname.reduce((man,item) => {
    if(man.lenght >= item.lenght){
        return man
    } else{
        return item
    }
})
console.log(name);