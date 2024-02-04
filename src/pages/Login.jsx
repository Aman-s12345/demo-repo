import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Run live stream using RSTP.."
      description2="Add Logo and Text."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
