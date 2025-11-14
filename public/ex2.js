// Client: call /api/countries on click
document.getElementById("callBtn").addEventListener("click", async () => {
  const payload = {
    name: "Diya",
    countries: ["USA", "Canada", "Mexico", "Japan", "Italy"]
  };
  const res = await fetch("/api/countries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  document.getElementById("result").textContent = data.message || "No message";
});
