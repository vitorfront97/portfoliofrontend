export default function Skills() {
  return (
    <section className="mt-16 p-8 px-64 flex flex-col gap-8 items-center">
      <div className="w-full flex flex-col gap-12">
      <h2 className="text-this-primary text-5xl font-this-oleoScript">Skills</h2>
      
      <section className="flex justify-between">
        <article className="flex flex-col gap-4">
          <span className="text-this-text text-3xl font-this-play font-bold">Web design</span>
          <ul>
            <li className="text-this-secondary text-xl">UI/UX Design</li>
            <li className="text-this-secondary text-xl">Design responsivo</li>
            <li className="text-this-secondary text-xl">Wireframing</li>
          </ul>
        </article>
        <article className="flex flex-col gap-4">
          <span className="text-this-text text-3xl font-this-play font-bold">Frontend</span>
          <ul>
            <li className="text-this-secondary text-xl">JavaScript</li>
            <li className="text-this-secondary text-xl">Next.js</li>
            <li className="text-this-secondary text-xl">Tailwind CSS</li>
          </ul>
        </article>
        <article className="flex flex-col gap-4">
          <span className="text-this-text text-3xl font-this-play font-bold">Backend</span>
          <ul>
            <li className="text-this-secondary text-xl">Node.js</li>
            <li className="text-this-secondary text-xl">MongoDB</li>
            <li className="text-this-secondary text-xl">Express.js</li>
          </ul>
        </article>
        <article className="flex flex-col gap-4">
          <span className="text-this-text text-3xl font-this-play font-bold">Soft skills</span>
          <ul>
            <li className="text-this-secondary text-xl">Trabalho em equipe</li>
            <li className="text-this-secondary text-xl">Resiliência</li>
            <li className="text-this-secondary text-xl">Proatividade</li>
          </ul>
        </article>
      </section>
      </div>
    </section>
  );
};