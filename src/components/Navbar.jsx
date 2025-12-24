import { useEffect, useState } from "react";

const sections = ["About", "Skills", "Projects", "Profiles", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      for (const sec of sections) {
        const el = document.getElementById(sec.toLowerCase());
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive((prev) => (prev !== sec ? sec : prev));
          break;
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="
        fixed top-6 left-1/2 -translate-x-1/2 z-50
        bg-white border border-[#E7DED3]
        rounded-full px-10 py-3
        shadow-md
      "
    >
      <ul className="flex gap-8 text-sm font-medium">
        {sections.map((link) => {
          const isActive = active === link;

          return (
            <li
              key={link}
              className={`
                relative cursor-pointer transition-colors
                ${isActive
                  ? "text-[#D4A373]"
                  : "text-[#6B7280] hover:text-[#2B2B2B]"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#D4A373]
                after:transition-all
                ${isActive ? "after:w-full" : "after:w-0"}
                hover:after:w-full
              `}
              onClick={() =>
                document
                  .getElementById(link.toLowerCase())
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {link}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
