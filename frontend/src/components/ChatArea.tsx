import { useState, useEffect } from "react";
import socket from "../socket";

import plusIcon from "../assets/plus.svg";
import emojiIcon from "../assets/happy.svg";

function ChatArea() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ username: string, text: string }[]>([]);
  const username = localStorage.getItem('username')?.replace(/"/g, '');

  useEffect(() => {
    socket.emit('join', { username, room: 'general' });
    socket.on('message', (msg: { username: string, text: string }) => {
      console.log(msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    socket.emit('message', message);
    setMessage('');
  }

  return (
    <div className="flex flex-col flex-1 bg-red-500">
      <div className="flex-1 overflow-y-auto p-6">
        {messages.map((msg, index) => {
          const showUsername = index === 0 || messages[index - 1].username !== msg.username;

          return (
            <div key={index} className="text-white mb-2">
              {showUsername && (
                <p className="font-bold text-white">{msg.username}</p>
              )}
              <p className="text-white">{msg.text}</p>
            </div>
          )
        })}
      </div>
      <div className="p-6 flex gap-3">
        <div className="bg-[#40444b] p-2 w-full flex rounded-md">
          <input
            className="flex-1 bg-[#40444b] text-white rounded-lg p-3 outline-none"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          {message ? (
            <button className="bg-[#5ba8b5] text-white px-4 rounded-lg" onClick={handleSend}>
              Send
            </button>
          ) : (
            <div className="tray flex items-center gap-5 mr-5">
              <img src={emojiIcon} alt="Emoji" className="w-7 h-7" />
              <img src={plusIcon} alt="Add" className="w-7 h-7" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatArea;