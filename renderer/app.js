const crawler = require("./crawler");

const clickAction = async function () {
  const value = document.querySelector("input").value;
  const title = await crawler(value);
  document.querySelector("#content").innerHTML = title;
}

const btn = document.querySelector("button");
btn.addEventListener("click", clickAction);