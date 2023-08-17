import express from "express";

const app = express();

app.use(
  express.static(
    "F:/Shaikh Adil/Programming/Web Development Projects/Snapchat Login Page/Client/"
  )
);

app.get("/", (req, res) => {
  res.sendFile(
    "F:/Shaikh Adil/Programming/Web Development Projects/Snapchat Login Page/Client/index.html"
  );
});

app.listen(3000, () => {
  console.log("Frontend is listing on 3000");
});
