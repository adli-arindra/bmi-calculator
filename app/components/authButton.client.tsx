"use client";
import { useSession } from "next-auth/react";

import { signIn, signOut } from "@/app/auth/helpers";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <button className = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300"
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </button>
  ) : (
    <button className = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300" onClick={async () => await signIn()}>Sign In</button>
  );
}