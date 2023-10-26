import React from "react";

const Service = () => {
  let status = true;
  return (
    <div className="ok">
      <p>This is Service Page :: conditional Rendering</p>
      {(() => {
        if (status == false) {
          return (
            <>
              <button>SignIn</button>
            </>
          );
        } else {
          return (
            <>
              <button>SignOut</button>
            </>
          );
        }
      })()}
    </div>
  );
};

export default Service;
