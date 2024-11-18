"use client";
import { useSession } from "next-auth/react";

import { signIn } from "@/app/auth/helpers";
import Link from "next/link";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Link className = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300"
      href="/api/auth/signout"
    >
      {session.data?.user?.name} : Sign Out
    </Link>
  ) : (
    <button className = "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300" onClick={async () => await signIn()}>Sign In</button>
  );
}