import HomeProductsCards from "@/components/home components/HomeProductsCards"
import Link from "next/link"
import styles from "@/styles/home.module.css"
import { fetcher } from "@/util/API"
import about from "../../public/about.jpg"
import Image from "next/image"

export default function Home({ products }) {
  const bgStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/bg-shopping.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "fixed",
  }
  return (
    <main>
      <header
        className="min-h-screen bg-[#eff0ed] flex justify-center items-center"
        style={bgStyles}
      >
        <article className="text-center">
          <h1 className="text-[4rem] mb-[2rem] text-white">
            Shop the Latest Trends
          </h1>
          <p className="text-[2rem] text-center text-white">
            Explore a curated collection of fashion and electronics
          </p>
          <Link
            href="#"
            className="inline-block py-[0.5rem] px-[1.8rem] mt-[3rem] text-center border-2 transition-all duration-500 ease-in-out border-white text-white hover:bg-[#821f40] hover:text-white hover:border-none "
          >
            <button>Shop Now</button>
          </Link>
        </article>
      </header>
      <section className="bg-neutral-100 p-10">
        <h3 className="text-center text-xl mb-5 text-red-500 font-bold">
          Shop by Category
        </h3>
        <h1 className="text-center text-3xl mb-5 font-bold">
          Popular on the So9ify store
        </h1>
        <HomeProductsCards products={products} />
      </section>
    </main>
  )
}

// fetching the products
export async function getServerSideProps() {
  const products = await fetcher("")
  return { props: { products } }
}
