"use client";

const Save:React.FC = function () {
    return (
        <>
            <button className="btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300" onClick={()=>(document.getElementById('my_modal_2')! as HTMLDialogElement).showModal()}>Save State</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex justify-center flex-col">
                    <h3 className="font-bold text-xl text-center">Save your state!</h3>
                    <p className="py-4 text-center text-sm">Click outside to close</p>
                    <div className="flex justify-center gap-4">
                        <input type="text" placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
                        <button className="btn hover:btn-primary hover:text-white">Save</button>
                    </div>
                </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
            </dialog>
        </>
    );
}

export default Save;