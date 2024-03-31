import React from 'react'

export const Model = (props) => {

  const {glasses, data, Index} = props;

  console.log(glasses);

  console.log('object', Index);

  return (
    <div>
        <div className="model mt-5 position-relative">
            <img width="250px" height="320px" src="/glassesImage/model.jpg" alt="..." />
            <div className="changeGlasses">
              <img width="150" src={glasses} alt="..."/>
            </div>
            <div className="glassesInfo ps-2">
                <div className="details">
                  <div className="brandName">
                    {data[Index(glasses)].name}
                  </div>
                  <p className="desc text-white">
                    {data[Index(glasses)].desc}
                  </p>
                </div>
              </div>
        </div>
    </div>
  )
}
