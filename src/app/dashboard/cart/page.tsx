import { cookies } from "next/headers";
import { products, type Product } from "../products/data/productsData";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { WidgetItem } from "@/components/WidgetItem";

interface ProductInCart {
 product: Product;
 quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
 let productsInCart: ProductInCart[] = [];

 for (let id of Object.keys(cart)) {
  const product = products.find((product) => product.id === id);

  if (product) {
   productsInCart.push({ product: product, quantity: cart[id] });
  }
 }

 return productsInCart;
};

export default async function CartPage() {
 const cookiesStore = await cookies();

 const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {
  [id: string]: number;
 };

 const productsInCart = getProductsInCart(cart);

 const totalToPay = productsInCart.reduce(
  (acum, item) => item.product.price * item.quantity + acum,
  0
 );

 return (
  <div>
   <h1 className="text-5xl">Products in Cart</h1>

   <hr className="mb-2" />

   <div className="flex flex-col sm:flex-row w-full gap-2">
    <div className="flex flex-col w-full sm:w-8/12 gap-2">
     {productsInCart.map(({ product, quantity }) => (
      <ItemCard key={product.id} product={product} quantity={quantity} />
     ))}
    </div>

    <WidgetItem title="Total to pay">
     <div className="mt-2 flex justify-center gap-4">
      <h3 className="text-5xl font-bold text-gray-700">
       ${(totalToPay * 1.15).toFixed(2)}
      </h3>
     </div>

     <span className="text-gray-500 font-bold">
      Impuestos 15%: {(totalToPay * 0.15).toFixed(2)}
     </span>
    </WidgetItem>
   </div>
  </div>
 );
}
