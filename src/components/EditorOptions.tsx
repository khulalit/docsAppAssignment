
import fontFamilies from '../constants/FontFamily';

export default function EditorOptions() {
  return (
    <div id="toolbar" className='ql-toolbar ql-snow flex gap-8 bg-[#edf2fa] rounded-full px-4 py-2 w-auto items-center' style={{border: 'none'}}>
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
      <option value="false"></option>
    </select>
    <select className='ql-font'>
        {fontFamilies.map(({id,label}:any)=><option value={id} key={id} onClick={(e)=>{
            console.log(e)
        }}>{label}</option>)}
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-video"></button>
    <button className="ql-clean"></button>
  </div>

  )
}
