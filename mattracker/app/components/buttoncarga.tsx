

import Scan from '@/app/lib/reader'
import { useContext } from 'react'
import { ActionsContext } from '@/app/context/scantest';
import Notification from '@/app/components/notification'



    const ButtonCarga = ({toggleValue} : any) => {

        const [showDescription, updateShowDescription] = useState(false);
      
        const toggleDescription = () => {
          if (showDescription === false) {
            updateShowDescription(true);
          }
          else {
            updateShowDescription(false)
          }
        }
        
        toggleValue(showDescription);     //This is me trying to pass the updated  value to the parent element lol
  
    return (
      <div>
          <button 
          className="py-2 px-4 bg-sky-600"
          onClick={toggleDescription}>
          </button>
      </div>
    )
}
    export default ButtonCarga