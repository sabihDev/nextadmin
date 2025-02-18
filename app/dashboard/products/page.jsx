// import { deleteproduct } from "@/app/lib/actions";
// import { fetchproducts } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";

const productsPage = async ({ searchParams }) => {
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;
  // const { count, products } = await fetchproducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr >
              <td>
                <div className={styles.product}>
                  <Image
                    src={ "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  IPhone
                </div>
              </td>
              <td>Desc</td>
              <td>$999</td>
              <td>14/02/2023</td>
              <td>72</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          {/* {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.productname}
                </div>
              </td>
              <td>{product.email}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.isAdmin ? "Admin" : "Client"}</td>
              <td>{product.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteproduct}>
                    <input type="hidden" name="id" value={(product.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <Pagination  />
    </div>
  );
};

export default productsPage;