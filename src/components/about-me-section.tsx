import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="grid grid-cols-1 items-center gap-y-6 py-14 sm:gap-y-12 sm:py-24 lg:py-36 xl:grid-cols-12">
      <section class="col-span-1 flex w-full items-center justify-start xl:col-span-5 xl:justify-center">
        <figure class="w-full max-w-[320px] transition duration-200 sm:max-w-[380px] md:max-w-[420px] lg:max-w-full">
          <img
            width={412}
            height={412}
            class="vov fade-in-right w-full rounded-xl transition duration-200"
            src="/crazy8.png"
            alt="gustavoca image"
          />
        </figure>
      </section>
      <section class="col-span-1 mx-auto space-y-4 text-left xl:col-span-5 xl:col-start-7">
        <h2 class="text-2xl leading-snug font-semibold lg:text-4xl">
          Hola, soy Gustavo. Me gusta ayudar a las personas a través del
          software.
        </h2>
        <h3 class="text-2xl leading-snug text-gray-600 lg:text-4xl dark:text-gray-300">
          Soy un gran apasionado a los deportes extremos. Disfruto de la calma
          en casa, suelo estar leyendo libros, y editando videos, me gusta mucho
          aprender cosas nuevas cuando estoy aburrido.
        </h3>
      </section>
    </section>
  );
});
