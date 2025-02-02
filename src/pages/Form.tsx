// import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import React from "react";

const Form = React.memo(() => {
  return (
    <div className="flex justify-center items-center text-center py-10">
      {/* <LoginForm /> */}
      <SignupForm />
    </div>
  );
});

export default Form;

// One form at time with if states