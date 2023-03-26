const numbersList = document.getElementById("numbers");

for(let i=1; i<=100; i++) {
  let text = "";
  
  if(i % 3 === 0) {
    text += "Fizz";
  }
  
  if(i % 5 === 0) {
    text += "Buzz";
  }
  
  if(text === "") {
    text = i;
  }
  
  const listItem = document.createElement("li");
  listItem.textContent = text;
  numbersList.appendChild(listItem);
}
