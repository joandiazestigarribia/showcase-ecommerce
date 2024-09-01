import Input from "../ui/Input";

function Brand({ handleBrandChange, brands, selectedBrands = [] }) {
    const sortedBrands = [...brands].sort((a, b) => a.localeCompare(b));

    return (
        <div className="sidebar-subTitle">
            <Input
                handleChange={() => handleBrandChange('')}
                value=""
                title="Todas las marcas"
                name="test"
                checked={selectedBrands.length === 0}
            />
            {sortedBrands.map((brand) => (
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
    );
}

export default Brand;