import {useState} from 'react';
import {FaRegFileAlt} from 'react-icons/fa';
import MenuList from '../constants/MenuList';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';


export default function Menu() {
    const [openMenu,setOpenMenu] = useState(false);

    const doc = useSelector((state:any)=>state.doc.value)
    const fileName = useSelector((state:any)=>state.fileName.value)
    const margin = useSelector((state:any)=>state.margin.value)
    function Export2Word(doc:string, fileName:string){
        const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        const postHtml = "</body></html>";
        const html = preHtml+doc+postHtml;
    
        const blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        saveAs(blob,fileName+'.doc')
    }

    // const convertDocToHtml = async (file: File): Promise<string> => {
    //     const arrayBuffer = await file.arrayBuffer();
    //     const options = {};
    
    //     const result = await Mammoth.extractRawText({ arrayBuffer });
    //     return result.value;
    // };
    
    // const handleConversion = (docFile:any) => {
    //     convertDocToHtml(docFile)
    //     .then((htmlContent) => {
    //         console.log(htmlContent);
    //         // Use the converted HTML content as needed
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // };
    function printDivToPdf(divId:any, fileName:any,margin:any) {
        const element = document.getElementsByClassName(divId);
        if (element) {
          // Create a new window for printing
          const printWindow:any = window.open('', '_blank');
          
          // Write the div content to the print window
          printWindow.document.write(`
            <html>
            <head>
              <title>${fileName}</title>
              <style>
                @media print {
                  /* Define print-specific styles */
                  body {
                    marginInline: ${margin};
                    padding: 1cm;
                  }
                }
              </style>
            </head>
            <body>
              ${element[0].innerHTML}
            </body>
            </html>
          `);
          printWindow.document.close();
      
          printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
          };
        } else {
          console.error(`Element with id '${divId}' not found.`);
        }
      }
      
    
  return (
    <div>
        <FaRegFileAlt size='30px' onClick={()=>{setOpenMenu(!openMenu)}} className='cursor-pointers'/>
        {(openMenu) && <div id="dropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {MenuList.map(e=> e === 'Open' ? <div className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:underline cursor-pointer'>
                    <label htmlFor="fileup">Open</label>
                    <input type="file" id='fileup' style={{display:"none"}} />
                </div> :<li>
                <span onClick={(e:any)=>{
                    if(e.target.innerHTML === 'Download')
                        Export2Word(doc,fileName)
                    if(e.target.innerHTML === 'New Document')
                        window.open(window.location.href,'_blank')
                    if(e.target.innerHTML === 'Print')
                        printDivToPdf('ql-editor',fileName,margin)
                }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{e}</span>
                </li>
                )}
            </ul>
        </div>}
    </div>
  )
}
