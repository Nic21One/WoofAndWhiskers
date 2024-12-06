import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProduct } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";
import { Navbar } from "../components/storefront/Navbar"

export default function IndexPage() {
    return (
        <div>
            <Hero/>
            <CategoriesSelection/>
            <FeaturedProduct/>
        </div>
    );
}