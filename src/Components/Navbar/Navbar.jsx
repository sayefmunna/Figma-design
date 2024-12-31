


import { useContext } from 'react';
import { AnotherContext } from '../../App';

const Navbar = () => {

    const  [another,setAnother]=useContext(AnotherContext)

    return (
        <div>
            
             <button onClick={()=>setAnother(another+1)}>Count3:{another}</button>
        </div>
    );
};

export default Navbar;