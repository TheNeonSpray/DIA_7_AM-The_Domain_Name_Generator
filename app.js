let pronoun = ["I", "you", "she", "our", "the", "him"];
let adj = ["Angry", "Excited", "Attractive", "Awake", "Asleep", "Beautiful"];
let noun = ["Army", "Jury", "Team", "House", "Athlete", "Garden"];

for (let countPronoun = 0; countPronoun < pronoun.length; countPronoun++){
  
    for (let countAdj = 0; countAdj < adj.length; countAdj++){
      
    for (let countNoun = 0; countNoun < noun.length; countNoun++){
        
        console.log(pronoun[countPronoun] + adj[countAdj] + noun[countNoun] + ".com")
      }
    }
}