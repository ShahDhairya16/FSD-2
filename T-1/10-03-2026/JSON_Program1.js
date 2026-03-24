// From the JSON object fetch the value which has been asked

const a = {
    "DataStructure": [{
        'name':'tree',
        'Course':'Intro',
        'content':['1','B','C'],
    },{
        'name':'tree1',
        'Course':'Intro',
        'content':["1","B","C","D"],
      
    }],
    "xyz":{
        'name':'graphics',
        'topic':["bfs","dfs","sorting"]
    }
}


console.log(a.DataStructure[1].name);
console.log(a.DataStructure[0].name);
console.log(a.xyz.name);
console.log(a.xyz.topic);
console.log(a.xyz.topic[0]);

