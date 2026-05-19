import SideBar from "./SideBar";
import ChatArea from "./ChatArea";

function ChatPage() {
  return (
    <div className="chat-page flex min-h-screen bg-[#36393f]">
      <SideBar />
      <ChatArea />

    </div>
  )
}

export default ChatPage;