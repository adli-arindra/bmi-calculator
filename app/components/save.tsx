"use client";

const Save:React.FC = function () {
    return (
        <>
            <button className="btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white transition duration-300" onClick={()=>(document.getElementById('my_modal_2')! as HTMLDialogElement).showModal()}>Save State</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
            </dialog>
        </>
    );
}

export default Save;