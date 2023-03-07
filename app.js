const express = require("express");

const db = require("./data/database");
const todosRoutes = require("./routes/todos-routes");

const app = express();

app.use(express.json());

app.use("/todos", todosRoutes);

app.use(function (error, req, res, next) {
  res.status(500).json({
    message: "뭔가 잘못되었습니다!",
  });
});

db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("데이터베이스 연결에 실패했습니다!");
  });
