// function understanding(initial:string): [string, () => void] {

// }

// const [state, fun] = understanding("Hello");

const juice = {
  taste: "orange",
  sugarContent: 30,
};

const { taste, sugarContent } = juice;

console.log(taste);

type MyFunction = () => void;

const olha = () => {
  console.log("Olga");
};

const arr = ["orange", "bob"];

const [a, b] = arr;
