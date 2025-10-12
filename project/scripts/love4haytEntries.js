const entries =[
    {
        date: "2024-07-26",
        imageReference: "no_engine.webp",
        altText: "Rav4 engine bay with torn ",
        text: "I pulled the block out of the Rav4 today. It'll give me a really good chance to clean and inspect the short block to see what it needs!"
    },
    {
        date: "2024-07-19",
        imageReference: "painted_valve_cover.webp",
        altText: "3s-ge toyota engine valve cover painted white",
        text: "The valve cover is off and I've been cleaning it off. Cleaning, painting and making things pretty helps scratch the artistic itch and improves my motivation to keep going, so although unnecessary, it helps the big picture."
    },
    {
        date: "2024-09-25",
        imageReference: "rav4_finished.webp",
        altText: "1997 rav4 sitting on the street",
        text: "The RAV4 RUNS AGAIN!! On the anniversary of Halo 3, the rav4 is back together and running again. Still running rough but it runs."
    },
    {
        date: "2025-02-21",
        imageReference: "dead_hayt.webp",
        altText:"image of Rav4 in back up camera",
        text: "The Rav4 died again. Rip"
    }
]

//template
// ,
//     {
//         //?tags: ["",]
//         date: "",
//         ImageReference: "",
//         altText: "",
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
    // console.log(monthAsInteger)
    return monthNames[monthAsInteger-1]
}

function assembleFormattedDate(_date){
    return `${_date.substring(8,10)} ${getMonthStringFromFullDate(_date)} ${_date.substring(0,4)}`
}

function showEntries(){
document.querySelector("#entries").innerHTML="";
entries.forEach(entry => 
    document.querySelector("#entries").innerHTML +=
    assembleEntry(assembleFormattedDate(entry.date),entry.imageReference,entry.text,entry.altText));
}

function assembleEntry(_date,_imageReference,_text,_altText){
    return `<div class="entry"><H3>${_date}</H3><img src ="images/${_imageReference}" alt="${_altText}" loading="lazy"><p>${_text}</p></div>`
}

function sortByNewest(){
    entries.sort(function(a,b){
        return b.date.replace(/-/g, "") - a.date.replace(/-/g, "");
    });
    showEntries();
}

function sortByOldest(){
    entries.sort(function(a,b){
        return a.date.replace(/-/g, "") - b.date.replace(/-/g, "");
    });
    showEntries();
}

document.querySelector("#newest").addEventListener('click', function(){sortByNewest()})
document.querySelector("#oldest").addEventListener('click', function(){sortByOldest()})
sortByNewest();
showEntries();