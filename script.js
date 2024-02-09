const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");
let studentData = JSON.parse(localStorage.getItem("studentData") ?? "[]");

// Save score to Local Storage
function saveScore(e) {
  const user = nameInput.value;
  const rank = scoreInput.value
  if(rank===""){
    scores.innerText="No scores yet"
  }
  else{
  let newstudent = {
    name: user,
    score: rank
  };

  studentData = [...studentData, newstudent];
  localStorage.setItem("studentData", JSON.stringify(studentData));
  showScores(studentData);
}
}
//saveScore()
var table = document.createElement('table');

  var headerRow = document.createElement('tr');
  
  const head = document.createElement("thead");

  var headerCell1 = document.createElement('th');
  headerCell1.textContent = "Name";

  var headerCell2 = document.createElement('th');
  headerCell2.textContent = 'Score';

  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);

  head.appendChild(headerRow);
  scores.appendChild(head)

// Show scores in div
function showScores() {
  // complete the code/
  const savedData = JSON.parse(localStorage.getItem('studentData')) || [];

  var Row = document.createElement('tr');
  const newTbody = document.createElement("tbody");

  savedData.forEach(item => {
    Row.innerHTML=`
    <td>${item.name}</td>
    <td>${item.score}</td>
  `;
  newTbody.appendChild(Row)
  });

  table.append(newTbody)
  scores.appendChild(table)
}
