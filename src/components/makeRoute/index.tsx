import {type FC} from "react";
import {type RouteObject, Routes , Route} from 'react-router-dom';

interface MakeRoutesProps {
    routes: RouteObject[]
}

const MakeRoutes : FC<MakeRoutesProps> = (props)=> {
    const { routes } = props;
    return (
        <Routes>
            {
                routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        caseSensitive={route.caseSensitive}
                        index={route.index}
                    />
                ))
            }
        </Routes>
    )
}

export default MakeRoutes