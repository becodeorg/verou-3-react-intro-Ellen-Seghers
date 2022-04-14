import React from "react";
import './application.css';

const Header = () => {
    return (
        <div className="text-center h-44 py-4">
           <div class="flex items-center justify-center">
               <h3 className="font-bold pr-1.5">Todo List</h3>
               <img src="list-task.svg" alt="List task" className="h-9"></img>
           </div>
            <p><h3>You can add todo's and check them off when there done.</h3></p>
            <p><h3>If you want to remove your checked todo's, you can remove them by pressing the clear button.</h3></p>
        </div>
    )
}

export default Header;