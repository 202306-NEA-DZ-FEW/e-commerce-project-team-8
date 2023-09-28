import HomeProductsCards from "@/home components/HomeProductsCards"
import Link from "next/link"
import styles from "@/styles/home.module.css"
import { fetcher } from "@/util/API"
export default function Home({ products }) {
  // const bgStyles = {
  //   backgroundImage: `url("/header-bg.jpg")`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // }
  return (
    <main>
      <header className="min-h-screen bg-[#eff0ed] flex justify-center items-center">
        <article className="text-center">
          <h1 className="text-[4rem] mb-[2rem]">Shop the Latest Trends</h1>
          <p className="text-[2rem] text-center">
            Explore a curated collection of fashion and electronics
          </p>
          <Link
            href="#"
            className="inline-block py-[0.5rem] px-[1.8rem] mt-[3rem] text-center border-2 transition-all duration-500 ease-in-out border-black hover:bg-[#821f40] hover:text-white hover:border-none "
          >
            <button>Shop Now</button>
          </Link>
        </article>
      </header>
      <section className="bg-neutral-100 p-10">
        <h3 className="text-center text-xl mb-5 text-red-500">
          Shop by Category
        </h3>
        <h1 className="text-center text-3xl mb-5">
          Popular on the So9ify store
        </h1>
        <div className="black">
          <HomeProductsCards products={products} />
        </div>
      </section>
    </main>
  )
}

// fetching the products
export async function getServerSideProps() {
  const products = await fetcher("")
  return { props: { products } }
}
