import backgroundImage from '../assets/background.jpg'
import AuthCard from './AuthCard.tsx';
import Logo from '../assets/logo.png'

function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
        <img src={Logo} alt="Chattr logo" className="w-10 h-10" />
        <span className="text-white text-2xl font-bold">Chattr</span>
      </div>

      {/* Card sits on top */}
      <div className="relative z-10">
        <AuthCard
          heading="Welcome back!"
          subheading="We're so happy to see you again!"
          signup={false}
          noteText="Need an account?"
          noteLinkText="Sign up here!"
          noteLinkTo="/signup"
        />
      </div>

    </div>
  )
}

export default LoginPage;