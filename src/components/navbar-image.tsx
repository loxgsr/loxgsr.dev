import { component$ } from '@builder.io/qwik';

export const NavbarImage = component$(() => {
  return (
    <figure class="w-[60px] h-[60px] flex items-center justify-center">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
      >
        <defs>
          <linearGradient id="lemonGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFE135" />
            <stop offset="100%" stop-color="#FDD835" />
          </linearGradient>
          <linearGradient id="lemonGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFEB3B" />
            <stop offset="100%" stop-color="#FDD835" />
          </linearGradient>
        </defs>

        {/* Light mode - Lemon */}
        <g class="light-mode">
          {/* Main lemon shape */}
          <ellipse cx="30" cy="25" rx="18" ry="20" fill="url(#lemonGradientLight)" stroke="#F9C30A" stroke-width="1.5"/>
          
          {/* Bottom point of lemon */}
          <path d="M 25 42 Q 30 48 35 42 Z" fill="url(#lemonGradientLight)" stroke="#F9C30A" stroke-width="1.5"/>
          
          {/* Leaf details */}
          <ellipse cx="45" cy="12" rx="8" ry="12" fill="#4CAF50" stroke="#3A8B40" stroke-width="1" opacity="0.85" transform="rotate(35 45 12)"/>
          
          {/* Leaf vein */}
          <line x1="45" y1="5" x2="45" y2="19" stroke="#3A8B40" stroke-width="0.8" opacity="0.7"/>
          
          {/* Highlight */}
          <ellipse cx="24" cy="18" rx="6" ry="8" fill="white" opacity="0.4"/>
          
          {/* Shadow/depth */}
          <ellipse cx="30" cy="30" rx="14" ry="8" fill="none" stroke="#E8B504" stroke-width="0.8" opacity="0.5"/>
        </g>

        {/* Dark mode - Lemon */}
        <g class="dark-mode" style="display: none;">
          {/* Main lemon shape */}
          <ellipse cx="30" cy="25" rx="18" ry="20" fill="url(#lemonGradientDark)" stroke="#FFEB3B" stroke-width="1.5"/>
          
          {/* Bottom point of lemon */}
          <path d="M 25 42 Q 30 48 35 42 Z" fill="url(#lemonGradientDark)" stroke="#FFEB3B" stroke-width="1.5"/>
          
          {/* Leaf details */}
          <ellipse cx="45" cy="12" rx="8" ry="12" fill="#66BB6A" stroke="#43A047" stroke-width="1" opacity="0.9" transform="rotate(35 45 12)"/>
          
          {/* Leaf vein */}
          <line x1="45" y1="5" x2="45" y2="19" stroke="#43A047" stroke-width="0.8" opacity="0.8"/>
          
          {/* Highlight */}
          <ellipse cx="24" cy="18" rx="6" ry="8" fill="white" opacity="0.3"/>
          
          {/* Shadow/depth */}
          <ellipse cx="30" cy="30" rx="14" ry="8" fill="none" stroke="#FFEB3B" stroke-width="0.8" opacity="0.6"/>
        </g>

        <style>{`
          @media (prefers-color-scheme: dark) {
            .light-mode { display: none; }
            .dark-mode { display: block !important; }
          }
        `}</style>
      </svg>
    </figure>
  );
});
