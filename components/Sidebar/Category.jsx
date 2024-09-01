import Input from "../ui/Input";

function Category({ handleCategoryChange, categories, selectedCategories = [] }) {
    const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));

    return (
        <div className="sidebar-subTitle">
            <Input
                handleChange={() => handleCategoryChange('')}
                value=""
                title="Todas las categorías"
                name="test"
                checked={selectedCategories.length === 0}
            />
            {sortedCategories.map((category) => (
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
    );
}

export default Category;