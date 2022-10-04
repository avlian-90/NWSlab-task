import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { categoriesAsync } from '../features/categoriesSlice';
import { searchAsync } from '../features/searchSlice';
import { StyledSidebar } from './StyledSideBar';

function Sidebar() {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(categoriesAsync())
    }, [dispatch])

    return (
        <StyledSidebar>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => <li key={category.id} onClick={() => dispatch(searchAsync(category.id))}>
                    {category.name}
                </li>)}
            </ul>
        </StyledSidebar>
    )
}

export default Sidebar;