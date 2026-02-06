import { component$ } from "@builder.io/qwik";

export const DevelopmentImage = component$(() => {
  return (
    <figure class="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[450px] transition-all duration-300">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="h-full w-full rounded-2xl transition-all duration-300 shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]"
      >
        {/* Fondo sutil con desenfoque */}
        <rect
          width="400"
          height="400"
          rx="24"
          class="fill-slate-50/80 dark:fill-slate-900/50 backdrop-blur-sm"
        />

        {/* Borde técnico de 1px */}
        <rect
          x="0.5"
          y="0.5"
          width="399"
          height="399"
          rx="23.5"
          class="stroke-slate-200 dark:stroke-slate-800"
          stroke-width="1"
        />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .floating { animation: float 5s ease-in-out infinite; }
          .floating-delayed { animation: float 6s ease-in-out 1s infinite; }
          .floating-slow { animation: float 8s ease-in-out 2s infinite; }
        `}</style>

        <g text-anchor="middle" dominant-baseline="central" class="font-mono">

          {/* NÚCLEO: Blanco/Negro Puro */}
          <text
            x="200" y="200"
            font-size="64"
            font-weight="bold"
            class="fill-black dark:fill-white"
          >
            &lt;/&gt;
          </text>

          {/* SÍMBOLOS CON COLORES DE SINTAXIS */}
          {/* Esquina Superior Derecha: Objetos (Teal) */}
          <g class="floating">
            <text x="310" y="110" font-size="36" class="fill-teal-500 dark:fill-teal-400 opacity-90">{"{ }"}</text>
          </g>

          {/* Esquina Inferior Izquierda: Arrays (Amber/Green) */}
          <g class="floating-delayed">
            <text x="90" y="290" font-size="36" class="fill-amber-500 dark:fill-amber-400 opacity-90">[ ]</text>
          </g>

          {/* Flecha de Función (Pink) */}
          <g class="floating-slow">
            <text x="290" y="220" font-size="30" class="fill-pink-500 dark:fill-pink-400 opacity-80">=&gt;</text>
          </g>

          {/* Paréntesis (Indigo/Blue) */}
          <g class="floating">
            <text x="110" y="190" font-size="30" class="fill-indigo-500 dark:fill-indigo-400 opacity-80">( )</text>
          </g>

          {/* Marcadores de código (Slate/Blue) */}
          <g class="font-bold opacity-40">
            <text x="90" y="70" font-size="20" class="fill-blue-500 dark:fill-blue-400">&lt;code&gt;</text>
            <text x="310" y="330" font-size="20" class="fill-blue-500 dark:fill-blue-400">&lt;/code&gt;</text>
          </g>

          {/* Decoración extra sutil */}
          <g class="opacity-20 fill-slate-500 dark:fill-slate-400">
            <text x="200" y="50" font-size="16">import</text>
            <text x="200" y="350" font-size="16">export default</text>
            <text x="350" y="200" font-size="16" transform="rotate(90, 350, 200)">const</text>
            <text x="50" y="200" font-size="16" transform="rotate(-90, 50, 200)">async</text>
          </g>
        </g>
      </svg>
    </figure>
  );
});