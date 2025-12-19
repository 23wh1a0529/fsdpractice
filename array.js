const country = ['India','russia','china','usa']
const[c1,c2] = country //indexing the array
console.log(c2)

//spread operator 
const newCountry = 'korea'
const sCountry = [...country,newCountry]
console.log(sCountry);
