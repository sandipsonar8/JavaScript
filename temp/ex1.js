// // const Add={
// //     stree: '1234567890',
// //     city: 'New York',
// //     zipCode: 0,
// // };

// // function  getAdd(Add) {
// //     for (const key in Add) {
// //         console.log(key, Add[key]);
// //     }
// // }

// // let address=createAdd('a','b','c');
// // console.log(address);

// //Factory Fun
// // function createAdd(street,city,zip){
// //     return{
// //         street,
// //         city,
// //         zip
// //     };
// // }

// //Constructor fun
// // function Address(street,city,zip){
// //     this.street = street;
// //     this.city = city;
// //     this.zip=zip;
// // }

// // let add1=new Address(123,"NY",1001);
// // let add2=new Address(123,"NY",1001);

// // function areSame(add1,add2){
// //     return add1.street === add2.street && 
// //            add1.city === add2.city && 
// //            add1.zip === add2.zip;
// // }
// // console.log(areSame(add1,add2));

// // function areEqual(add1,add2){
// //     return add1===add2;
// // }
// // console.log(areEqual(add1,add2));


// // let post={
// //     title: "Hello world!",
// //     body: 'This is a test',
// //     author:'sandip',
// //     views:10000,
// //     comments:[
// //         {user:"Alice",text:"Great post!"},
// //         {user:"Bob", text:"Bad post..."},
// //         {user:"Charlie",text:"Okay"}
// //     ],
// //     isLive: true
// // };

// // let post =new Post('a','b','c');
// // console.log(post);

// // function Post(title,body,author) {
// //     this.title=title;
// //     this.body=body;
// //     this.author=author;
// //     this.views=0;
// //     this.comments=[];
// //     this.isLive = false;
// // }






// // console.log('Hello This JavaScript File.....');
// // let arr=[1,2,3,4,5,6,7,'hi','12'];
// // console.log(arr);
// // let a=10;
// // let b=100;
// // console.log(a**b);
// // console.log(a*a);



// //Factory Function
// function createCircle (radius) {
//     return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }

// //Constructor Function
// //Pascal Notation: No_Details
// const Circle={
//     radius:5,
//     draw: function () {
//         console.log("Drawing");
//     }
// };

// const c2={...  Circle};

// //Object.assign({},Circle);

// // for (const key in c1) {
// //     c2[key]=c1[key];
        
// //     }


// //const c=new Circle(1);






