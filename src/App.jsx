import React from 'react';
import './index.css'; 
import CipherUi from './components/CipherUi';
import Instructions from './components/Instructions';

function App() {


    return (
        <>
           <h1 className="text-4xl font-extrabold mb-3 mt-10 text-blue-600 text-center">CaesarCipher App</h1>
        <div className='grid grid-cols-2 px-3 justify-center'>
             <div className=" font-inter ">
          <Instructions />
        </div>
        <div>
            <CipherUi />
        </div>
        </div>
        </>

    );
}

export default App;
