import { IconClose } from './Icon'
import { useAppStore, useModalStore } from '../store/store';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalTags: React.FC =  () => {

    const { isModalTagsOpen, closeModalTags } = useModalStore();

    

    const { addTag, deleteTag, addSelectedTag, deleteSelectedTag, selectedTags } = useAppStore();

    // GET FILTERED TAGS
    const filteredTags = useAppStore(
        (state) => state.computed.filteredTags
    )
    
    
    // GET TEXT TO FILTER THE TAGS
    const inputTextFilterByTag = useAppStore(
        (state) => state.inputTextFilterByTag
    )

    const setInputTextFilterByTag = useAppStore(
        (state) => state.setInputTextFilterByTag
    )

    // GET ALL TAGS
    const getAllTags = useAppStore(
        (state) => state.tags.listTags
    )


    // // ADD A TAG
    // const handleAddTag = (tag : string) => {
    //     const newTag = tag; 
    //     addTag(newTag);
    // };

    // // DELETE A TAG
    // const handleDeleteTag = (tag: string) => {
    //     const tagToDelete = tag;
    //     deleteTag(tagToDelete);
    // };

    // ADD A TAG
    const handleAddSelectedTag = (tag : string) => {
        const newTag = tag; 
        addSelectedTag(newTag);
    };

    // DELETE A TAG
    const handleDeleteSelectedTag = (tag: string) => {
        const tagToDelete = tag;
        deleteSelectedTag(tagToDelete);
    };

    const handleCheckboxChange = (isChecked: boolean, tag: string) => {
        if (isChecked) {
            handleAddSelectedTag(tag);
        } else {
            handleDeleteSelectedTag(tag);
        }

    }


    // RENDER
    const renderView = () => {
        if(!inputTextFilterByTag) {
            return (
                getAllTags?.map((tag, index) => (
                    <div key={index} className="checkbox-wrapper">
                            <label className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    // checked={...} // You need to determine whether the checkbox is checked based on your logic
                                    onChange={(e) => {
                                        handleCheckboxChange(e.target.checked, tag)
                                    }}
                                />
                                <span>{tag}</span>
                            </label>
                        </div>
                ))
            )
        } else if(filteredTags.length > 0) {
            return (
                filteredTags?.map((tag, index) => (
                    <div key={index} className="checkbox-wrapper">
                            <label className="flex gap-2 items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    // checked={...} // You need to determine whether the checkbox is checked based on your logic
                                    onChange={() => {}}
                                />
                                <span>{tag}</span>
                            </label>
                        </div>
                ))
            )
        } else{
            <button>Add Tag</button>
        }
    }

    return (
        <Modal
            isOpen={isModalTagsOpen}
            onRequestClose={closeModalTags}
            contentLabel="Example Modal"
            className="fixed inset-0 flex flex-col gap-6 p-6 rounded-xl shadow-lg m-auto w-[400px] h-fit border-t-[24px] border-t-primary  bg-bgPanels overflow-auto z-10"
            overlayClassName="fixed inset-0 bg-primary bg-opacity-80"
        >
                <div className='flex justify-between w-full items-center'>
                    <h2 className='text-2xl  font-semibold'>Apply Tags</h2>
                    {selectedTags?.length}
                    <button
                        className=""
                        onClick={closeModalTags}
                    >
                        <IconClose />
                    </button>
                </div>
                <div className="flex flex-col w-full gap-2">
                {/* <textarea className='w-full'/> */}
                    <input
                        type="text"
                        placeholder="Write your tag..."
                        value={inputTextFilterByTag}
                        onChange={(e) => setInputTextFilterByTag(e.target.value)}
                        className="w-full p-2 text-base rounded-md"
                    />
                    <p className="flex justify-end text-xs italic">
                        Eg: T-shirt, baby, car, tv
                    </p>
                </div>
                <div className='grid grid-cols-3 gap-2 items-start justify-center min-h-[160px] max-h-[300px] overflow-y-auto'>
                        { renderView() }
                </div>
                <button className='w-full bg-accent text-white py-2 rounded-md font-semibold'>Apply</button>
        </Modal>
    )
}

export default ModalTags