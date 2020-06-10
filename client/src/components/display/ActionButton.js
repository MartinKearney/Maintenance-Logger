import React from 'react';

// import {useEffect} from 'react';
// import M from "materialize-css/dist/js/materialize.min.js";

const AddBtn = () => {
  // useEffect(() => {
  //   const options = {
  //     direction: "left",
  //   };
  //   const elems = document.querySelectorAll(".fixed-action-btn");
  //   let instance = M.FloatingActionButton.init(elems, options);
  //   // what does the line below do?
  //   return () => instance.destroy();
  // }, []);

  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-job-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#employee-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a
            href='#add-employee-modal'
            className='btn-floating red modal-trigger'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
