import { type PropsWithChildren } from 'react'

export default function RightAside(props : PropsWithChildren){
    return (
        <aside>
            { props.children }
        </aside>
    )
}