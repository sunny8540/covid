  
import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
   const [data,setData]=useState("");
   const [data1,setData1]=useState("");
   const [covid,setCovid]=useState();
   const [globle,setGloble]=useState();
   const [conf,setConf]=useState();
   const [death,setDeath]=useState();
   const [lastChecked,setLastChecked]=useState();
   const [LastReport,setLastReport]=useState();


function set(e){
   let count=e.target.value;
   setData(count);
}
async function post(){
    
  
   
   




   
   
  var res=await fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country', {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '12d7aecbdcmshf68dd55db3022fap10c103jsn4278a783a1a3',
         'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
      }});
      var data=await res.json();
      console.log(data);
      console.log(data.data);
      var a=data.data;
      setConf(a.confirmed);
      setDeath(a.deaths);
      setGloble(a.location);
      setLastReport(a.lastReported);
      setLastChecked(a.lastChecked);      


}
useEffect(()=>{
   post();
})
  return (
    <div>
     <div className='main'>
     
     <div className='header'>
      <div className='img'>
         <div className='img1'><img className='rotate' src="https://th.bing.com/th/id/OIP.Y9MvPvwzQ6pAxxweZCxUFAHaHZ?w=184&h=183&c=7&r=0&o=5&pid=1.7" alt="pic1" /></div>
         <div className='img2'><img src="https://th.bing.com/th/id/OIP.q7SI22puM2y0EwtkEZplyQAAAA?w=183&h=118&c=7&r=0&o=5&pid=1.7" className='rotate2' alt="pic2" /></div>
      </div>
     <span className='h'>Covid-19 Tracking(World Wid) Result</span>
     

      <div className='containt-low'>
         <h1>{globle}</h1>
       
         <div className='lastUpdate'>Last Update:-{lastChecked}</div>
      </div>
      <div className='table'>
         <table>
            <tr>
               <th>Deathe</th>
               <th>Recovery</th>
            </tr>
            <tr>
               <td>{death}</td>
               <td>{conf}</td>
            </tr>
         </table>
      </div>
      </div>
     </div>
   
    </div>
  )
}

 

export default App

