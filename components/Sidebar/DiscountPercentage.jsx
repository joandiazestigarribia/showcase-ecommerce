import Input from "../ui/Input";

function DiscountPercentage({ handleDiscountChange, discountPercentages, selectedDiscounts = [] }) {
    return (
        <div>
            <h2 className="sidebar-title">% de descuento</h2>
            <div className="sidebar-subTitle">
                <Input
                    handleChange={() => handleDiscountChange('')}
                    value=""
                    title="Todos los descuentos"
                    name="test"
                    checked={selectedDiscounts.length === 0}
                />
                {discountPercentages.map((discountPercentage) => (
                    <Input
                        key={discountPercentage}
                        handleChange={() => handleDiscountChange(discountPercentage)}
                        value={discountPercentage}
                        title={discountPercentage}
                        name="test"
                        checked={selectedDiscounts.includes(discountPercentage)}
                    />
                ))}
            </div>
        </div>
    );
}

export default DiscountPercentage;