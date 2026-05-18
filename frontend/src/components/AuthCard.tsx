import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function AuthCard({ heading, subheading, signup, noteText, noteLinkText, noteLinkTo }: { heading: string; subheading: string; signup: boolean; noteText: string; noteLinkText: string; noteLinkTo: string }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = async () => {
    try {
      if (signup) {
        const res = await fetch('http://localhost:3000/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, username, displayName })
        })
        const data = await res.json();
        console.log(data);
        navigate('/login');
      } else {
        const res = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', JSON.stringify(data.username));
        navigate('/chat');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={`flex flex-col w-125 ${signup ? 'h-150' : 'h-100'} bg-[#393a41] p-10 rounded-lg`}>
      <h1 className="text-white text-xl font-bold text-center mb-2">{heading}</h1>
      <h3 className="text-white text-sm text-center mb-4">{subheading}</h3>
      <label className="text-white">Email</label>
      <input
        type="email"
        className="border border-[#484950] rounded-lg p-2 bg-[#35353c] mb-5 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {signup && (
        <div className="flex flex-col">
          <label className="text-white">Display Name</label>
          <input
            type="text"
            className="border border-[#484950] rounded-lg p-2 bg-[#35353c] mb-5 text-white"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <label className="text-white">Username</label>
          <input
            type="text"
            className="border border-[#484950] rounded-lg p-2 bg-[#35353c] mb-5 text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      )}
      <label className="text-white">Password</label>
      <input
        type="password"
        className="border border-[#484950] rounded-lg p-2 bg-[#35353c] text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-[#5ba8b5] hover:bg-[#2f7a86] transition-colors duration-200 cursor-pointer text-white p-2 rounded-lg mt-10">{signup ? "Create Account" : "Log In"}</button>
      <p className="text-[#8e9297] text-sm text-left mt-4">
        {noteText} <Link to={noteLinkTo} className="text-[#5ba8b5] hover:underline">{noteLinkText}</Link>
      </p>
    </div>
  )
}

export default AuthCard;