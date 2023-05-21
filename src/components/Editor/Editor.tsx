import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { setDoc } from '../../redux/reducers/docSlice';

export default function Editor() {
  const [value, setValue] = useState('');
  const [margin,setMargin] = useState(0);
  const margin_ = useSelector((state:any)=>{return state.margin.value});
  const dispatch = useDispatch();
  useEffect(()=>{
    setMargin(+margin_)
  },[margin_])
  return (
      <div className='w-3/4 bg-white h-full'>
        <ReactQuill theme="snow" value={value} id='quill' onChange={(value)=>{setValue(value);dispatch(setDoc(value))}} className={`h-[100%]`} formats={['header','bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image', 'video']}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
        style={{paddingInline: +margin+'px',fontFamily:'sans-serif'}}
        />
      </div> 
    )
}