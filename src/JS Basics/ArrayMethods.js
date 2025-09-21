// // // 1. forEach - looping/iterating
// // const users = ["Alice", "Bob", "Charlie"]
// // users.forEach(user=> console.log(user))


// // // 2. Transforming map()
// // const nums = [1, 2, 3];
// // const double = nums.map(n=> n*2)
// // console.log(double)

// // // 3. filter() Filtering
// // const ages = [10, 18, 13, 20, 15, 30, 40]
// // const adults= ages.filter(age=> age>= 18)
// // console.log(adults)

// // // find()  Finding
// // const users = [{id: 1}, {id: 2}, {id: 3}, {id:2}]
// // const user = users.find(u=> u.id==2)
// // console.log(user)


// // // some() Checking
// // const scores = [45, 60, 75];
// // console.log(scores.some(s => s > 70)); // match any one
// // console.log(scores.every(s=> s>70)); // match all

// // // // sort() Sorting
// // // Sorting numbers
// // const nos = [3, 1, 4, 2]
// // console.log(nos.sort())   // default
// // console.log(nos.sort((a,b)=> a-b)) // ascending
// // console.log(nos.sort((a,b)=> b-a)) // descending

// // // Sorting alphabets
// // const fruits = ['banana', 'apple', 'cherry'];
// // console.log(fruits.sort()) // Ascending A-Z
// // console.log(fruits.sort().reverse()) // Descending Z-A


// // // Sorting Table/List Data (Objects)
// // const users= [
// //     { name: 'Aisha', age: 25 },
// //   { name: 'Rahul', age: 22 },
// //   { name: 'Zara', age: 30 }

// // ]
// // console.log(users.sort((a,b)=> a.age - b.age))  // sort by age 
// // console.log(users.sort((a,b)=>  b.age - a.age))  // sort by age asc
// // console.log(users.sort((a, b) => a.name.localeCompare(b.name))); // sort byname  asc
// // console.log(users.sort((a, b) => a.name.localeCompare(b.name))); // sort by name  asc
// // console.log(users.sort((a, b) => b.name.localeCompare(a.name)));// sort by name desc

// // // Sort by Case-Insensitive and sensitivesoting
// // const names = ['alice', 'Bob', 'charlie'];
// // console.log(names.sort((a, b) => a.localeCompare(b))); // sensitive
// // console.log([...names].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))); // insensitive



// // // // reduce() - Reducing - used to accumulate value
// // const nums= [1, 2, 3, 4]
// // const sum = nums.reduce((acc, cur)=> acc+cur, 0)
// // console.log("Sum is:",sum)
// // // Flatten Array
// // const nested = [[1, 2], [3, 4], [5]];
// // const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
// // console.log(flat); // Output: [1, 2, 3, 4, 5]

// // Calculate total from an array of objects
// const employees = [
//   { name: 'Aisha', salary: 50000 },
//   { name: 'Rahul', salary: 60000 },
//   { name: 'Zara', salary: 55000 }
// ];

// const totalSalary = employees.reduce((acc, emp)=> acc+ emp.salary, 0)
// console.log(totalSalary)

// //  Group Data by Categor
// const users = [
//   { name: 'Aisha', dept: 'HR' },
//   { name: 'Rahul', dept: 'Engineering' },
//   { name: 'Zara', dept: 'HR' },
//   { name: 'Dev', dept: 'Engineering' }
// ];

// const groupedByDept = users.reduce((acc, user) => {
//   acc[user.dept] = acc[user.dept] || []; // If the dept key doesn't exist, create an empty array
//   acc[user.dept].push(user); // Push the current user into the correct dept array
//   return acc; // Return the updated accumulator
// }, {});

// console.log(groupedByDept);
// /*
// {
//   HR: [{ name: 'Aisha', dept: 'HR' }, { name: 'Zara', dept: 'HR' }],
//   Engineering: [{ name: 'Rahul', dept: 'Engineering' }, { name: 'Dev', dept: 'Engineering' }]
// }
// */



// // // flat()  - Flatten nested array
// // const arr = [1, [2, 3], [4, [5]]];
// // // console.log(arr.flat(1)); // [1, [2, 3], [4, 5]]
// // console.log(arr.flat(2)); // [1, 2, 3, 4, 5]


// // // // slice() splice()
// // const arr = [10, 20, 30, 40];
// // console.log(arr.slice(1, 3)); // [20, 30]

// // const arr = [10, 20, 30];
// // arr.splice(1, 1, 25); 
// // console.log(arr); // [10, 25, 30]


// // // Objects in Array
// // const students = [
// //   { name: "Alice", marks: 85 },
// //   { name: "Bob", marks: 45 },
// //   { name: "Charlie", marks: 65 }
// // ];

// // const passed= students.filter(s=> s.marks >= 50)
// // const names= students.map((s)=> sname)
// // const topper= students.reduce((a,b)=> a.marks> b.marks? a:b )
