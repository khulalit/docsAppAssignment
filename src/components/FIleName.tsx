
import { useDispatch, useSelector } from 'react-redux';
import { setFileName } from '../redux/reducers/fileNameSlice';

export default function FileName() {
  const fileName = useSelector((state:any)=>state.fileName.value);
  const dispatch = useDispatch();
  return (
    <input value={fileName} className='outline-none text-[16px]' onChange={(e)=>{
        dispatch(setFileName(e.target.value))}}
        onBlur={(e)=>{
            if(e.target.value === '')
                dispatch(setFileName('Untitled Document'));
        }}
    />
  )
}
