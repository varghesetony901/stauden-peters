"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={cn(
                "rounded-md border border-blue-500 bg-blue-500 px-3 py-1 text-white hover:bg-blue-600",
                {
                  "bg-transparent border border-black hover:bg-slate-200 text-black":
                    locale === "en",
                }
              )}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
