import MainItem from "@/components/MainItem";

export default function Main() {
  return (
    <section className="mt-12 px-4 flex flex-col items-center gap-8 lg:px-8 xl:px-0">
      <h2 className="text-this-primary text-3xl font-this-playball md:text-4xl">
        Um pouco do meu trabalho
      </h2>
      <div className="grid lg:grid-cols-[auto_auto] justify-center gap-4">
        <MainItem
          source="/works/1-sunny.webp"
          link="https://sunnyside-agency-landing-page-main-theta-black.vercel.app/"
        >
          Landing page desenvolvida para uma agência criativa fictícia, com foco em apresentação institucional, marketing digital e experiência do usuário. O projeto foi construído utilizando Next.js e Tailwind CSS, priorizando performance, responsividade e boas práticas de desenvolvimento Front-End. A aplicação conta com estrutura semântica de HTML, otimização para mecanismos de busca (SEO) e recursos de acessibilidade para garantir navegação eficiente em diferentes dispositivos e contextos de uso.
        </MainItem>
        <MainItem
          source="/works/2-loop.webp"
          link="https://loopstudios-landing-page-main-rosy.vercel.app/"
        >
          Website institucional desenvolvido para uma empresa fictícia especializada em experiências imersivas e realidade virtual. O projeto foi construído com Next.js e Tailwind CSS, priorizando performance, responsividade e fidelidade visual ao design proposto. A aplicação apresenta uma estrutura moderna de navegação, galeria de projetos e seções institucionais, utilizando boas práticas de SEO e acessibilidade para garantir uma experiência consistente em diferentes dispositivos.
        </MainItem>
        <MainItem
          source="/works/3-digital.webp"
          link="https://digitalbank-landing-page-master-xi.vercel.app/"
        >
          Landing page desenvolvida para uma fintech fictícia focada em serviços bancários digitais. O projeto foi construído com Next.js e Tailwind CSS, priorizando performance, experiência do usuário e otimização para mecanismos de busca. A aplicação apresenta uma interface moderna para divulgação de produtos financeiros, utilizando design responsivo, estrutura semântica e boas práticas de acessibilidade para garantir navegação eficiente em diferentes dispositivos.
        </MainItem>
        <MainItem
          source="/works/4-bring.webp"
          link="https://manage-landing-page-master-bay-tau.vercel.app/"
        >
          Website institucional desenvolvido para uma plataforma SaaS fictícia voltada para gestão de projetos e produtividade de equipes. O projeto foi construído utilizando Next.js e Tailwind CSS, com foco em performance, responsividade e organização de conteúdo. A aplicação apresenta recursos da plataforma de forma clara e objetiva, utilizando uma estrutura moderna de landing page voltada para apresentação de produtos digitais e conversão de usuários.
        </MainItem>
        <MainItem
          source="/works/5-copy.webp"
          link="https://clipboard-landing-page-master-seven-red.vercel.app/"
        >
          Landing page desenvolvida para uma aplicação fictícia de gerenciamento e sincronização de área de transferência (clipboard) entre dispositivos. O projeto foi construído com Next.js e Tailwind CSS, focando em performance, organização visual e experiência do usuário. A interface apresenta recursos do produto de forma clara e objetiva, utilizando uma estrutura moderna voltada para divulgação de software e conversão de usuários.
        </MainItem>
        <MainItem
          source="/works/6-remote.webp"
          link="https://intro-section-with-dropdown-navigat-seven.vercel.app/"
        >
          Aplicação desenvolvida para uma plataforma fictícia de trabalho remoto e produtividade. O principal foco do projeto foi a implementação de uma navegação responsiva com menus dropdown interativos, adaptados para desktop e dispositivos móveis. A solução foi construída com Next.js e Tailwind CSS, seguindo boas práticas de acessibilidade, SEO e experiência do usuário, garantindo navegação intuitiva em diferentes contextos de uso.
        </MainItem>
      </div>
    </section>
  );
};
