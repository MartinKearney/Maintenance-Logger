import React from 'react';

import Tippy from '@tippyjs/react';

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <Tippy content='Add new log' placement='left' delay={(250, 100)}>
        <a
          href='#add-job-modal'
          className='btn-floating btn-large blue darken-2 modal-trigger'
        >
          <i className='large material-icons'>add</i>
        </a>
      </Tippy>
      <ul>
        <li>
          <Tippy
            content='View employee list'
            placement='left'
            delay={(250, 100)}
          >
            <a
              href='#employee-list-modal'
              className='btn-floating green modal-trigger'
            >
              <i className='material-icons'>person</i>
            </a>
          </Tippy>
        </li>
        <li>
          <Tippy content='Add new employee' placement='left' delay={(250, 100)}>
            <a
              href='#add-employee-modal'
              className='btn-floating red modal-trigger'
            >
              <i className='material-icons'>person_add</i>
            </a>
          </Tippy>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
