import Image from 'next/image'

export default function ProductPage({ product }) {
    return (
        <section >
            <div className=' h-[670px] w-[580px] object-cover overflow-hidden ' >
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                />
            </div>


            <div className='flex flex-col gap-4 lg:w-2/4'>
                <p className='text-gray-500'>{product.category}</p>
                <h1 className='text-violet-600 text-3xl font-bold '>{product.title}</h1>
                <p className='text-gray-700'>{product.description} </p>
                <h4 className='text-2xl font-bold bg-grey-200 '>${product.price}</h4>
                <div></div>
                <div className='flex flex-row gap-10 ' >
                    <div className='flex flex-row   gap-2 items-center '>
                        <button className='bg-gray-200 rounded-lg py-4 px-6'>-</button>
                        <span className='bg-gray-200 rounded-lg py-4 px-6'>1</span>
                        <button className='bg-gray-200 rounded-lg py-4 px-6'>+</button>
                    </div>
                    <button className='bg-white w-full border-2 item-center '>Add To Cart</button>
                </div>
                <div>
                    <button className='bg-white w-full border-2 py-4 px-6 item-center '>Buy Now</button>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await response.json()

    return {
        props: {
            product,
        },
    }
}
