import { RotatingLines } from "react-loader-spinner";
import { FC } from 'react';

const Loader: FC = () => {
  
    const props={
        visible: true,
        height: 96,
        width:"96",
        color:"cadetblue",
        strokeWidth:"5",
        animationDuration:"0.75",
        ariaLabel:"rotating-lines-loading",
      }
    return (
        <div className="loader-container">
<RotatingLines
     {...props}
    />
        </div>
    
  );
}

export default Loader;