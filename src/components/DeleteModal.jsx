import delImg from '../images/del.svg';
import Button from './Button';

const DeleteModal = ({ description, handleClick, isLoading }) => {
    return (
        <>
            <div className="flex flex-col min-h-[330px] justify-center items-center">
                <span className="text-white">{description}</span>
                <img src={delImg} className={"mt-4 h-[100px]"} />
                <Button title={"Delete"}
                    handleClick={handleClick}
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    style={"bg-secondary text-black mt-4"}
                />
            </div>
        </>
    )
}
export default DeleteModal;