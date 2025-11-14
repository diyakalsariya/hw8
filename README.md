# HW8B 

This project follows the instructions in your screenshots. It contains:

- **Exercise 1:** GET shows a form, POST `/process-form` returns a confirmation page with the submitted *name* and *email*.
- **Exercise 2:** POST `/api/countries` accepts JSON `{ name, countries: [] }` and responds with a short message. A small client page calls it with `fetch(...)` and shows the result.
- **Exercise 3:** POST `/articles` accepts form data and stores it in an in-memory array. The new article's ID is **MAX(existing ids) + 1**. The response confirms the title and ID.


```
hw8b/
  css/styles.css
  public/ex1.js, ex2.js, ex3.js
  views/index.html, ex1.html, ex2.html, ex3.html
  index.js
  package.json
```

> Note: No database is used. Articles are **not persisted**—they reset each time the server restarts.

1. Open a terminal in `hw8b/`.
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Visit: <http://localhost:3000>

That's it. Keep the code simple and feel free to modify the HTML/CSS for your class rubric.
