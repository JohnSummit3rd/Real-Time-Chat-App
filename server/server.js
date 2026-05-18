require("dotenv").config();
console.log(process.env.MONGO_URI)
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require('cors')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// 1. Create Express app
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use('/auth', authRoutes)

app.use(express.static(path.join(__dirname, "../app")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../app", "index.html"));
});

// 2. Create HTTP server
const server = http.createServer(app);

// 3. Attach Socket.IO to the server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// 4. Handle client connections
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on("join", ({ username, room }) => {
    socket.username = username;
    socket.room = room;
    socket.join(room);
  });

  // Listen for messages from the client
  socket.on('message', (message) => {
    console.log(message);

    // Broadcast to all clients
    io.to(socket.room).emit('message', `${socket.username}: ${message}`);
  });

  // Disconnects user
  socket.on('disconnect', () => {
    console.log("User disconnected", socket.id);
  })
});

// 5. Start the server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})