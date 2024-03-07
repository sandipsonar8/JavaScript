// const no=[3,1,5];
// //End
// no.push(12);
// //star
// no.unshift(56);
// //middel
// no.splice(1,0,'a','b','c');
// console.log(no);

// //indexofno
// console.log(no.indexOf('b'));
// console.log(no.indexOf(222));

// //find element
// console.log(no.includes(1,7));



const courses=[
    {id:1,name:"a"},
    {id:2,name:"b"}
];

// const course=courses.findIndex(function (course){ //find...
//     return course.name==='a'}
// );

const course=courses.findIndex(function (course){ //find...
    return course.name==='a'}
);
console.log(course);