// let me = {
//     name: "John",
//     thisInArrow: () => {
//         console.log("My name is : " + name);
//     },
// };
// me.thisInArrow();


let me = {
    name: "John",
    thisInRegular() {
        console.log("My name is : " + this.name);
    },
};
me.thisInRegular();