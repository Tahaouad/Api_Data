import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
       
                const response = await axios.get('https://raw.githubusercontent.com/Tahaouad/Api_Data/master/users');
                setData(response.data);
           
            
        };

        fetchData();
    }, []);
  return (
    <div className="App">
       <>
            {data.length > 0 ? (
                data.map((d, index) => (
                
                    <div key={index}>
                      <img src={d.image} alt='test'/>
                      
                      {d.name}{'   '}{d.age}
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    </div>
  );
}

export default App;
