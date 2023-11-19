import ProductCard from './ProductCard'
import { IconArrowRight, IconPlus } from './Icon'
import { useAppStore, useModalStore } from '../store/store'
import ModalTags from './ModalTags'
import ModalAddTag from './ModalAddTag'


const FilteredProducts = () => {

    const { openModalTags,  openModalAddTag, } = useModalStore();

    // GET FILTERED PRODUCTS
    const filteredProducts = useAppStore(
        (state) => state.computed.filteredProducts
    )

    // GET TEXT TO FILTER THE PRODUCTS
    const inputTextFilterByText = useAppStore(
        (state) => state.inputTextFilterByText
    )

    // GET ALL THE PRODUCTS
    const getAllProducts = useAppStore(
        (state) => state.products
    )
    
    // GET ALL THE PRODUCT TYPES THAT ARE TRUE
    const productTypeKeys = useAppStore(
        
        (state) => {
            const productTypeKeysTrue : string[] = [];
            Object.entries(state.productTypeKeys).map((key)=> {
                if(key[1] === true) {
                    productTypeKeysTrue.push(key[0])
                }
            })
            return productTypeKeysTrue
        }
    )

    
    // COUNTER OF SELECTED PRODUCTS

    const selectedProductsCount = useAppStore(
        (state) => (state.selectedProducts ? state.selectedProducts.length : 0)
    );

    
    // Render and Filter the product cards
    const renderView = () => {
        if(!inputTextFilterByText && productTypeKeys.length === 0) {
            // Return all the prodtucts if the text camp to search is empty
            return (
                getAllProducts?.map(product => (
                    <ProductCard key={product.id} data={product} />
                ))
            )
        } else if(filteredProducts.length > 0 && productTypeKeys.length > 0){
            // Return the filtered products
            return (
                filteredProducts?.map(product => (
                    productTypeKeys.map(type => {
                        if(product.productType === type) {
                            return <ProductCard key={product.id} data={product} />
                        }
                        return null;
                    })
                ))
            )
        }else if(filteredProducts.length > 0 && productTypeKeys.length === 0){
            // Return the filtered products
            return (
                filteredProducts?.map(product => (
                    <ProductCard key={product.id} data={product} />
                ))
            )
        }else if(filteredProducts.length === 0 && productTypeKeys.length > 0){
            // Return the filtered products
            return (
                getAllProducts?.map(product => (
                    productTypeKeys.map(type => {
                        if(product.productType === type) {
                            return <ProductCard key={product.id} data={product} />
                        }
                        return null;
                    })
                ))
            )
        }else{
            // Return a message for the user knows that there is not any product related to the search
            return (
                <div className="text-center">
                    <p className="text-3xl font-bold">
                        No results found
                    </p>
                </div>
            )
        }   
    }


    return (
        <>
            <div className='flex justify-between'>
                <div className='flex gap-10 items-center'>
                    {/* Header */}
                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col'>
                            {/* copy  */}
                            <h3 className='text-lg font-bold'>Actions</h3>
                            <p className='text-sm'>{selectedProductsCount} Selected</p>
                        </div>
                        <div>
                            {/* select all */}
                            <label className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    // checked={key[1]}
                                    onChange={() => { }}
                                />
                                <span>Select All</span>
                            </label>
                        </div>
                    </div>
                    {/* Arrow  */}
                    <IconArrowRight />
                    {/* Apply tags  */}
                    <button 
                        className='flex items-center gap-4 text-lg'
                        onClick={ openModalTags }
                    >
                        <IconPlus />
                        Apply Tags
                    </button>
                    <ModalTags />
                </div>
                <div>
                    <button 
                        className='flex items-center gap-4 text-lg'
                        onClick={ openModalAddTag }
                    >
                        <IconPlus />
                        Add Tags
                    </button>
                    <ModalAddTag />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 '>
                { renderView() }
            </div>
        </>
    )
}

export default FilteredProducts