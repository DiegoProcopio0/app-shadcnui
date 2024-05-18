import { ModeToggle } from "@/components/mode-toggle";
import { TypeWriter } from "@/components/type-writer";
import { ProfileForm } from "@/components/profile-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`min-h-screen bg-card flex flex-col relative`}>
      <header
        className={`sticky top-0 z-50 w-full border-b border-border/40 hover:border-green-600
            bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
            flex items-center justify-around py-2 animation-transition h-12
        `}
      >
        <h3
          className={`text-card-foreground font-bold text-2xl hover:text-green-600 animation-transition select-none`}
        >
          <TypeWriter phrase="TabaFood" />
        </h3>
        <ModeToggle />
      </header>
      <main
        className={`h-full w-full p-10 items-center flex justify-around flex-wrap bg-card gap-8 flex-1`}
      >
        <section
          className={`text-card-foreground flex flex-col justify-center items-center max-w-96`}
        >
          <div className={`mb-4 flex flex-col justify-center items-center`}>
            <h1
              className={`text-card-foreground font-bold text-md hover:text-green-600 animation-transition text-center `}
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
        <section className="mb-8">
          <ProfileForm />
        </section>
      </main>
      <footer
        className={`static bottom-0 max-h-28 py-6 md:px-8 z-50 w-full border-t border-border/40 hover:border-green-600
        `}
      >
        <div
          className={`text-white font-bold text-2xl hover:text-green-600 animation-transition select-none`}
        >
          <div
            className={`
            text-opacity-50 text-balance text-center text-sm leading-loose text-muted-foreground md:text-left
          `}
          >
            <TypeWriter phrase="Powered by shadcn and Next" />
          </div>
        </div>
      </footer>
    </div>
  );
}
