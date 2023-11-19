import { Product, useAppStore } from '../store/store'

const ProductCard = ( data ): JSX.Element => {
    
    const { addSelectedProduct, deleteSelectedProduct, addProductTags, selectedProducts } = useAppStore((state) => state)

    const handleCheckboxChange = (isChecked: boolean, product: Product, productId: string) => {
        if (isChecked) {
            addSelectedProduct(product);
        } else {
            deleteSelectedProduct(productId);
        }

    }

    return (
        
        <div className='flex flex-col relative p-2 shadow-sm gap-2'>
            <div className='absolute right-5 top-5'>
                <label className="flex gap-2" >
                    <input
                        type="checkbox"
                        className="w-5 h-5"
                        // checked={''}
                        onChange={(e) => {
                            // setSelectedProducts( data.data )
                            // addSelectedProducts( data.data )
                            handleCheckboxChange(e.target.checked, data.data, data.data.id)
                            
                        }}
                        aria-label={ data.data.displayTitle }
                    />
                </label>
            </div>
            <img src={ data.data.imageUrl } alt='image test' className='aspect-square object-cover shadow-sm'/>
            <div className='p-1'>
                <h3 className='text-sm font-semibold line-clamp-2'>{ data.data.displayTitle } </h3>
                <p className='text-xs'>{ data.data.productType }</p>
            </div>
        </div>
    )
}

export default ProductCard