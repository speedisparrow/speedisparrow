import Image from "next/image";

export default function Contact() {
  return (
    <>
      <main>
        <h1 className="flex text-3xl font-bold justify-center m-10">
          My Contacts!
        </h1>
        <div className="flex flex-col justify-self-center justify-between mx-20 mb-20 p-10 border-3 rounded-xl bg-white">
          <a
            href="https://www.instagram.com/speedisparrow/"
            className="flex items-center gap-1"
          >
            <Image
              src="/instagram.svg"
              width={20}
              height={20}
              alt="instagram-icon"
              className="img scale-[0.8]"
            />
            <span className="pb-0.5">Instagram</span>
          </a>
          <a
            href="mailto:srmossma@calpoly.edu"
            className="flex items-center gap-1"
          >
            <Image
              src="/email.svg"
              width={20}
              height={20}
              alt="email-icon"
              className="img scale-[0.8]"
            />
            <span className="pb-1">srmossma@calpoly.edu</span>
          </a>
          <a
            href=""
            className="flex items-center gap-1"
          >
            <Image
              src="/email.svg"
              width={20}
              height={20}
              alt="github-icon"
              className="img scale-[0.8]"
            />
            <span className="pb-1">srmossma@calpoly.edu</span>
          </a>
        </div>
      </main>
    </>
  );
}
