import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(productCategory: string) {
    switch(productCategory) {
        case "all": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                },
            });
            return {
                title: "All Products",
                data: data,
            };
        }
        case "fnb": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "fnb",
                },
            });
            return {
                title: "Products for F&B",
                data: data,
            }
        }
        case "grooming": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "groomingEquipment",
                },
            });
            return {
                title: "Products for Grooming",
                data: data,
            }
        }
        case "accessories": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "accessories",
                },
            });
            return {
                title: "Products for Accessories",
                data: data,
            }
        }
        case "medications": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "medications",
                },
            });
            return {
                title: "Products for Medications",
                data: data,
            }
        }
        case "cages": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "cages",
                },
            });
            return {
                title: "Products for Cages",
                data: data,
            }
        }
        case "supplies": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "supplies",
                },
            });
            return {
                title: "Products for Supplies",
                data: data,
            }
        }
        case "decorations": {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    images: true,
                    price: true,
                    id: true,
                    description: true,
                },
                where: {
                    status: "published",
                    category: "decorations",
                },
            });
            return {
                title: "Products for Decorations",
                data: data,
            }
        }
        default: {
            return notFound()
        }
    }
}

export default async function CategoriesPage({
        params,
    }: {
        params: {name: string};
    }) {
    const {data, title} = await getData(params.name)
    return (
        <section>
            <h1 className="font-semibold text-3xl my-5">{title}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((item) => (
                    <ProductCard key={item.id} item={item}/>
                ))}
            </div>
        </section>
    );
}