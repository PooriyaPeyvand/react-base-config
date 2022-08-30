import {FC} from "react";
import {RouteObject} from "react-router-dom";
import MakeRoute from "../components/makeRoute";

const Pages : FC = ()=> {
    const routes : RouteObject[] = [

    ];

    return <MakeRoute routes={routes} />
}

export default Pages