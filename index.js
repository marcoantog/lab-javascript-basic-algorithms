// Iteration 1: Names and Input
let hacker1 = "Harry";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rony";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let spacedName = "";

for (i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    spacedName += hacker1[i] + " ";
  } else {
    spacedName += hacker1[i];
  }
}

console.log(spacedName.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let reverseName = "";

for (i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}

console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print:

let driver = 0;
let navigator = 0;

for (i = 0; i < hacker1.length; i++) {
  if (hacker1[0] < hacker2[0]) {
    driver += 99;
  } else if (hacker1[i + 1] > hacker2[i + 1]) {
    navigator += 1;
  }
}

if (driver > navigator) {
  console.log("The driver's name goes first.");
} else if (driver < navigator) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
