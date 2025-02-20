import { AiOutlineClose } from "react-icons/ai";
import { closeDialog } from "../../slices/creditScoreDialogSlice";
import { useDispatch } from "../../store/store";

const CloseCircle = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(closeDialog())}
      className="w-16 h-16 rounded-full bg-object absolute top-20 right-52 flex items-center justify-center border-2 border-almostBlack cursor-pointer"
    >
      <AiOutlineClose size="32" color="#FDFFFB" />
    </div>
  );
};

export default CloseCircle;
