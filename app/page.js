import Link from "next/link"
import "../components/bg.css"

export default function Home() {
  return (
    <main className="h-screen grid place-items-center px-5 w-full">
      <section className="grid place-items-center gap-y-9">
      <h1 className='text-5xl text-center text-[#ae802e]'>Make your order</h1>
      <Link href={"/order"}><div className="bg-[#894c0a] p-2 rounded-lg
      hover:scale-110 duration-150">Start now</div></Link>
      </section>
    </main>
  )
}
