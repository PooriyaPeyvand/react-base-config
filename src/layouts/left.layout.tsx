import { type PropsWithChildren } from 'react'

export default function LeftAside(props : PropsWithChildren){
    return (
        <aside>
            { props.children }
        </aside>
    )
}