import CommonForm from "@/components/common/Form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/store/auth-slice";
import { useToast } from "react-toastify";

function AuthRegister() {
  const initialState = {
    userName: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "descructive",
        });
      }
    });
  };

  return (
    <>
      <div className=" mx-auto w-full max-w-md space-y-6">
        <div className=" text-center">
          <h1 className=" text-3xl font-bold tracking-tight text-foreground">
            Create new account
          </h1>
          <p className=" mt-2">
            Already have an account
            <Link
              to="/auth/login"
              className=" font-medium ml-2 text-primary hover:underline"
            >
              Signin
            </Link>
          </p>
        </div>
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}
export default AuthRegister;
