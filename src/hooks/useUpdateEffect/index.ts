import { DependencyList, useEffect, useRef } from 'react'


type cbType = ()=> any;


export function useUpdateEffect(callback : cbType , deps : DependencyList){
    const isMounted = useRef(false);
    useEffect(()=>{
        if(!isMounted.current) {
            isMounted.current = true;
        }
        else {
            callback();
        } 
    },deps);
}

export default useUpdateEffect