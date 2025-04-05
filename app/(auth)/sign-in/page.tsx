import React from "react";
import AuthForm from "@/components/AuthForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = (await cookies()).get("appwrite-session");

  if (session) return redirect("/");
  return <AuthForm type="sign-in" />;
};

export default SignIn;
