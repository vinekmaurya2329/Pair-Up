import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

const override  = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    
  return (
   
        
        <div className="sweet-loading">
     

      <HashLoader
        color={'#000'}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

    
  )
}

export default Loader