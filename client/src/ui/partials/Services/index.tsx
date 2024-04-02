import Card from "../../components/Card";
import { TbWorldCode } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <section className="w-full flex flex-col justify-end items-end">
      <span className="text-xl text-indigo-500 font-bold">
        Soluções Abrangentes Para Fortalecer Seu Negócio
      </span>
      <h2 className="text-3xl mb-6 font-bold">
        Oferecemos soluções completas para seu negócio
      </h2>
      <div className="w-full flex flex-wrap justify-center">
        <Card
          icon={<TbWorldCode />}
          title="Desenvolvimento de Websites Personalizados"
          description="Criação de websites personalizados para atender às suas necessidades únicas."
        />
        <Card
          icon={<IoRocket />}
          title="Otimização de Performance de Websites"
          description="Aprimoramento do desempenho e velocidade do seu site para uma experiência aprimorada do usuário."
        />
        <Card
          icon={<CiSettings />}
          title="Personalizações Avançadas"
          description="Personalizações avançadas para atender às suas necessidades específicas."
        />
        <Card
          icon={<MdSupportAgent />}
          title="Suporte Técnico Especializado"
          description="Suporte técnico especializado para manter seu site funcionando perfeitamente."
        />
        <Card
          icon={<FaSearch />}
          title="Estratégias de SEO Personalizadas"
          description="Estratégias de SEO adaptadas para melhorar a visibilidade e classificação do seu site."
        />
      </div>
    </section>
  );
};

export default Services;
