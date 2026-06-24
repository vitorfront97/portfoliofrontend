import MainItem from "@/components/MainItem";

export default function Main() {
  return (
    <section className="mt-12 px-4 flex flex-col items-center gap-8">
      <h2 className="text-this-primary text-3xl font-this-playball">
        Um pouco do meu trabalho
      </h2>
      <div className="grid sm:grid-cols-[auto_auto] justify-center gap-4">
        <MainItem
          source="/works/1-sunny.webp"
          link="https://sunnyside-agency-landing-page-main-theta-black.vercel.app/"
        />
        <MainItem
          source="/works/2-loop.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        />
        <MainItem
          source="/works/3-digital.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        />
        <MainItem
          source="/works/4-bring.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        />
        <MainItem
          source="/works/5-copy.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        />
        <MainItem
          source="/works/6-remote.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        />
      </div>
    </section>
  );
};
