import Image from "next/image";

export default function Home() {
  return (
    <div>
      <title>Steven</title>
      <main>
        <h1 className="flex text-3xl font-bold justify-center m-10">Steven</h1>
        <section className="flex justify-self-center justify-between mx-20 p-10 border-3 rounded-xl bg-white">
          <div className="justify-start self-center p-5 w-6/10">
            <p>
              First year Computer Science student at Cal Poly. Currently
              learning to build full-stack web applications with React, Next.js,
              and MongoDB through Hack4Impact.
            </p>
          </div>
          <div className="flex justify-end p-5 justify">
            <Image
              width={200}
              height={200}
              src="/IMG_20260510_121454_660.webp"
              alt="me"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

