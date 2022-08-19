import { useState } from 'react';

type useToggleReturn = ReturnType<()=> [boolean , ()=> void]>

export function useToggle(defaultValue : boolean = false) : useToggleReturn{
    const [ value , setValue ] = useState(defaultValue);
    const toggleValue = () => setValue(prev=> !prev);
    return [value , toggleValue];
}

export default useToggle