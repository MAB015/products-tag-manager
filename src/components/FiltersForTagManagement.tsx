import { useAppStore } from '../store/store'

const FiltersForText = () => {
  const inputTextFilterByText = useAppStore(
    (state) => state.inputTextFilterByText
  )

  const setInputTextFilterByText = useAppStore(
    (state) => state.setInputTextFilterByText
  )

  const onChangeProductTypeKeys = useAppStore(
    (state) => state.onChangeProductTypeKeys
  )

  const productTypeKeys = useAppStore((state) => state.productTypeKeys)

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Filters</h2>
        <p className="text-xs">
          You can look for products based on the parameters listed below, dont
          forget to select apply once you are done with the filtering.
        </p>
      </div>
      <div className="flex flex-col gap-3 text-xs">
        <h3 className="text-sm font-semibold">Text based filter</h3>
        <div className="flex flex-col w-full gap-2">
          {/* <textarea className='w-full'/> */}
          <input
            type="text"
            placeholder="Keywords..."
            value={inputTextFilterByText}
            onChange={(e) => setInputTextFilterByText(e.target.value)}
            className="w-full p-2 text-base rounded-md"
          />
          <p className="flex justify-end text-xs italic">
            Eg: name or keyboard of the product
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Type of product</h3>
        <div className="flex flex-col w-full gap-2">
          {/* <textarea className="w-full" /> */}
          {/* TODO falta implementar */}
          <div className='flex flex-col gap-2'>
            {Object.entries(productTypeKeys).map((key, i) => (
              <div className="checkbox-wrapper" key={i}>
                <label className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={key[1]}
                    onChange={() => {
                      onChangeProductTypeKeys(
                        key[1],
                        key[0] as
                          | 'Clothing'
                          | 'Home'
                          | 'Technology'
                          | 'Other Products'
                      )
                    }}
                  />
                  <span>{key[0]}</span>
                </label>
              </div>
            ))}
          </div>

          <p className="flex justify-end text-xs italic">
            You can choose multiple options
          </p>
        </div>
      </div>

      {/* Filter by color
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Colors</h3>
        <div className="flex gap-4 text-xs">
          <p>Black</p>
          <p>White</p>
          <p>Gray</p>
          <p>Blue</p>
          <p>Green</p>
          <p>Yellow</p>
          <p>Red</p>
          <p>Pink</p>
          <p>Orange</p>
          <p>Purple</p>
        </div>
      </div> */}

      {/* Filter by price
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">Price</h3>
        <div className="flex items-center">
          <div className="flex flex-col gap-1">
            <h4 className="text-xs">Max</h4>
            <textarea />
          </div>
          <p>-</p>
          <div className="flex flex-col gap-1">
            <h4 className="text-xs">Min</h4>
            <textarea />
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col gap-1">
        <button className="w-full bg-accent text-white py-2 rounded-md font-semibold">
          Apply
        </button>
        <button className="w-full bg-white py-2 rounded-md font-semibold">
          Reset
        </button>
      </div> */}
    </>
  )
}

export default FiltersForText
