



import { useContext } from 'react';
import Hero from '../Hero/Hero';
import { CreateContext } from '../../App';

const Home = () => {

    const [count,setCount]=useContext(CreateContext)

    return (
        <div>
            <Hero/>          
             <button onClick={()=>setCount(count+1)}>Count-2:{count}</button>
        </div>
    );
};

export default Home;