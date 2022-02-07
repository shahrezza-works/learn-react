import React from "react";
import Joke from "./Components/Joke";

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

function App() {
  return (
    <>
    <Joke 
        upvotes={8}
        downvotes={2}
        pun={true}
        comments={[{by: "aku", body: "bla bla bla"}]}
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke 
        upvotes={8}
        downvotes={2}
        pun={false}
        comments={[{by: "aku", body: "bla bla bla"}, {by: "kau", body: "bla bla bla"}]}
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke 
        upvotes={12}
        downvotes={3}
        pun={false}
        comments={[{by: "aku", body: "bla bla bla"}]}
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke 
        upvotes={7}
        downvotes={6}
        pun={true}
        comments={[]}
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke 
        upvotes={6}
        downvotes={1}
        pun={true}
        comments={[]}
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke 
        upvotes={5}
        downvotes={2}
        pun={true}
        comments={[]}
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </>
  );
}

export default App;
