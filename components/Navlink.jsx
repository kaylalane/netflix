"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  return (
    <li>
      <Link href={link.link} className={isActive ? "text-white" : "text-slate-300"}>
      {link.label}</Link>
    </li>
  );
};

export default SidebarLink;
