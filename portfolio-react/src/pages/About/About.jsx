import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold">Aditya Ranjan Sahoo</span>, a
                passionate MCA student and MERN Stack Developer with a strong interest in
                building modern, scalable, and user-friendly web applications. I enjoy
                transforming ideas into functional digital solutions using the latest web
                technologies.
              </p>

              <p className="text-white">
                My core expertise lies in the MERN stack — MongoDB, Express.js, React.js,
                and Node.js — along with solid knowledge of JavaScript, HTML, CSS,
                Bootstrap, and Tailwind CSS. I focus on writing clean code, creating
                responsive interfaces, and delivering smooth user experiences.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I am a continuous learner who believes that technology evolves every
                    day. My goal is to grow as a full-stack developer by strengthening my
                    backend skills and building real-world applications that solve
                    meaningful problems. I’m driven by curiosity, consistency, and a strong
                    desire to improve with every project I create.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aditya Ranjan Sahoo
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">
                        MCA Student & MERN Stack Developer
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
