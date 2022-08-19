import { useRef } from 'react'

type usePreviousValueReturn = ReturnType<<T>(value : T)=> T>

export function usePreviousValue(value : any) : usePreviousValueReturn{
    const currentValue = useRef(value);
    return currentValue.current
}

export default usePreviousValueReturn