import { GoTrash } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";

const iconTypes={
    "check":(color)=><LuClipboardCheck className="Icon-svg" fill={color} />,
    "delete":(color)=> <GoTrash className="Icon-svg" fill={color} />
};

function TodoIcon({type, color, onClick}){
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )

}

export {TodoIcon}