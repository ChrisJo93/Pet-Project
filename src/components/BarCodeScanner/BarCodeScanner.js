import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

//--To Do
//Need to find a way to capture data and off camera automatically.
//Need an api route for barcode information
//Need a route to database

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
