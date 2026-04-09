function addTask() {
  const container = document.getElementById("taskContainer");

  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Task">
    <select>
      <option>Done</option>
      <option>In Progress</option>
      <option>Blocked</option>
    </select>
    <input placeholder="Time">
    <input placeholder="ETA">
  `;

  container.appendChild(div);
}

function addPlan() {
  const container = document.getElementById("planContainer");

  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Priority">
    <input placeholder="Plan">
    <input placeholder="Coordination">
    <input placeholder="ETA">
  `;

  container.appendChild(div);
}

function submitData() {

  const btn = document.getElementById("submitBtn");

  //  spinner start
  btn.disabled = true;
  btn.innerHTML = 'Submitting <span class="loader"></span>';

  let taskData = [];
  document.querySelectorAll("#taskContainer div").forEach(row => {
    let inputs = row.querySelectorAll("input, select");

    taskData.push({
      task: inputs[0].value,
      status: inputs[1].value,
      time: inputs[2].value,
      eta: inputs[3].value
    });
  });

  let planData = [];
  document.querySelectorAll("#planContainer div").forEach(row => {
    let inputs = row.querySelectorAll("input");

    planData.push({
      priority: inputs[0].value,
      plan: inputs[1].value,
      coord: inputs[2].value,
      eta: inputs[3].value
    });
  });

  const data = {
    name: document.getElementById("name").value,
    mood: document.getElementById("mood").value,
    empId: document.getElementById("empId").value,
    date: document.getElementById("date").value,
    tasks: taskData,
    blockers: document.getElementById("blockers").value,
    escalation: document.getElementById("escalation").value,
    escalationDetails: document.getElementById("escalationDetails").value,
    risk: document.getElementById("risk").value,
    researchQ: document.getElementById("researchQ").value,
    timeBox: document.getElementById("timeBox").value,
    decision: document.getElementById("decision").value,
    tomorrowPlan: planData,
    reflection: document.getElementById("reflection").value
  };

  fetch("https://vijay12334.app.n8n.cloud/webhook/daily-report", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(() => {

    //  popup show
    document.getElementById("successPopup").classList.remove("hidden");

    //  confetti
    for (let i = 0; i < 50; i++) {
      let conf = document.createElement("div");
      conf.className = "confetti";
      conf.style.left = Math.random() * 100 + "vw";
      conf.style.background = `hsl(${Math.random()*360},100%,50%)`;
      document.body.appendChild(conf);

      setTimeout(() => conf.remove(), 3000);
    }

    setTimeout(() => {
      document.getElementById("successPopup").classList.add("hidden");
      btn.disabled = false;
      btn.innerHTML = "Submit Report";
    }, 2500);

  })
  .catch(() => {
    alert("Error");
    btn.disabled = false;
    btn.innerHTML = "Submit Report";
  });
}