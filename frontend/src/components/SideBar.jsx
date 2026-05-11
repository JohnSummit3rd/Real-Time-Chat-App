import friendsIcon from "../assets/friends.svg"
import groupsIcon from "../assets/group.svg"

function SideBar() {
  return (
    <div className="min-h-screen w-1/4 bg-[#202225] text-white p-10">
      <section className="upperSection mb-10 border-b border-[#8e9297]">
        <div className="friends py-4 flex gap-3">
          <img src={friendsIcon} alt="friends" className="w-8 h-8" />
          <h1 className="text-lg mt-0.5">Friends</h1>
        </div>
        <div className="groupchats py-4 flex gap-3">
          <img src={groupsIcon} alt="friends" className="w-8 h-8" />
          <h1 className="text-lg mt-0.5">Group Chats</h1>
        </div>
      </section>
      <section className="lowerSection">
        <h1>Direct Messages</h1>
        <div>
          <div className="">
            <h2>Gojo Satoru</h2>
          </div>
          <div>
            <h2>Fushiguro Toji</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SideBar