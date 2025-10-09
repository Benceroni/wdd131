const entries =[
    {
        date: "2024-07-21",
        imageReference: "",
        text: "work on the rav4 is slow but going"
    },
    {
        date: "2024-08-12",
        imageReference: "",
        text: "I got the rav4 rebuilt but it's still broken"
    },
    {
        date: "2024-09-25",
        imageReference: "",
        text: "The rav4 runs again"
    },
    {
        date: "2025-02-21",
        imageReference: "wireframe_one.webp",
        text: "The Rav4 died again. Rip"
    }
]
//template
// ,
//     {
//         //?tags: ["",]
//         date: "",
//         ImageReference: "",
//         text: ""
//     }

// date is formatted yyyy-mm-dd
// image referecne is just the file name within "images/image_name.webp"

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function getMonthStringFromFullDate(_fullDate){
    const monthAsInteger = parseInt(_fullDate.substring(5,7));
    console.log(monthAsInteger)
    return monthNames[monthAsInteger-1]
}

// console.log(getMonthStringFromFullDate("0000-08-00"));

function assembleFormattedDate(_date){
    return `${_date.substring(8,10)} ${getMonthStringFromFullDate(_date)} ${_date.substring(0,4)}`
}

// console.log(assembleFormattedDate("2018-12-10"));

entries.forEach(entry => 
    document.querySelector("#entries").innerHTML +=
    assembleEntry(assembleFormattedDate(entry.date),entry.imageReference,entry.text));

function assembleEntry(_date,_imageReference,_text){
    return `<H3>${_date}</H3><img src ="images/${_imageReference}"><p>${_text}</p>`
}
