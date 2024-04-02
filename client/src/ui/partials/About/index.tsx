import AboutImg from "../../assets/aboutimg.webp";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <span className="text-2xl text-indigo-500 font-bold">
        Soluções digitais sob medida
      </span>
      <h2 className="text-4xl mb-6">Defina sua presença digital conosco</h2>
      <div className="w-full flex flex-wrap justify-center">
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-4 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-indigo-500">+ de 5</span>
              <h3 className="text-xl font-semibold mt-2">
                Sites criados do ZERO
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Soluções web feitas sob medida, cada uma delas uma vitrine
                digital do seu negócio.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-4 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-indigo-500">
                + de 18
              </span>
              <h3 className="text-xl font-semibold mt-2">
                Projetos Concluídos
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Executados com maestria em diversas tecnologias e plataformas.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-6">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-4 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-indigo-500">
                + de 26
              </span>
              <h3 className="text-xl font-semibold mt-2">
                Clientes Satisfeitos
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Pelo mundo com suas expectativas superadas e suas marcas
                fortalecidas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="max-w-xl lg:w-full lg:mr-16 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Personalizando o amanhã digital
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Em 2023, a JeffLds DEV surgiu com uma missão singular: impulsionar
            empresas em todo o Brasil para o cenário digital, oferecendo não
            apenas sites, mas plataformas que se destacam e geram resultados
            tangíveis. Especializados em desenvolvimento de websites
            corporativos e landing pages, nós da JeffLds DEV nos destacamos não
            apenas por atrair visitantes, mas por converter leads em clientes
            fiéis. Somos a força motriz por trás de soluções web que capturam a
            essência e as aspirações individuais de cada marca, empresa ou
            profissional. Aqui, cada projeto transcende a mera entrega; é a
            concretização da visão digital de nossos clientes, moldada com
            habilidade técnica e uma abordagem estética inovadora.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
            Vamos Criar o Seu?
          </button>
        </div>
        <div className="max-w-xl lg:w-1/3">
          <img src={AboutImg} alt="Imagem" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
