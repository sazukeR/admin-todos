import { WidgetItem } from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
 const session = await getServerSession(authOptions);
 7;

 if (!session) {
  redirect("/api/auth/signin");
 }

 return (
  // <div className="justify-around flex flex-wrap bg-gray-400 min-h-screen">

  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
   <WidgetItem title={"Connected user Server-Side"}>
    <div className="grid grid-cols-1">
     <span>{session?.user?.name}</span>
     <span>{session?.user?.image}</span>
     <span>{session?.user?.email}</span>
    </div>
   </WidgetItem>
  </div>
 );
}
