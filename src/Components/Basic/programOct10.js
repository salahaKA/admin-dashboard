// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");


// const n=5;
// for (let i=0; i<n; i++){
//     for(let j=0; j<=i; j++){
//         console.log("*")
//     }
//     console.log("\n")
// }

// const n=5;
// for (let i=0; i<n; i++){
//     let row= "";
//     for(let j=0; j<=i; j++){
//         row+= "*"
//     }
//     console.log(row)
// }

// const n= 5
// for(let i=0; i<n;i++){
//     let row= ""
//     for(j=0; j<n-i; j++){
//         row+= "*"
//     }
//     console.log(row)
// }


// const n=5
// for(let i=0; i<n; i++){
//     let row=""
//     for( let j=1; j<=n-i; j++){
//         row+= " "
//     }
//     for(let k=1; k<=i; k++){
//         row+= "*"
//     }
//     console.log(row)
// }

// const n = 3;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += "*";
//     }
//     console.log(row);
// }


// flat map - Flatten all eployee into single array
// flat map - Flatten all eployee into single array
const departments = [
  {
    name: "Engineering",
    employees: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  },
  {
    name: "Marketing",
    employees: [
      { id: 3, name: "Charlie" },
      { id: 4, name: "Diana" }
    ]
  }
];

const allEmployees = departments.flatMap(dept => dept.employees);

console.log(allEmployees);
