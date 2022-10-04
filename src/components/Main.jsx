import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catsAsync, loadMore } from "../features/mainSlice";
import { StyledMain } from "./StyledMain";

function Main() {
    
    const dispatch = useDispatch();
    const {page} = useSelector(state => state.main)
    
    useEffect(() => {
        dispatch(catsAsync(page));
    }, [dispatch, page])
    const allCats = useSelector(state => state.main.cats);
    // const catsByCategory = useSelector(state => state.search.selectedCategoryData)
    
    return (
        <StyledMain>
            <div>
                {allCats.map(cat => <div key={cat.id}>
                    <img src={cat.url} alt="cat"/>
                </div>)}
            </div>
            <div>
                <button onClick={() => dispatch(loadMore())}>Load More</button>
            </div>
        </StyledMain>
    )
}

export default Main;