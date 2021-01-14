import file from './books.json'

//console.log(file)

let books = file.store.book

for(let bk of books){

    console.log(`
    
    
    Author is "${bk.author}" and book name is "${bk.title}"`)

}