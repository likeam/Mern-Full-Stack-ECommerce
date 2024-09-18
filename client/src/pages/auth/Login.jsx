import { loginUser } from "@/store/auth-slice";
import CommonForm from "../../components/common/Form";
import { loginFormControls } from "@/config";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast";



const initialState = {
  
  email: '',
  password: '',
}



function AuthLogin () {
  
 

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      console.log(data);
      if(data?.payload?.success){
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({ 
          title: data?.payload?.message,
          variant: "destructive",
        })
      }
    })

  }

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
