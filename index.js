const fileSystem=require('fs');
const { faker } = require('@faker-js/faker');
let names
for(i=0;i<=1000;i++){
    const randomNames = faker.name.findName(); 
    names=names+randomNames
}
fileSystem.writeFileSync('names.txt',names)
console.log('El proceso culminó exitósamente...');