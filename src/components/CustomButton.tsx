
export default function CustomButton({title,icon,onclick,...rest}:{title:string,icon:any,onclick:any}) {
  return (
    <button {...rest} className='flex gap-1 bg-blue-500 text-white text-[14px] px-2 py-1 rounded-lg font-semibold items-center' onClick={onclick} >
        <div>{icon}</div>{title}
    </button>
  )
}
