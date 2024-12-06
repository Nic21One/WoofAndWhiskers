"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
    {
        id: 0,
        name: "Home",
        href: "/",
    },
    {
        id: 1,
        name: "All Products",
        href: "/products/all",
    },
    {
        id: 2,
        name: "F&B",
        href: "/products/fnb",
    },
    {
        id: 3,
        name: "Grooming",
        href: "/products/grooming",
    },
    {
        id: 4,
        name: "Accessories",
        href: "/products/accessories",
    },
    {
        id: 5,
        name: "Medications",
        href: "/products/medications",
    },
    {
        id: 6,
        name: "Cages",
        href: "/products/cages",
    },
    {
        id: 7,
        name: "Supplies",
        href: "/products/supplies",
    },
    {
        id: 8,
        name: "Decorations",
        href: "/products/decorations",
    },
];

export function NavbarLinks() {
    const location = usePathname();
    return (
        <div className="hidden md:flex justify-center items-center gap-x-3 ml-5">
            {navbarLinks.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.id} 
                    className={cn(
                        location === item.href
                            ? "bg-muted" 
                            :  "hover:bg-muted hover:bg-opacity-75", "group p-2 font-medium rounded-md"
                        )}
                    >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}