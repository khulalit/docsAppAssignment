import HeaderLayout from './HeaderLayout';
import FileName from './FIleName';
import EditorOptions from './EditorOptions';
import Editor from './Editor/Editor';
import Menu from './Menu';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setMargin } from '../redux/reducers/marginSlice';
import { TbGridDots, TbBrandYoutube } from 'react-icons/tb';
import { DiGoogleDrive} from 'react-icons/di';
import { SiGooglemaps, SiGoogleclassroom, SiGooglechat, SiGoogletranslate} from 'react-icons/si';

export default function Layout() {
    const dispatch = useDispatch();
    const [menuOpen,setOpenMenu] = useState(false);
    return (
    <div className=' h-full'>
        <header className='h-[20vh]'>
            <HeaderLayout 
                left={<Menu />} 
                right={<TbGridDots size="30px" className='cursor-pointer' onClick={()=>setOpenMenu(!menuOpen)}/>}
                bottom={<EditorOptions/>}
                middle={<FileName />}
            />
            {menuOpen && <div className="bg-white justify-around menu-side w-[200px] flex flex-wrap p-4 gap-4 absolute right-0 z-[100] top-[50px] shadow-lg">
                <a className="drive self-center" href='https://drive.google.com' target='_blank'>
                    <DiGoogleDrive size="50px"/>
                </a>
                <a className="drive" href='https://youtube.com' target='_blank'>
                    <TbBrandYoutube size="50px"/>
                </a>
                <a className="drive" href='https://chat.google.com' target='_blank'>
                    <SiGooglechat size="50px"/>
         
                </a>
                <a className="drive" href='https://maps.google.com' target='_blank'>
                    <SiGooglemaps size="50px"/>
           
                </a>
                <a className="drive" href='https://classroom.google.com' target='_blank'>
                    <SiGoogleclassroom size="50px"/>
    
                </a>
                <a className="drive" href='https://translate.google.com' target='_blank'>
                    <SiGoogletranslate size="50px"/>
                 
                </a>
            </div>}
            <div className='w-full flex justify-center pl-8'>
                <input type="range" onChange={e=>(dispatch(setMargin(+e.target.value)))} min={0} max={100} />
            </div>
        </header>
        <main className='h-[80vh] bg-gray-200 pt-3' onClick={()=>{if(menuOpen)setOpenMenu(false)}}>
            <section className='flex justify-center items-center h-full'>
                <Editor />
            </section>
        </main>
    </div>
  )
}
