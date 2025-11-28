import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import tailusLogo from "../../public/tailus.svg";
import { SidebarItem } from "./SidebarItem";
import {
 IoBalloonOutline,
 IoBasketOutline,
 IoCalendarOutline,
 IoCheckboxOutline,
 IoListOutline,
 IoPersonOutline,
} from "react-icons/io5";
import { getServerSession, Session } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogInLogOutButton } from "./LogInLogOutButton";

const menuItems = [
 {
  icon: <IoCalendarOutline />,
  path: "/dashboard",
  title: "Dashboard",
 },
 {
  icon: <IoCheckboxOutline />,
  path: "/dashboard/rest-todos",
  title: "Rest TODOS",
 },
 {
  icon: <IoListOutline />,
  path: "/dashboard/server-todos",
  title: "Server actions",
 },
 {
  icon: <IoBalloonOutline />,
  path: "/dashboard/cookies",
  title: "Cookies",
 },
 {
  icon: <IoBasketOutline />,
  path: "/dashboard/products",
  title: "Products",
 },
 {
  icon: <IoPersonOutline />,
  path: "/dashboard/profile",
  title: "Profile",
 },
];

export const Sidebar = async () => {
 const session = await getServerSession(authOptions);

 const userUrl = session?.user?.image
  ? session?.user?.image
  : "https://img.freepik.com/vector-gratis/ilustracion-icono-perfil_53876-5907.jpg";

 const userName = session?.user?.name ? session?.user?.name : "No name";

 return (
  <aside className=" ml-[-100%] fixed z-10 top-0 pb-3 px-3 w-full flex flex-col justify-between h-screen border-r border-gray-200 bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
   <div className="bg-red-300">
    <div className="-mx-6 px-6 py-4">
     <Link href="/" title="Home">
      <Image
       src={tailusLogo}
       alt="Tailus logo"
       width={180}
       height={36}
       priority
       className="w-36 h-auto"
      />
     </Link>
    </div>

    <div className="mt-8 text-center">
     <Image
      width={100}
      height={100}
      src={userUrl}
      alt="User avatar"
      className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
      unoptimized
     />
     <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
      {userName}
     </h5>
     <span className="hidden text-gray-400 lg:block">Admin</span>
    </div>

    <ul className="space-y-2 tracking-wide mt-8">
     {menuItems.map((item) => (
      <SidebarItem key={item.path} {...item} />
     ))}
    </ul>
   </div>

   <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-gray-200">
    <LogInLogOutButton />
   </div>
  </aside>
 );
};
