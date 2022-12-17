// ------------------------------------------------------------------- //
// express 안쓰고 기본 내장을 썼을 경우
// const http = require("http");
// const app = http.createServer((req, res) => {
//   //   console.log(req.url);
//   //  1. 한글 처리 해줘야 함
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

//   //   2. 라우팅 처리 지저분 해짐
//   if (req.url === "/") {
//     res.end("여기는 루트!");
//   }

//   if (req.url === "/login") {
//     res.end("로그인 일껄?");
//   }

//   console.log(req.url);

//   //   console.log('req => ', req)
//   //   console.log('res => ', res)
// });

// app.listen(3001, () => {
//   console.log("http 서버 올림~");
// });
// ------------------------------------------------------------------- //
"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");
const product = require("./src/routes/product");

// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use => 미들 웨어를 등록해주는 메서드
app.use("/product", product);

module.exports = app;
