import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Scanner() {
  const [data, setData] = useState('Not Found');
  const dispatch = useDispatch();
  return (
    <>
      <BarcodeScannerComponent
        width={300}
        height={300}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData('Not Found');
        }}
      />
      <p>{data}</p>
      <button onClick={() => dispatch({ type: 'SCANNER', payload: { data } })}>
        Difficult Capture.
      </button>
    </>
  );
}

export default connect(mapStoreToProps)(Scanner);
