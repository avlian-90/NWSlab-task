import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { StyledLayout } from "./StyledLayout";

const Main = React.lazy(() => import('./Main'));
const CategoryMain = React.lazy(() => import('./CategoryMain'));

function Layout() {

    const catsByCategory = useSelector(state => state.search.selectedCategoryData)
    return (
        <StyledLayout>
            <Sidebar />
            <Suspense>
                {catsByCategory.length === 0 ? <Main /> : <CategoryMain />}
            </Suspense>
        </StyledLayout>
    )
}

export default Layout;