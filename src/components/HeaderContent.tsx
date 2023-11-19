const HeaderContent = () => {
    return (
        <>
            <div className='flex flex-col w-full  gap-1'>
                {/* copy */}
                <h1 className='text-2xl font-semibold'>Tag Manager</h1>
                <p>Browse through your products and assign tags!</p>
            </div>
            <div className='flex gap-4'>
                {/* buttons */}
                <button> Tickets </button>
                <button> Clients </button>
            </div>
        </>
    )
}

export default HeaderContent