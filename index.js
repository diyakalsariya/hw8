// Simple Express server for three exercises
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static folders
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/public", express.static(path.join(__dirname, "public")));

// views (serve plain HTML files)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// --------------------------
// Exercise 1: Processing a Form
// GET shows the form page, POST handles submission and shows a confirmation
// --------------------------
app.get("/exercise1", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ex1.html"));
});

app.post("/process-form", (req, res) => {
  const { name, email } = req.body;
  const safeName = (name || "Anonymous").toString();
  const safeEmail = (email || "unknown@email").toString();

  // Keep it very simple: send a tiny confirmation page
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Form Confirmation</title>
        <link rel="stylesheet" href="/css/styles.css">
      </head>
      <body class="container">
        <h1>Form submitted</h1>
        <p>Thank you, <strong>${safeName}</strong>! We'll keep you posted at <strong>${safeEmail}</strong>.</p>
        <p><a href="/">Link to Start Page</a></p>
        <p><a href="/exercise1">Back to Exercise 1</a></p>
      </body>
    </html>
  `);
});

// --------------------------
// Exercise 2: Simple API (/api/countries) that echoes a message
// --------------------------
app.get("/exercise2", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ex2.html"));
});

app.post("/api/countries", (req, res) => {
  // Expecting JSON like: { "name": "Asher", "countries": ["USA", "Canada"] }
  const name = (req.body?.name || "Traveler").toString();
  const count = Array.isArray(req.body?.countries) ? req.body.countries.length : 0;
  const message = `Your name is ${name} and you visited ${count} ${count === 1 ? "country" : "countries"}. Keep traveling!`;
  res.json({ message });
});

// --------------------------
// Exercise 3: Articles route that stores items in memory (not persistent)
// --------------------------
app.get("/exercise3", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ex3.html"));
});

// In-memory "database"
let articles = [
  { id: 1, title: "Hello World", content: "First post" },
  { id: 2, title: "Campus Life", content: "Clubs and coffee" },
  { id: 3, title: "Study Tips", content: "Pomodoro is great" },
  { id: 4, title: "Weekend Hike", content: "Bring water!" }
];

app.post("/articles", (req, res) => {
  const { title, content } = req.body;
  const maxId = articles.reduce((acc, a) => Math.max(acc, a.id), 0);
  const newArticle = {
    id: maxId + 1,
    title: (title || "").toString().trim(),
    content: (content || "").toString().trim()
  };
  articles.push(newArticle);
  res.json({
    ok: true,
    id: newArticle.id,
    title: newArticle.title || "(untitled)",
    message: `New article added successfully with title "${newArticle.title || "(untitled)"}" and ID ${newArticle.id}!`
  });
});

// small helper to view all articles (not required, handy for testing)
app.get("/articles", (req, res) => {
  res.json(articles);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
