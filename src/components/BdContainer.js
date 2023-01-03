import { Slot } from '@radix-ui/react-slot';

export function BdContainer(asChild, ...props){
    const Comp = asChild ? Slot : 'nav';

    return(
        <Comp className='bd-container' {...props}></Comp>
    )
}