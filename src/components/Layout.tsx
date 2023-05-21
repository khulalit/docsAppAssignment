import HeaderLayout from './HeaderLayout';
import FileName from './FIleName';
import EditorOptions from './EditorOptions';
import Editor from './Editor/Editor';
import Menu from './Menu';
import { useDispatch } from 'react-redux';
import { setMargin } from '../redux/reducers/marginSlice';

export default function Layout() {
    const dispatch = useDispatch();
    return (
    <div className=' h-full'>
        <header className='h-[20vh]'>
            <HeaderLayout 
                left={<Menu />} 
                right={''}
                bottom={<EditorOptions/>}
                middle={<FileName />}
            />
            <div className='w-full flex justify-center pl-8'>
                <input type="range" onChange={e=>(dispatch(setMargin(+e.target.value)))} min={0} max={100} />
            </div>
        </header>
        <main className='h-[80vh] bg-gray-200 pt-3'>
            <section className='flex justify-center items-center h-full'>
                <Editor />
            </section>
        </main>
    </div>
  )
}
