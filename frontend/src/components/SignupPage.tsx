import backgroundImage from '../assets/background.jpg'
import AuthCard from './AuthCard.tsx';
import Logo from '../assets/logo.png'

function SignupPage() {
  return (
    <div
      className="signup-page relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
        <img src={Logo} alt="Chattr logo" className="w-10 h-10" />
        <span className="text-white text-2xl font-bold">Chattr</span>
      </div>

      <div className="relative z-10">
        <AuthCard
          heading="Create an account"
          subheading="Join our community today!"
          signup={true}
          noteText="Already have an account?"
          noteLinkText="Log in here!"
          noteLinkTo="/login"
        />
      </div>
    </div>
  )
}

export default SignupPage;