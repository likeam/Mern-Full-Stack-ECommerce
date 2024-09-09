import CommonForm from "../../components/common/Form";
import { loginFormControls } from "@/config";
import { useState } from "react"
import { Link } from "react-router-dom"



function AuthLogin () {
  
  const initialState = {
  
    email: '',
    password: '',
  }

  const [formData, setFormData] = useState(initialState);

  const onSubmit = () => {}

  return  <>
  <div className=" mx-auto w-full max-w-md space-y-6">
    <div className=" text-center">
      <h1 className=" text-3xl font-bold tracking-tight text-foreground">Signin to account</h1>
      <p className=" mt-2">Don't have an account
        <Link to='/auth/register' className=" font-medium ml-2 text-primary hover:underline">Register</Link>
      </p>
    </div>
    <CommonForm
      formControls={loginFormControls}
      buttonText={'Sign in'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
</>
}

export default AuthLogin
