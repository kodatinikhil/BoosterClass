const api = "https://randomuser.me/api";
const addUser = document.getElementById("adduser");

addUser.addEventListener("click", async function () {
  const userData = await fetch("https://randomuser.me/api");
});
