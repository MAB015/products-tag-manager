import { Layout } from '../components/Layout'
import FiltersForText from '../components/FiltersForTagManagement'
import HeaderContent from '../components/HeaderContent'
import FilteredProducts from '../components/FilteredProducts'

const Home = () => {
    return (
        <Layout>
            <div className='flex flex-col gap-10 w-[300px] px-[16px] py-[24px] bg-bgPanels shadow-md '>
                {/* filter area  */}
                <FiltersForText />
            </div>
            <div className='flex flex-col w-full pt-6 px-6 gap-6 overflow-y-auto h-screen'>
                {/* content area */}
                <div className='flex w-full justify-between p-6 bg-bgPanels rounded-2xl shadow-md'>
                    <HeaderContent />
                </div>
                <div className='flex flex-col w-full p-6 gap-12 bg-bgPanels rounded-t-2xl shadow-md'>
                    <FilteredProducts />
                </div>
            </div>
        </Layout>
    )
}

export default Home