import { Product, useAppStore } from '../store/store'

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC <ProductCardProps> = ({ data  } ) => {
    
    const { addSelectedProduct, deleteSelectedProduct } = useAppStore((state) => state)

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
                        onChange={(e) => {
                            handleCheckboxChange(e.target.checked, data , data.id)
                        }}
                        aria-label={ data.displayTitle }
                    />
                </label>
            </div>
            <img src={ data.imageUrl } alt='image test' className='aspect-square object-cover shadow-sm'/>
            <div className='p-1'>
                <h3 className='text-sm font-semibold line-clamp-2'>{ data.displayTitle } </h3>
                <p className='text-xs'>{ data.productType }</p>
            </div>
        </div>
    )
}

export default ProductCard