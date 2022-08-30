import { type PropsWithChildren } from 'react'

export default function MainLayout(props : PropsWithChildren){
    return (
        <main>
            { props.children }
        </main>
    )
}