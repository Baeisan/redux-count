import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = ({onCreate, onRemove}) => {
  console.log('버튼렌더링')
  return (
    <div className="Buttons">
        <div className="btn add" onClick={ ()=> onCreate() }>
            생성
        </div>
        <div className="btn remove" onClick={()=> onRemove()}>
            제거
        </div>
    </div>
  )
}

Buttons.propsTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
}

Buttons.defaultProps = {
  onCreate: () => console.log('nocreate'),
  onRemove: () => console.log('noremove')
}

export default Buttons;