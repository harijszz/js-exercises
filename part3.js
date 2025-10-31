const person = {firstName:"Harijs", age:17, isStudent:true, course:"PT2024"};
person.age = 16;
person.isStudent = false;
console.log(person);

if (person.age >= 18){
    console.log("Tu esi pilngadīgs!")
}else {
    console.log("Tu esi nepilngadīgs!")
};
if (person.isStudent = true){
    console.log("Students")
}else {
    console.log("Nav Students")
};

function name(){
   for (let i = 1; i <= 10; i++) {
  console.log(i)
}
}
name();