import Input from "../ui/Input";

function DiscountPercentage({ handleDiscountChange, discountPercentages, selectedDiscounts = [] }) {
    const sortedDiscounts = [...discountPercentages].sort((a, b) => a - b);

    return (
        <div className="sidebar-subTitle">
            <Input
                handleChange={() => handleDiscountChange('')}
                value=""
                title="Todos los descuentos"
                name="test"
                checked={selectedDiscounts.length === 0}
            />
            {sortedDiscounts.map((discountPercentage) => (
                <Input
                    key={discountPercentage}
                    handleChange={() => handleDiscountChange(discountPercentage)}
                    value={discountPercentage}
                    title={`${discountPercentage}%`}
                    name="test"
                    checked={selectedDiscounts.includes(discountPercentage)}
                />
            ))}
        </div>
    );
}

export default DiscountPercentage;