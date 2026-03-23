export function Sidebar(props) {
    return (
        <div>
            <div 
                onClick={() => props.setOpen(false)} 
                class={(props.open() ? 'backdrop-blur-sm z-30   ' : '-z-10') + ' fixed inset-0 transition-all duration-300 ease-in-out'}>    
            </div>

            <div class={(props.open() ? 'translate-x-0' : 'translate-x-full') + ' fixed right-0 z-50 w-80 h-screen bg-bg border-l-border border-l transition-transform duration-300 ease-in-out p-6'}>
                <div class='w-full flex justify-between'>
                    <p class='text-lg'>Navigation</p>
                    <div class="hover:bg-accent-30/15 transition-all p-1 rounded-md cursor-pointer grid place-items-center" onClick={() => props.setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}