import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="" fill />
                </div>
                Title
            </div>
            <div className={styles.formContainer}>
                <form action='' className={styles.form}>
                    <input type="hidden" name="id" />
                    <label>Title</label>
                    <input type="text" name="title" placeholder='title' />
                    <label>Price</label>
                    <input type="number" name="price" placeholder='price' />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder='stock' />
                    <label>Color</label>
                    <input
                        type="text"
                        name="color"
                        placeholder={"color"}
                    />
                    <label>Size</label>
                    <textarea
                        type="text"
                        name="size"
                        placeholder={ "size"}
                    />
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows="5"
                        placeholder='Description'
                    ></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
}
export default SingleProduct