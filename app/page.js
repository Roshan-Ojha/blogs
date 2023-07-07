"use client";

import * as React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  console.log(session?.user,status)

  if (status === "loading") return null;

  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>signout</button>
      ) : (
        <button onClick={() => signIn()}>signin</button>
      )}
    </div>
  );
}
