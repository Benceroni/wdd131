// const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];

for (let i = 0; i < studentReport.length; i+=1){
    if (studentReport[i] <= LIMIT){
        console.log(studentReport[i])
    }
}

let i = 0;
while (i< studentReport.length){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i])
        console.log(i)
        
    }
    i += 1;
}

studentReport.forEach(Number => {
    if (Number < LIMIT){
        console.log(Number)
    }
});

for (number in studentReport){
    if (studentReport[number] < LIMIT){
        console.log(studentReport[number])
    }

}

const DAYS = 6;
const options = { weekday: 'long'};

for (i = 0; i<DAYS; i+=1){
    let nextDay = new Date().setDate(new Date().getDate() + i)
    console.log(new Intl.DateTimeFormat("en-US",options).format(nextDay))
}


let firstName = 'Antonia';
let lastName = 'Francesca';

function fullName(first, last){
    return(String(first + " " + last));
}

console.log(fullName(firstName,lastName));

let fullName = function(first,last){
    return '${first} ${last}';
}

const fullName = (first,last) => '${first} ${last}';
// 

document.getElementById("fullName") = (firstName,lastName) => '${firstName} ${lastName}';
//forgot the innerHTML. Oh also- should've  called the function not made a new one.