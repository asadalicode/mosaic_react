import Spinner from "./Spinner";

const OverlayLoader = () => {
    return (

        <div className="fixed inset-0 z-10 overflow-y-auto z-40">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-90"
                onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto rounded-md shadow-lg ">
                    <Spinner 
                        width="12"
                        height="12"
                    />
                </div>
            </div>
        </div>
    )
}
export default OverlayLoader;