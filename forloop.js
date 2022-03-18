// 6. for loop
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

// Array API 
// forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// map : 반환값을 배열에 담아 반환한다.
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)

  //---  문제풀이
// 1. 모든 이름을 대문자로 바꾸어 출력하시오

let uName = names.map((item)=>{
    return item.toUpperCase();
});
console.log(uName);

// 2. 성을 제외한 이름만 출력
let onlyName = names.map((item)=>{
    return item.split(' ')[0];
});
console.log(onlyName);

// 3. 이름의 이니셜만 출력하기
let iniName = names.map((item)=>{
    let ini = ""
    let splieName = item.split(' ');
    splieName.forEach((nn)=>
        ini+=nn[0]
    )
    return ini;
});
console.log(iniName);

// 4. filter   a 를 포함하는 item들을 배열로 리턴한다.
let includeA = names.filter((item)=>
    item.includes('a'));
console.log(includeA);

console.log("5. 이름에 같은 글자가 연속해서 들어간 사람을 출력");

let douNames = names.filter((item)=>{
    let splitName = item.split('');
    return splitName.find((letter, index)=>letter == splitName[index+1] ) 
});     
console.log(douNames);


console.log("6. 이름의 길이가 20자인 사람이 있는가 ?");
let someName = names.some((item)=>{
    return item.length > 20
})
console.log(someName);

console.log("7.1 성을 제외한 이름에 P를 포함한 사람이 있는가 ?");
console.log(names.find((item)=>{
    let splitName = item.split(' ');
    //splitName.pop();
    return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
  }));

console.log("7.2 성을 제외한 이름에 P를 포함한 사람이 있는가 ?");
console.log(names.some((item)=>{
    let splitName = item.split(' ')
    //splitName.pop()
    return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
  }));
//   for(let i=0; i<names.length; i++){
//     console.log(names[i]);
//   }


// // 반환하는 값이 없다.
//   names.forEach( (pname, i)=>
//     console.log(pname, i)
// );


// // map 은 꼭 배열로 리턴한다.
// let data = names.map((item)=>{

//     return item + " : "
// });
// console.log(data);


// let ceoList = [
//     {name:"Larry Page", age:23, ceo:true},
//     {name:"Tim Cook", age:40, ceo:true},
//     {name:"Elon Musk", age:55, ceo:false},
// ];


// // 배열로 받은 Json에서 해당 필드의 값만들 뽑아서 배열로 리턴한다.
// let data1 = ceoList.map((item)=>{
//     return item.name
// });
// console.log(data1);


// // filter : 조건에서 true 인 값만 뽑아 배열로 리턴할 때 쓰인다.
// let data2 = ceoList.filter((item=>{
//     return item.age==23
// }));
// console.log(data2);

// let data3 = names.filter((item=>{
//     return item.startsWith("L");
// }));
// console.log(data3);

// // some : 해당하는게 있으면 true 없으면 false , 해당하는게 있냐 ?
// let data4 = names.some((item=>{
//     return item.startsWith("A");
// }));
// console.log(data4);

// // every : 해당하는게 있으면 true 없으면 false , 해당하는게 있냐 ?
// let data5 = names.every((item=>{
//     return item.startsWith("A");
// }));
// console.log(data5);

// // find 첫번째로 발견하면 바로 리턴해, 못찾으면 undefined 
// let data6 = names.find((item=>{
//     return item.startsWith("L");
// }));
// console.log(data6);

// // findIndex 첫번째로 발견한 index를 리턴해, 못찾으면 index = -1
// let data7 = names.findIndex((item=>{
//     console.log("---");
//     return item=="Bill Gates";  // 조건문이 와야한다.
// }));
// console.log(data7);


