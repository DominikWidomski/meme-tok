"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLink = {
  path: string;
  title: string;
};

const prefixPaths = (links: NavLink[], pathPrefix: string) =>
  links.map((link) => ({
    ...link,
    path: `${pathPrefix}${link.path}`,
  }));

function MainNav({
  className,
  pathPrefix = "",
  ...props
}: React.HTMLAttributes<HTMLElement> & { pathPrefix?: string }) {
  const pathname = usePathname();

  const links = useMemo(() => {
    return prefixPaths(
      [
        {
          path: `/scroll`,
          title: "Memes",
        },
        {
          path: `/likes`,
          title: "Likes",
        },
      ],
      pathPrefix
    );
  }, [pathPrefix]);

  return (
    <nav
      className={cn(
        "flex items-center justify-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      {links.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            href={link.path}
            key={link.path}
            className={cn(
              "pb-2 text-sm font-medium transition-colors hover:text-accent",
              isActive ? "border-b-2" : "text-muted"
            )}
          >
            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default MainNav;
