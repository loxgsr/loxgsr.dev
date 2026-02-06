import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import Hamburger from "hamburger-qwik";
import { ThemeToggle } from "../theme-toggle";

const routes = [
  { name: "Home", path: "/", icon: "🏡" },
  { name: "Blog", path: "/blog/", icon: "📖" },
  { name: "Projects", path: "/projects/", icon: "🚀" },
  { name: "About me", path: "/about/", icon: "👦" },
];

export const Navbar = component$(() => {
  const isOpen = useSignal(false);
  const loc = useLocation();
  return (
    <>
      <header
        class={`absolute h-auto w-full ${isOpen.value && "bg-[#F7F6F3] dark:bg-gray-900"} top-0`}
      >
        <nav class="relative z-50 px-[24px] py-6 font-semibold sm:px-[32px] sm:py-8 lg:px-[48px]">
          {/* Hamburger menu para móvil */}
          <div class="flex w-full justify-end pt-[24px] sm:hidden">
            <Hamburger toggle={isOpen} />
          </div>

          {/* Layout desktop: flexbox con 3 secciones */}
          <div class="hidden sm:my-[20px] sm:flex sm:items-center">
            {/* Espacio izquierdo */}
            <div class="flex-1"></div>

            {/* Links centrados */}
            <ul class="flex flex-row items-center gap-[45px] text-[18px] uppercase lg:gap-[45px]">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    class={{
                      "text-[#F59E0B] dark:text-[#FCD34D]":
                        loc.url.pathname === route.path,
                    }}
                  >
                    {route.name} <span class="font-normal">{route.icon}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Toggle a la derecha */}
            <div class="flex flex-1 justify-end">
              <ThemeToggle />
            </div>
          </div>

          {/* Layout móvil: menú hamburguesa */}
          <ul
            class={`${
              isOpen.value ? "flex" : "hidden"
            } w-full flex-col items-center gap-[36px] py-[32px] text-center text-[18px] uppercase sm:hidden`}
          >
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  onClick$={() => {
                    // Cerrar el menú móvil al hacer clic en un link
                    isOpen.value = false;
                  }}
                  class={{
                    "text-[#F59E0B] dark:text-[#FCD34D]":
                      loc.url.pathname === route.path,
                  }}
                >
                  {route.name} <span class="font-normal">{route.icon}</span>
                </Link>
              </li>
            ))}

            {/* Toggle en móvil */}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </header>
      <div class="h-[120px] sm:h-[140px]"></div>
    </>
  );
});
