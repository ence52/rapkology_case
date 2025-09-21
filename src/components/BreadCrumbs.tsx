"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const crumbs = [
    { name: "Ana Sayfa", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");

      const name = segment.replace(/-/g, " ");
      return { name, href };
    }),
  ];

  return (
    <nav aria-label="breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={index} className={`${index !== 0 ? "ml-2" : ""}`}>
          <Link
            href={crumb.href}
            className=" hover:text-primary duration-500 uppercase mr-2"
          >
            {crumb.name}
          </Link>
          {index < crumbs.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
