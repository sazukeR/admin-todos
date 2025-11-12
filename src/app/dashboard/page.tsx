import { WidgetItem } from "@/components/WidgetItem";

export default function DashboardPage() {
 return (
  // <div className="justify-around flex flex-wrap bg-gray-400 min-h-screen">

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
   <WidgetItem />
   <WidgetItem />
   <WidgetItem />
   <WidgetItem />
   <WidgetItem />
   <WidgetItem />
  </div>
 );
}
