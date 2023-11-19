import { IconClose } from './Icon'
import { useAppStore, useModalStore } from '../store/store';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

const ModalAddTag: React.FC =  () => {

    const {  isModalAddTagOpen, closeModalAddTag } = useModalStore();
    
    const { addTag } = useAppStore();
    
    // State to manage the input value
    const [tagInput, setTagInput] = useState<string>('');

    const [ confirm, setConfirm ] = useState<string>('')
    
    // GET ALL TAGS
    // const getAllTags = useAppStore(
    //     (state) => state.tags.listTags
    // )

    // ADD A TAG
    const handleAddTag = () => {
        addTag(tagInput);
        setTagInput('');
        setConfirm('Tag Added')
    };

    const all = document.querySelectorAll('[name="inputAddTag"]')
    all.forEach(x=>x.addEventListener("click", function() {
        setConfirm('')
    })) 


    return (
        <Modal
            isOpen={isModalAddTagOpen}
            onRequestClose={closeModalAddTag}
            contentLabel="Example Modal"
            className="fixed inset-0 flex flex-col gap-6 p-6 rounded-xl shadow-lg m-auto w-[400px] h-fit border-t-[24px] border-t-primary  bg-bgPanels overflow-auto z-10"
            overlayClassName="fixed inset-0 bg-primary bg-opacity-80"
        >
                <div className='flex justify-between w-full items-center'>
                    <h2 className='text-2xl  font-semibold'>Add Tag</h2>
                    <button
                        className=""
                        onClick={closeModalAddTag}
                    >
                        <IconClose />
                    </button>
                </div>
                <div className="flex flex-col w-full gap-2">
                {/* <textarea className='w-full'/> */}
                    <input
                        type="text"
                        placeholder="Write your tag..."
                        name='inputAddTag'
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        className="w-full p-2 text-base rounded-md"
                    />
                    <p className="flex justify-end text-xs italic">
                        Eg: T-shirt, baby, car, tv
                    </p>
                </div>
                <div className='flex w-full justify-center'>
                    <p>{confirm}</p>
                </div>
                <button 
                    className='w-full bg-accent text-white py-2 rounded-md font-semibold'
                    onClick={handleAddTag}
                >
                    Add Tag
                </button>
        </Modal>
    )
}

export default ModalAddTag