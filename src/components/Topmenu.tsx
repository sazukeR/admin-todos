import { cookies } from "next/headers";
import Link from "next/link";
import {
 CiChat1,
 CiMenuBurger,
 CiSearch,
 CiShoppingBasket,
} from "react-icons/ci";

const getTotalPorductsInCartFromCookies = (cart: {
 [id: string]: number;
}): number => {
 let itemsCount = 0;

 Object.values(cart).forEach((value) => {
  itemsCount += value as number;
 });

 return itemsCount;
};

export const Topmenu = async () => {
 const cookieStore = await cookies();

 const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

 const itemsCount = getTotalPorductsInCartFromCookies(cart);

 return (
  <header className="sticky z-10 top-0 h-16 border-b border-gray-200 bg-white lg:py-2.5">
   <div className="px-6 flex items-center justify-between space-x-4">
    <h5 className="hidden lg:block text-2xl text-gray-600 font-medium">
     Dashboard
    </h5>
    <button
     type="button"
     className="w-12 h-16 -mr-2 border-r lg:hidden flex items-center justify-center"
    >
     <CiMenuBurger size={30} />
    </button>
    <div className="flex space-x-2 items-center">
     <div className="hidden md:block">
      <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
       <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
        <CiSearch />
       </span>
       <input
        type="search"
        name="search"
        placeholder="Search here"
        className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
       />
      </div>
     </div>

     <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden"
     >
      <CiSearch />
     </button>
     <button
      type="button"
      className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 active:bg-gray-200"
     >
      <CiChat1 size={25} />
     </button>
     <Link
      href={"/dashboard/cart"}
      className="p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 active:bg-gray-200"
     >
      {itemsCount > 0 && (
       <span className="text-sm mr-2 text-blue-800 font-bold">
        {itemsCount}
       </span>
      )}

      <CiShoppingBasket size={25} />
     </Link>
    </div>
   </div>
  </header>
 );
};
