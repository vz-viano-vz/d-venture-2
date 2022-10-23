//scan.js

import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import Navdash from "../../component/Navdash";

function Scan() {
  const [data, setData] = useState("No result");
  const [link, setLink] = useState(null);
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="container-fluid align-center">
    <Navdash/>
      <div className='row' >
        <h1 className='display1 align-center' style={{textAlign:'center'}}>EcoScan</h1>
        <div className="col-6" >
          <QrReader style={{ width: "100vw", height: "100vh" }}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }
              if (!!error) {
                console.info(error);
              }}}constraints    ={{ facingMode:  "environment"  }}/>
        </div>
        <div className="col-6 mt-5" >
        <textarea value={data} style={{height:'75%'}}className="col-12 mt-5" ></textarea>
        <button style={{width:'100%'}} type="button" onClick={() => openInNewTab(data.toString())} class="btn btn-success">let's Go</button>
        </div>
        
      </div>
    </div>
    
  );
}

export default Scan;
