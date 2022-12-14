
import crossIcon from '../images/icons/x.svg';

const Popup = ({ showModal, setShowModal, children }) => {
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto z-40">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-90"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-black rounded-md shadow-lg min-h-[350px]">
                                <img src={crossIcon}
                                    className="h-[15px] absolute  top-5 right-5 cursor-pointer"
                                    onClick={() => setShowModal(false)}
                                />
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Popup;