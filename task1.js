url="https://randomuser.me/api/"
fetch(url).then(res=>res.json())
.then((data)=>{
    console.log(data.results[0])
document.write(`
    <img src="${data.results[0].picture.large}">
    <h3>firstname:${data.results[0].name.first } lastname:${data.results[0].name.last}</h3>
    <h4>Gender:${data.results[0].gender}</h4>
    <h4>AGE:${data.results[0].dob.age}</h4>

`)
})
fetch(url).then(res=>res.json())
.then((data)=>{
    console.log(data.results[0])
document.write(`
    <img src="${data.results[0].picture.large}">
    <h3>firstname:${data.results[0].name.first } lastname:${data.results[0].name.last}</h3>
    <h4>Gender:${data.results[0].gender}</h4>
    <h4>AGE:${data.results[0].dob.age}</h4>

`)
})
fetch(url).then(res=>res.json())
.then((data)=>{
    console.log(data.results[0])
document.write(`
    <img src="${data.results[0].picture.large}">
    <h3>firstname:${data.results[0].name.first } lastname:${data.results[0].name.last}</h3>
    <h4>Gender:${data.results[0].gender}</h4>
    <h4>AGE:${data.results[0].dob.age}</h4>

`)
})
fetch(url).then(res=>res.json())
.then((data)=>{
    console.log(data.results[0])
document.write(`
    <img src="${data.results[0].picture.large}">
    <h3>firstname:${data.results[0].name.first } lastname:${data.results[0].name.last}</h3>
    <h4>Gender:${data.results[0].gender}</h4>
    <h4>AGE:${data.results[0].dob.age}</h4>

`)
})