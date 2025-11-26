import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { WidgetItem } from "@/components/WidgetItem";

export default async function DashboardPage() {
 const session = await getServerSession(authOptions);

 if (!session) {
  redirect("/api/auth/signin");
 }

 return (
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
