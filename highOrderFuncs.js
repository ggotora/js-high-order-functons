const companies = [
    {name: "Company One", category: "Finance", start : 1981, end: 2003},
    {name: "Company Two", category: "Retail", start : 1992, end: 2008},
    {name: "Company Three", category: "Auto", start : 1999, end: 2008},
    {name: "Company Four", category: "Retail", start : 1989, end: 2010},
    {name: "Company Five", category: "Technology", start : 2009, end: 2014},
    {name: "Company Six", category: "Finance", start : 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start : 1986, end: 1996},
    {name: "Company Eight", category: "Technologt", start : 2011, end: 2016},
    {name: "Company Nine", category: "Retails", start : 1981, end: 1989},
];

 const ages = [33, 12, 20, 16, 5, 54,21, 44, 61, 13, 15, 45, 25, 64, 32 ];
// // for (let i = 0; i < companies.length; i++){
// //     console.log(companies[i]);
// // }
// //forEach
// companies.forEach(function(company, index, companies){
//     //takes up to these three parameters
//     console.log(company)
//     console.log(company.name);
// })
//filter
//- filters an array

// let canDrink = [];
// for (let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);
// console.log('--------------##---------------')

// let cannotDrink = ages.filter((num) =>{
//     if (num < 21){
//         return true;
//     }

    
// })
// console.log(cannotDrink);
// const cannotDrink = ages.filter(age => age < 21 );
// console.log(cannotDrink);
// //clean code above man!! 

//Filter Retails Companies 
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// })
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log('Retail Companies',retailCompanies);

//Get 80s companies

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightiesCompanies);

//get companies that lasted 10 years

// const lastedTen = companies.filter(company => (company.end - company.start) > 10)
// console.log('only ', lastedTen.length,'Companies lasted 10+ and these are', lastedTen.forEach(company => console.log(company.name)));

//map
// makes new array from current array

// const companyNames = companies.map(company => company.name);
// //baiscally make an array of company names 
// console.log(companyNames);

// const testMap = companies.map(company => `${company.name} started ${company.start} and ended ${company.end}`)
// console.log(testMap);

// // square numbers
// const agesSquared = ages.map(age => Math.sqrt(age));
// console.log(agesSquared);
// //Doubles numbers 
// const doubleAges = ages.map(age => age*2);
// console.log(doubleAges);

// // two or more map
// const doubleThenSquare = ages
// .map(age => age * 2)
// .map(age => Math.sqrt(age));

// console.log(doubleThenSquare);

// // sort 

// const sortedCompanies = companies.sort((c1, c2) =>{
//     if(c1.start > c2.start){
//         return 1;
//     }else {
//         return -1;
//     }
// })
//short code 
// const sortedCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1);

// console.log(sortedCompanies)

//sort ages 
// const sortAges = ages.sort((a, b) => a > b ? 1 : -1);
// console.log(sortAges);

// reduce
let ageSum = 0;
for (let i = 0; i < ages.length; i++){
    ageSum += ages[i];
}
console.log(ageSum);
const agesTotaled = ages.reduce((total, age) => total + age,0)

// get total years for companies 
const totalYears = companies.reduce((total, company)=>{
    return total + (company.end - company.start);
},0);
console.log(totalYears);

//combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b)=> a- b)
    .reduce((a, b) => a + b,0 );
    console.log('Combined', combined);