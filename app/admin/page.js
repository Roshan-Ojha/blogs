"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Editor, EditorTools } from "@progress/kendo-react-editor";
import RichText from "./RichTextEditor";

function Admin() {
  const { data: session, status } = useSession();
  const route = useRouter();

  // if (status === "loading") {
  //   return <p>Loading ...</p>;
  // } else if (status === "unauthenticated") {
  //   route.push("/login");
  // } else {
  return (
    <div>
      <RichText></RichText>
    </div>
  );
  // }
}

export default Admin;
