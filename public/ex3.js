// Client: submit new article via fetch to /articles
document.getElementById("articleForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = {
    title: form.title.value,
    content: form.content.value
  };
  const res = await fetch("/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  document.getElementById("msg").textContent = data.message || "Saved.";
  form.reset();
});
