export default function About() {
  return (
    <section className="mt-16 p-8 px-64 flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-12">
        <h2 className="text-this-primary text-5xl font-this-oleoScript">
          Minha história
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-this-text text-xl">
            Sou desenvolvedor front-end com foco em Next Js e Tailwind CSS.
            Tenho contato com programação desde 2020 quando iniciei meus
            primeiros estudos em lógica de programação com Python, o que me fez
            decidir que era isso o que buscaria para minha carreira dali em
            diante.
          </p>
          <p className="text-this-text text-xl">
            Além do portfólio front-end, tenho alguns projetos back-end, desde
            sistemas de login com uso de cookies em sessões, até uma aplicação
            que permite que o usuário salve contatos em um tipo de agenda, com
            banco de dados Mongo DB. Também já criei projetos com banco de dados
            relacional.
          </p>
          <p className="text-this-text text-xl">
            Procuro um trabalho que me desafie a aprender novas tecnologias e
            novas formas de criar aplicações.
          </p>
        </div>
      </div>
    </section>
  );
}
