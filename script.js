console.log('hello Jae!');
let adj_list = ['shiny', 'funky', 'amazing', 'tasty', 'tiny'];
let verb_list = ['went', 'ran', 'was', 'jumped', 'saw', 'kicked'];
let noun_list = prompt("Enter 5 nouns, separate them by comma").split(",");
let story='Last Sunday I '+verb_list[Math.floor(verb_list.length*Math.random())]+ ' a '+ adj_list[Math.floor(adj_list.length*Math.random())] + ' ' + noun_list[Math.floor(noun_list.length*Math.random())] +'. On my way to the '+ noun_list[Math.floor(noun_list.length*Math.random())] + ', I '+verb_list[Math.floor(verb_list.length*Math.random())] +' a very ' + adj_list[Math.floor(adj_list.length*Math.random())] +' '+ noun_list[Math.floor(noun_list.length*Math.random())] + '. It '+verb_list[Math.floor(verb_list.length*Math.random())]+' so ' + adj_list[Math.floor(adj_list.length*Math.random())] + ' that I instantly '+ verb_list[Math.floor(verb_list.length*Math.random())] + ' over it. Later at night, my ' + noun_list[Math.floor(noun_list.length*Math.random())] +' '+ verb_list[Math.floor(verb_list.length*Math.random())] + ' to my '+ noun_list[Math.floor(noun_list.length*Math.random())] + ', and together we '+ verb_list[Math.floor(verb_list.length*Math.random())] + ' up, and ' + verb_list[Math.floor(verb_list.length*Math.random())] + ' some '+noun_list[Math.floor(noun_list.length*Math.random())] ;
let output=story.fontsize(24);
document.write(output);
