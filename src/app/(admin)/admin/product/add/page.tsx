import { serverClient } from "@/app/_trpc/serverClient"
import AddProduct from "@/components/admin/AddProduct"
import prisma from "@/lib/db";


async function ProductAdd() {
  const category = await serverClient.getCategories()  
  return (
    <AddProduct category={category} />
  )
}

export default ProductAdd