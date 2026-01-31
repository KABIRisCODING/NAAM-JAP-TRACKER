const form = document.getElementById("sadhanaForm");
const logList = document.getElementById("logList");

let logs = JSON.parse(localStorage.getItem("sadhanaLogs")) || [];

function renderLogs() {
  logList.innerHTML = "";
  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${log.date}</strong><br>
      Jap: ${log.jap} | Meditation: ${log.meditation} min<br>
      ${log.reflection}
    `;
    logList.appendChild(li);
  });
}
function updateMonthlySummary() {
  const logs = JSON.parse(localStorage.getItem("sadhanaLogs")) || [];
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  let totalJap = 0;
  let totalMeditation = 0;

  logs.forEach(log => {
   const today = new Date().toISOString();



    if (d.getMonth() === month && d.getFullYear() === year) {
      totalJap += Number(log.jap);
      totalMeditation += Number(log.meditation);
    }
  });

  document.getElementById("totalJap").innerText =
    `Total Jap: ${totalJap}`;
  document.getElementById("totalMeditation").innerText =
    `Total Meditation: ${totalMeditation} min`;
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  <strong>${new Date(log.date).toLocaleDateString()}</strong>


  const jap = document.getElementById("japCount").value;
  const meditation = document.getElementById("meditationTime").value;
  const reflection = document.getElementById("reflection").value;

  logs.unshift({
    date: today,
    jap,
    meditation,
    reflection
  });

  localStorage.setItem("sadhanaLogs", JSON.stringify(logs));
  form.reset();
  renderLogs();
});
updateMonthlySummary();

renderLogs();
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.innerText = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
renderLogs();
updateMonthlySummary();
