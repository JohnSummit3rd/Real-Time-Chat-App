const socket = io("http://localhost:3000");

socket.on("message", text => {
  const el = document.createElement("li");
  el.innerHTML = text;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
}

document.querySelector(".btn-user").onclick = () => {
  const username = document.querySelector(".enter-user").value;
  socket.emit("username", username);
}