import React from 'react'
export const Items = (props) => {

  const {handleGlasses, data} = props;
  console.log(handleGlasses);
  
  return (
    <div>
        <div className="container mt-5">
        <div className="row row-item gap-4">
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g1.jpg" alt="" onClick={() => handleGlasses(data[0].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g2.jpg" alt="" onClick={() => handleGlasses(data[1].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g3.jpg" alt="" onClick={() => handleGlasses(data[2].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g4.jpg" alt="" onClick={() => handleGlasses(data[3].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g5.jpg" alt="" onClick={() => handleGlasses(data[4].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g6.jpg" alt="" onClick={() => handleGlasses(data[5].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g7.jpg" alt="" onClick={() => handleGlasses(data[6].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g8.jpg" alt="" onClick={() => handleGlasses(data[7].url)}/>
            </div>
            <div className="col-2">
                <img width="100px" height="60px" src="/glassesImage/g9.jpg" alt="" onClick={() => handleGlasses(data[8].url)}/>
            </div>
        </div>

        </div>
    </div>
  )
}
