import Image from "next/image";

export default function Contact() {
  return (
    <>
      <main>
        <h1 className="flex text-3xl font-bold justify-center m-10">
          My Contacts!
        </h1>
        <div className="flex flex-col justify-self-center justify-between mx-20 mb-20 p-10 border-3 rounded-xl bg-white">
          <p> Check out what I&apos;m up to, or shoot me a message!</p>
          <br />
          <div className="grid grid-cols-3 gap-2">
            <a
              href="https://www.instagram.com/speedisparrow/"
              className="flex items-center gap-1 bg-purple-100 border-2 rounded-xl p-0.5 justify-center"
              target="_blank"
            >
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="instagram-icon"
                className="img scale-[0.8]"
              />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/steven-mossman510/"
              className="flex items-center gap-1 bg-blue-100 border-2 rounded-xl p-0.5 justify-center"
              target="_blank"
            >
              <Image
                src="/LinkedIn_icon.webp"
                width={20}
                height={20}
                alt="LinkedIn-icon"
                className="img scale-[0.8]"
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:srmossma@calpoly.edu"
              className="flex items-center gap-1 bg-red-100 border-2 rounded-xl p-0.5 justify-center"
              target="_blank"
            >
              <Image
                src="/email.svg"
                width={20}
                height={20}
                alt="github-icon"
                className="img scale-[0.8]"
              />
              <span>Email</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
