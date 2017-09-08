console.log('hello Jae!');
var adj_list = ['shiny', 'funky', 'amazing', 'tasty', 'tiny'];
var adj=adj_list[Math.floor(adj_list.length*Math.random())];
var verb_list = ['went', 'ran', 'was', 'jumped', 'saw', 'kicked'];
var verb=verb_list[Math.floor(verb_list.length*Math.random())];
var noun_list = prompt("Enter 5 nouns, separate them by comma").split(",");
var noun=noun_list[Math.floor(noun_list.length*Math.random())];
var sentence='Last Sunday I '+verb+ ' a '+ adj + ' ' + noun +'. On my way to the '+ noun + ', I '+verb +' a very ' + adj +' '+ noun + '. It '+verb+' so ' + adj + ' that I instantly '+ verb + ' over it. Later at night, my ' + noun +' '+ verb + ' to my '+ noun + ', and together we '+ verb + ' up, and ' + verb + ' some '+noun ;
document.write(sentence);
