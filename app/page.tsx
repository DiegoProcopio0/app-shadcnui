import { TypeWriter } from "@/components/TypeWriter";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`min-h-screen bg-[#09090b]`}>
      <header
        className={`sticky top-0 z-50 w-full border-b border-border/40 hover:border-green-600
            bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
            flex items-center justify-center py-2 animation-transition h-12
        `}
      >
        <h3
          className={`text-white font-bold text-2xl hover:text-green-600 animation-transition select-none`}
        >
          <TypeWriter phrase="TabaFood" />
        </h3>
      </header>
      <main className={`p-10 flex flex-col justify-center items-center`}>
        <section
          className={`text-white flex flex-col justify-center items-center`}
        >
          <div className={`mb-4 flex flex-col justify-center items-center`}>
            <h1
              className={`text-white font-bold text-md hover:text-green-600 animation-transition text-center`}
            >
              <strong>TabaFood</strong>a melhor solução para quem vende e
              consome itens de tabacaria!
            </h1>
            <p className={`text-sm text-center my-1`}>
              Compre e venda produtos relacionados a tabacaria de um jeito fácil
              e rápido!
            </p>
          </div>
          <Image
            className={`shadow-xl hover:shadow-green-600 animation-transition rounded-xl`}
            src="/narga.jpeg"
            alt="Imagem de um narguilé"
            width={300}
            height={300}
          />
        </section>
      </main>
    </div>
  );
}
