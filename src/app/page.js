"use client"
import Foot from "@/components/Foot";
import { useSession } from "next-auth/react";
import FrontPage from "@/components/FrontPage";
import Nav from "@/components/Nav";
import { useRouter } from "next/navigation";



export default function Home() {
  const { data: session } = useSession();
 
  return (
    <>
      <Nav/>
      <FrontPage/>
      <Foot/>
    </>
  );
}
