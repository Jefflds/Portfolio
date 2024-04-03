import Project from "../../components/Project";

const Stacks = [
  [
    "ReactJS",
    "Typescript",
    "Bootstrap",
    "Styled Components",
    "NodeJS",
    "Express",
    "MySQL",
    "MongoDB",
  ],
  ["ReactJS", "Typescript", "Bootstrap", "Styled Components"],
  ["ReactJS", "Typescript", "Bootstrap", "Styled Components"],
  ["WIX"],
  [
    "ReactJS",
    "Typescript",
    "Bootstrap",
    "Styled Components",
    "NodeJS",
    "Express",
    "MySQL",
  ],
  [
    "ReactJS",
    "Typescript",
    "Bootstrap",
    "Styled Components",
    "NodeJS",
    "Adonis",
    "Firebase",
  ],
];

const Projects = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-12 pt-12 lg:pb-24 lg:pt-24"
      id="projects"
    >
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-indigo-500 font-bold mb-4">
          Projetos Reais
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Descubra a inovação autêntica em soluções de problemas
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 px-4 sm:px-8 lg:px-16 xl:px-20 w-full">
        <Project
          type="Feito do Zero"
          title="HastyDEV - Uma plataforma de Desenvolvedores para Desenvolvedores"
          stacks={Stacks[0]}
          description="A HastyDEV é uma plataforma projetada com o propósito de simplificar e facilitar a colaboração entre desenvolvedores, Microempreendedores Individuais (MEIs) e Organizações Não Governamentais (ONGs) no mercado de desenvolvimento de software. Esta plataforma oferece oportunidades únicas para todos os envolvidos, tornando-se um centro de convergência para criar soluções tecnológicas, promover o crescimento de portfólios e incentivar a participação através de um sistema gamificado."
          link="https://hasty-dev.vercel.app/"
        />
        <Project
          type="Feito do Zero"
          title="Pedtech - O seu portal de Propaganda Eletrônica Digital"
          stacks={Stacks[1]}
          description="O Pedtech emergiu da necessidade dos empreendores mais simples de ter uma forma descomplicada e eficiente de anunciar suas lojas e na consequência disto aumentar suas vendas em tua região. O website foi desenmvolvido visando ser rápido, possuir um excelente SEO e ter um design simples, com foco no acesso dos links do cliente."
          link="https://techsapp-pedtech.vercel.app/"
        />
        <Project
          type="Feito do Zero"
          title="Loucura Amor - O Seu Site de Telemensagens"
          stacks={Stacks[2]}
          description="Demonstre todo seu amor através de palavras que tocam o coração, dedicamos-nos a expressar sentimentos profundos. Nossas mensagens capturam a essência do amor. Surpreenda e encante aqueles que você ama, trazendo o amor das palavras à vida. O site do Loucura Amor foi desenvolvido como forma de divulgação dos milhares de áudios."
          link="https://www.loucuraamor.com.br/"
        />
        <Project
          type="Edição no Layout"
          title="Ong Superar - O Seu Site de Telemensagens"
          stacks={Stacks[3]}
          description="Projeto Voluntário, na qual foi feito a edição e o redesenho do layout da página de maneira voluntária."
          link="https://www.ongsuperar.org.br/"
        />
        <Project
          type="Em Andamento"
          title="Império Apple - Catológo Digital"
          stacks={Stacks[4]}
          description="Site projetado para a empresa Império Apple, utilizando do SAAS desenvolvido pela HastyDEV, com o objetivo de divulgar os produtos vendidos pela loja."
          link="https://www.ongsuperar.org.br/"
        />
        <Project
          type="Em Andamento"
          title="HastyBarber - Sistema de Agendamento e Gerenciamento para Barbeiros"
          stacks={Stacks[5]}
          description="SAAS Desenvolvida com o objetivo de criar um facilitador para o dia-a-dia dos barbeiros, com um sistema simples de agendamento de atendimentos e um dashboard com relatórios completos"
          link="https://hastybarber.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
