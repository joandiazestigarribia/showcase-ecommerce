import Input from "../ui/Input";

function Category({ handleCategoryChange, categories, selectedCategories = [] }) {
    return (
        <div>
            <h2 className="sidebar-title">Categoria</h2>
            <div className="sidebar-subTitle">
                <Input
                    handleChange={() => handleCategoryChange('')}
                    value=""
                    title="Todas las categorías"
                    name="test"
                    checked={selectedCategories.length === 0}
                />
                {categories.map((category) => (
                    <Input
                        key={category}
                        handleChange={() => handleCategoryChange(category)}
                        value={category}
                        title={category}
                        name="test"
                        checked={selectedCategories.includes(category)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Category;