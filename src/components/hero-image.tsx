import { component$ } from "@builder.io/qwik";

export const HeroImage = component$(() => {
  return (
    <figure class="w-full transition duration-200 sm:max-w-[320px] lg:max-w-md xl:max-w-full">
      <svg
        width="412"
        height="412"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hero-svg vov fade-in-right aspect-square h-full w-full rounded-xl transition duration-200"
      >
        {/* --- LIGHT MODE --- */}
        <g class="light-mode">
          {/* Grupo Círculos 1 */}
          <g class="ani-float">
            <circle
              cx="100"
              cy="80"
              r="50"
              fill="none"
              stroke="#E63946"
              stroke-width="3"
            />
            <circle
              cx="100"
              cy="80"
              r="35"
              fill="none"
              stroke="#E63946"
              stroke-width="2"
              opacity="0.8"
            />
          </g>

          <circle
            cx="300"
            cy="120"
            r="45"
            fill="none"
            stroke="#0052CC"
            stroke-width="3"
            class="ani-float-slow"
          />

          <rect
            x="150"
            y="200"
            width="60"
            height="60"
            fill="none"
            stroke="#00A651"
            stroke-width="3"
            rx="5"
            class="ani-float-alt"
          />

          <polygon
            points="320,300 360,360 280,360"
            fill="none"
            stroke="#6A0DAD"
            stroke-width="3"
            class="ani-float"
          />

          <line
            x1="50"
            y1="340"
            x2="180"
            y2="340"
            stroke="#FF6B35"
            stroke-width="4"
            class="ani-pulse"
          />
          <line
            x1="220"
            y1="320"
            x2="350"
            y2="320"
            stroke="#00897B"
            stroke-width="3"
            opacity="0.9"
            class="ani-float-slow"
          />

          {/* Núcleo Central */}
          <g class="ani-pulse">
            <circle cx="200" cy="200" r="8" fill="#E63946" />
            <circle
              cx="200"
              cy="200"
              r="15"
              fill="none"
              stroke="#E63946"
              stroke-width="2"
              opacity="0.8"
            />
          </g>

          <circle
            cx="80"
            cy="280"
            r="30"
            fill="none"
            stroke="#FF6B35"
            stroke-width="3"
            class="ani-float-slow"
          />
          <rect
            x="320"
            y="250"
            width="40"
            height="40"
            fill="none"
            stroke="#0052CC"
            stroke-width="3"
            rx="3"
            class="ani-float-alt"
          />
        </g>

        {/* --- DARK MODE --- */}
        <g class="dark-mode" style="display: none;">
          <g class="ani-float">
            <circle
              cx="100"
              cy="80"
              r="50"
              fill="none"
              stroke="#FF7675"
              stroke-width="3"
            />
            <circle
              cx="100"
              cy="80"
              r="35"
              fill="none"
              stroke="#FF7675"
              stroke-width="2"
              opacity="0.75"
            />
          </g>

          <circle
            cx="300"
            cy="120"
            r="45"
            fill="none"
            stroke="#74B9FF"
            stroke-width="3"
            class="ani-float-slow"
          />

          <rect
            x="150"
            y="200"
            width="60"
            height="60"
            fill="none"
            stroke="#7BED9F"
            stroke-width="3"
            rx="5"
            class="ani-float-alt"
          />

          <polygon
            points="320,300 360,360 280,360"
            fill="none"
            stroke="#A29BFE"
            stroke-width="3"
            class="ani-float"
          />

          <line
            x1="50"
            y1="340"
            x2="180"
            y2="340"
            stroke="#FFD93D"
            stroke-width="4"
            class="ani-pulse"
          />
          <line
            x1="220"
            y1="320"
            x2="350"
            y2="320"
            stroke="#6BCB77"
            stroke-width="3"
            class="ani-float-slow"
          />

          <g class="ani-pulse">
            <circle cx="200" cy="200" r="8" fill="#FF7675" />
            <circle
              cx="200"
              cy="200"
              r="15"
              fill="none"
              stroke="#FF7675"
              stroke-width="2"
              opacity="0.75"
            />
          </g>

          <circle
            cx="80"
            cy="280"
            r="30"
            fill="none"
            stroke="#FFD93D"
            stroke-width="3"
            class="ani-float-slow"
          />
          <rect
            x="320"
            y="250"
            width="40"
            height="40"
            fill="none"
            stroke="#74B9FF"
            stroke-width="3"
            rx="3"
            class="ani-float-alt"
          />
        </g>
      </svg>
    </figure>
  );
});
