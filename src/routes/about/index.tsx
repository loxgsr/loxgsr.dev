import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DevelopmentImage } from "~/components/development-image";

export default component$(() => {
  return (
    <div class="relative mx-auto mb-24 grid max-w-7xl grid-cols-4 items-center gap-x-4 py-8 sm:py-16 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8 lg:py-24">
      {/* SECCIÓN DE TEXTO */}
      <section class="order-2 col-span-full flex flex-col justify-center md:col-span-4 lg:order-1 lg:col-span-6">
        <h2 class="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          <span class="text-black dark:text-white">Hola, soy</span>{" "}
          <span class="dark:text-[#FF7675]">Gustavo</span>
          <span class="text-black dark:text-white">, desarrollador</span>{" "}
          <span class="dark:text-[#74B9FF]">Full Stack</span>
          <span class="text-black dark:text-white">.</span>
        </h2>

        <p class="mb-10 text-2xl leading-snug md:text-3xl">
          <span class="text-gray-700 dark:text-[#7BED9F]">Transformo</span>{" "}
          <span class="text-gray-700 dark:text-slate-300">
            ideas en soluciones digitales de alta calidad, creando software que
          </span>{" "}
          <span class="text-gray-700 dark:text-[#A29BFE]">
            marca la diferencia
          </span>
          <span class="text-gray-700 dark:text-slate-300">.</span>
        </p>

        {/* DETALLE EXTRA: FOCO ACTUAL */}
        <div class="flex items-center gap-5">
          {/* Figura: Un pequeño procesador o chip minimalista */}
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="shrink-0"
          >
            <rect
              x="5"
              y="5"
              width="14"
              height="14"
              rx="2"
              class="stroke-slate-400 dark:stroke-[#74B9FF]"
              stroke-width="1.5"
            />
            <path
              d="M9 2V5M15 2V5M9 19V22M15 19V22M2 9H5M2 15H5M19 9H22M19 15H22"
              class="stroke-slate-400 dark:stroke-[#74B9FF]"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle cx="12" cy="12" r="2.5" class="fill-[#FFD93D]" />
          </svg>

          <div class="flex flex-col border-l border-slate-200 pl-5 dark:border-slate-800">
            <span class="mb-1 text-xs font-bold tracking-[0.2em] uppercase dark:text-[#FF7675]">
              Más allá del código
            </span>
            <p class="text-lg font-medium ">
              Compartiendo conocimiento, aprendiendo constantemente y buscando
              formas de contribuir positivamente a la sociedad.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE IMAGEN */}
      <section class="order-1 col-span-full mb-12 flex items-center justify-center md:col-span-4 lg:order-2 lg:col-span-5 lg:col-start-8 lg:mb-0">
        <DevelopmentImage />
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About me | Gustavo | Full Stack Developer",
};
