import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join With us!"
      description1="Run live stream using RSTP."
      description2="Add Logo and Text."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
