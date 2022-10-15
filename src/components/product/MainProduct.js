import DetailsProduct from "./DetailsProduct";
import SliderProduct from "./SliderProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SliderProduct />
            <DetailsProduct />
        </main>
    )
}

export default MainProduct;