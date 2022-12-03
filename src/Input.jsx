import React, { useState } from 'react'

function Input() {
    const [set,setData]=useState({
       fname:'',
    }); 
    function get(e){    
        let name=e.target.name;
        let value=e.target.value;
        setData({...set,[name]:value});

    }   
    async function post(){
        let {fname}=set;
        const res=await fetch('https://date-eb60d-default-rtdb.firebaseio.com/userRecord.json',{
        method:"POST",
        header:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            fname
        })
    });
    if(res){
        setData({
            fname:'',
        });
        alert("request send");
    }else{
        alert("request not send");
    }
   

    }


  return (
    <div>
       <div className='input1'>
       <input type="text" placeholder='enter name'
        name='fname'
        value={set.fname}
        onChange={get} />
       </div>
       <div className='but'>
        <button onClick={post}>click here</button>
       </div>
    </div>
  )
}

export default Input;
     