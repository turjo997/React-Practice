const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    // console.log(key + ': ' + person[key]);
}





Object.entries(person).forEach(([key, value]) => {
    //console.log(key + ': ' + value);
});


const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    //console.log(num);
}


for (let index in numbers) {
    //console.log(numbers[index]);
}


const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (number) {
    //console.log(number);
});

numbers1.forEach(num => {
    //console.log(num);
})


const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        code: 102323
    }

};

function getAllValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            getAllValues(obj[key]); // recursively traverse nested objects
        } else {
            console.log(obj[key]);
        }
    }
}

//getAllValues(obj);

for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
        for (let nestedKey in obj[key]) {
            console.log(obj[key][nestedKey]);
        }
    } else {
        console.log(obj[key]);
    }
}