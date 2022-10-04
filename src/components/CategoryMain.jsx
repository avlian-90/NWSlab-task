import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../features/mainSlice";
import { StyledMain } from "./StyledMain";

function CategoryMain() {
    
    const dispatch = useDispatch();
    
    const catsByCategory = useSelector(state => state.search.selectedCategoryData)
    
    return (
        <StyledMain>
            <div>
                {catsByCategory.map(cat => <div key={cat.id}>
                    <img src={cat.url} alt="cat"/>
                </div>)}
            </div>
            <div>
                <button onClick={() => dispatch(loadMore())}>Load More</button>
            </div>
        </StyledMain>
    )
}

export default CategoryMain;