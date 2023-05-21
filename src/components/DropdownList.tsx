import { useState } from 'react';

export default function DropdownList({list,title}:{list:Array<string>,title:string}) {
    const [openMenu,setOpenMenu] = useState(false);
    return (
        <div>
            <button onClick={()=>{setOpenMenu(!openMenu)}}>{title}</button>
            {(openMenu) && <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {list.map(e=><li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{e}</a>
                    </li>
                    )}
                    
                </ul>
            </div>}
        </div>
    )
}
