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

document.querySelector(".btn-confirm").onclick = () => {
  const username = document.querySelector(".enter-user").value;
  const room = document.querySelector(".enter-room").value;

  const title = document.querySelector("h1");
  title.innerHTML = `Welcome to room ${room}`;
  socket.emit("join", { username, room });
}