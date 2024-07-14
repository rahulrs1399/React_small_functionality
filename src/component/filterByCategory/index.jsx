import { useEffect, useState } from "react";
import { items } from "./item";
import './style.css'

export default function FilterByCategory(){
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItem, setFilteredItem] = useState(items);
    let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

    function handleFilterButtonClick(selectedcategory){
        if(selectedFilters.includes(selectedcategory)){
            let filters = selectedFilters.filter((excistItem) => excistItem !== selectedcategory);
            setSelectedFilters(filters);
        }
        else{
            setSelectedFilters([...selectedFilters, selectedcategory]);
        }
    }

    useEffect(() => {
        filterItems();
    },[selectedFilters])

    const filterItems = () => {
        if(selectedFilters.length > 0){
            let tempItems = selectedFilters.map((selectedcategory) => {
                let temp = items.filter((item) => item.category === selectedcategory)
                return temp
            })
            setFilteredItem(tempItems.flat());
        }
        else{
            setFilteredItem([...items])
        }
    }

    return(
        <div>
            <div className="buttons-container">
                {
                    filters.map((category, index) => (
                        <button
                            onClick={() =>handleFilterButtonClick(category)}
                            className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
                            key={`filter-${index}`}
                        >
                            {category}
                        </button>
                    ))
                }
            </div>

            <div className="items-container">
                {filteredItem.map((item, index) => (
                    <div key={`item-${index}`} className="item">
                        <p>{item.name}</p>
                        <p className="category">{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}