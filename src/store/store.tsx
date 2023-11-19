import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface Product {
  id: string
  displayTitle: string
  embeddingText: string
  url: string
  shopifyProductId: string
  imageUrl: string
  productType: ProductType
  discount: boolean
  variants: string
  price: string
}

export enum ProductType {
  Clothing = 'Clothing',
  Home = 'Home',
  Technology = 'Technology',
  Empty = '',
}

interface CustomProductType {
  Clothing: boolean
  Home: boolean
  Technology: boolean
  'Other Products': boolean
}
type ProductTypeKeys = keyof CustomProductType

interface ListTags {
  listTags: string[]
}

interface IState {
  products: Product[] | null
  inputTextFilterByText: string
  inputTextFilterByTag: string
  computed: {
    filteredByText: Product[]
    filteredProducts: Product[]
    filteredByTag: string[]
    filteredTags: string[]
  }
  productTypeKeys: CustomProductType

  counter: number
  filteredProducts: unknown
  searchByTitle: unknown

  selectedProducts: Product[] | null
  selectedTags: string[] | null

  tags: ListTags

}

interface ModalState {
  isModalTagsOpen: boolean;
  isModalAddTagOpen: boolean;
  openModalTags: () => void;
  closeModalTags: () => void;
  openModalAddTag: () => void;
  closeModalAddTag: () => void;
}



interface IActions {
  getProductsFromApi: () => void
  setProducts: (products: Product[]) => void
  filterProductsByTitles: (searchByTitle: string) => Product[]
  filterProducts: () => void
  filterTags: () => void
  onChangeProductTypeKeys: (b: boolean, c: ProductTypeKeys) => void

  setInputTextFilterByText: (inputTextFilterByText: string) => void

  setCounter: (counter: number) => void
  addSelectedProduct: (selectedProducts: Product) => void
  deleteSelectedProduct: (productId: string) => void

  setInputTextFilterByTag: (inputTextFilterByTag: string) => void;

  addTag: (tag: string) => void;
  deleteTag: (tag: string) => void

  addSelectedTag: (tag: string) => void;
  deleteSelectedTag: (tag: string) => void
}

export const useAppStore = create(
  immer<IState & IActions>((set, get) => ({
    products: null,
    inputTextFilterByText: '',
    inputTextFilterByTag: '',
    productTypeKeys: {
      Clothing: false,
      Home: false,
      Technology: false,
      'Other Products': false,
    },
    computed: {
      filteredByText: [],
      filteredProducts: [],
      filteredByTag: [],
      filteredTags: [],
    },

    counter: 0,
    filteredProducts: null,
    searchByTitle: null,

    selectedProducts: [],
    selectedTags: [],

    filteredTags: null,

    tags: {
      listTags: [
        't-shirt',
        'bay',
        'car',
        'tv',
      ],
    },

    setProducts: (products: Product[]) => {
      set((state) => {
        state.products = products
      })
    },

    addSelectedProduct: (selectedProduct: Product) => set((state) => ({
        selectedProducts: [...state.selectedProducts, selectedProduct],
    })),

    deleteSelectedProduct: (productId: string) => set((state) => ({
        selectedProducts: state.selectedProducts?.filter(product => product.id !== productId)
    })),

    addSelectedTag: (selectedTag: string) => set((state) => ({
        selectedTag: [...state.selectedTags, selectedTag],
    })),

    deleteSelectedTag: (selectedTag: string) => set((state) => ({
        selectedTag: state.selectedTags?.filter(tag => tag !== selectedTag)
    })),
    

    getProductsFromApi: async () => {
      await fetch('https://api.wizybot.com/products/demo-product-list')
        .then((resp) => resp.json())
        .then((data) => get().setProducts(data))
        .catch((ex) => {
          console.error(ex)
        })
    },

    filterProductsByTitles: (searchByTitle: string) => {
      if (get().products === null) return []

      return [...get().products!].filter((product) =>
        product.displayTitle.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    },

    setInputTextFilterByText: (inputTextFilterByText: string) => {
      set((state) => {
        state.inputTextFilterByText = inputTextFilterByText
      })
      get().filterProducts()
    },

    setInputTextFilterByTag: (inputTextFilterByTag: string) => {
      set((state) => {
        state.inputTextFilterByTag = inputTextFilterByTag;
      });
      get().filterTags()
    },
  

    onChangeProductTypeKeys: (isChecked: boolean, c: ProductTypeKeys) => {
      set((state) => {
        state.productTypeKeys[c] = !isChecked
      })
    },
    
    filterProducts: () => {
      set((state) => {
        state.computed.filteredProducts = [...state.products!].filter(
          (product) => {
            let isFiltered = false

            // Primero la busqueda por inputTextFilterByTag
            if (state.inputTextFilterByText !== '') {
              if (
                product.displayTitle
                  .toLowerCase()
                  .includes(state.inputTextFilterByText.toLowerCase())
              ) {
                isFiltered = true
              }
            }

            return isFiltered
          }
        )
      })
    },

    filterTags: () => {
      set((state) => {
        state.computed.filteredByTag = state.tags.listTags.filter(
          (tag) => {
              let isFiltered = false

              // Primero la busqueda por inputTextFilterByTag
              if (state.inputTextFilterByTag !== '') {
                if (
                  tag.toLowerCase().includes(state.inputTextFilterByTag.toLowerCase())
                ){
                  isFiltered = true
                }
            }
              return isFiltered
          }
        )
      })
    },

    setCounter: (counter: number) => {
      set((state) => {
        state.counter = counter
      })
    },
    
    addTag: (tag: string) => set((state) => {
      state.tags.listTags.push(tag);
    }),

    deleteTag: (tag: string) => set((state) => {
      state.tags.listTags = state.tags.listTags.filter((existingTag) => existingTag !== tag);
    }),

  }))
)

export const useModalStore = create<ModalState>((set) => ({
  isModalTagsOpen: false,
  isModalAddTagOpen: false,
  openModalTags: () => set({ isModalTagsOpen: true }),
  closeModalTags: () => set({ isModalTagsOpen: false }),
  openModalAddTag: () => set({ isModalAddTagOpen: true }),
  closeModalAddTag: () => set({ isModalAddTagOpen: false }),
}));

