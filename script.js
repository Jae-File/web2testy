console.log('hello Jae!');
let adj_list = ['shiny', 'funky', 'amazing'];
let adj=adj_list[Math.floor(adj_list.length*Math.random())];
var noun_list = prompt("Enter 6 nouns, separate them by comma").split(",");
let noun=noun_list[Math.floor(noun_list.length*Math.random())];
let sentence='Last week is a '+ adj + ' ' + noun;
document.write(sentence);
