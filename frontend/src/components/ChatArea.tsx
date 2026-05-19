import plusIcon from "../assets/plus.svg";
import emojiIcon from "../assets/happy.svg";
import { useState } from "react";


function ChatArea() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col flex-1 bg-red-500">
      <div className="flex-1 overflow-y-auto p-6">

      </div>
      <div className="p-6 flex gap-3">
        <div className="bg-[#40444b] p-2 w-full flex rounded-md">
          <input
            className="flex-1 bg-[#40444b] text-white rounded-lg p-3 outline-none"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {message ? (
            <button className="bg-[#5ba8b5] text-white px-4 rounded-lg">
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