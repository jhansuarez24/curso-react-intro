import React from "react";
import { TodoIcon } from "./index";

function CompleteIcon( {completed, onComplete} ) {
    return (
    <TodoIcon
        type="check"
        color={completed ? '#00ff00': 'gray' }
        onClick={onComplete}
    />);
}

export {CompleteIcon};