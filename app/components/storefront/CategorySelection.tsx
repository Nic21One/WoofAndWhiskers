import Image from "next/image";
import Link from "next/link";
import all from "@/public/cat.jpg";
import fnb from "@/public/pet fnb.jpg";
import grooming from "@/public/grooming equipment.jpg";
import accessories from "@/public/pet accessories.jpg";
import medications from "@/public/pet prescription medications.jpg";
import cages from "@/public/pet cages.jpg";
import supplies from "@/public/pet supplies.jpg";
import decorations from "@/public/pet decoration.jpg";

export function CategoriesSelection() {
    return (
        <div className="py-24 sm:py-32">
            <h1 className="text-3xl text-center font-extrabold tracking-tight">
                Product Categories
            </h1>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:grid-rows-1 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-10 aspect-h-3 rounded-xl overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={all}
                        alt="All Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/all">
                            <h3 className="text-white font-semibold">All Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">

                <h2 className="text-xl font-bold tracking-tight">
                    Shop by Primary Category
                </h2>
                <Link
                    className="text-sm font-semibold text-primary hover:text-yellow-500"
                    href="/products/all"
                >
                    Browse all Products &rarr;
                </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={fnb}
                        alt="Foods and Beverages Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/fnb">
                            <h3 className="text-white font-semibold">Foods and Beverages</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={supplies}
                        alt="supplies Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/supplies">
                            <h3 className="text-white font-semibold">Supplies Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={medications}
                        alt="Medications Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/medications">
                            <h3 className="text-white font-semibold">Medication Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <h2 className="text-xl font-bold tracking-tight">
                    Shop by Secondary Category
                </h2>
                <Link
                    className="text-sm font-semibold text-primary hover:text-yellow-500"
                    href="/products/all"
                >
                    Browse all Products &rarr;
                </Link>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-y-6 sm:grid-cols-4 sm:grid-rows-1 sm:gap-x-6 lg:gap-8">
                <div className="group aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={accessories}
                        alt="Accessories Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/accessories">
                            <h3 className="text-white font-semibold">Accessories Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={cages}
                        alt="Cages Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/cages">
                            <h3 className="text-white font-semibold">Cages Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={grooming}
                        alt="Grooming Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/grooming">
                            <h3 className="text-white font-semibold">Grooming Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
                <div className="group aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:h-full">
                    <Image
                        src={decorations}
                        alt="Decorations Products Image"
                        className="object-center object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
                    />
                    <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
                    <div className="p-6 flex items-end">
                        <Link href="/products/decorations">
                            <h3 className="text-white font-semibold">Decorations Products</h3>
                            <p className="mt-1 text-sm text-white">Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}