import Input from "../ui/Input";

function Brand({ handleBrandChange, brands, selectedBrands = [] }) {
    return (
        <div>
            <h2 className="sidebar-title">Marca</h2>
            <div className="sidebar-subTitle">
                <Input
                    handleChange={() => handleBrandChange('')}
                    value=""
                    title="Todas las marcas"
                    name="test"
                    checked={selectedBrands.length === 0}
                />
                {brands.map((brand) => (
                    <Input
                        key={brand}
                        handleChange={() => handleBrandChange(brand)}
                        value={brand}
                        title={brand}
                        name="test"
                        checked={selectedBrands.includes(brand)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Brand;