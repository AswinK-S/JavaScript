var library = [
    {
        title: 'Bill Gates' ,
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author:'Steve Jobs' ,
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
 ];
 
 
 library.forEach((x) => {
    x.readingStatus ? console.log(`Already read ${x.title} by ${x.author}.`) : console.log(`You still need to read ${x.title} by ${x.author}.`)
 })
 