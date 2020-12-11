import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import BarcodeScannerComponent from 'react-webcam-barcode-scanner';

const Scanner = (props) => {
  const [data, setData] = useState('Not Found');
  const dispatch = useDispatch();

  const clickCapture = () => {
    dispatch({ type: 'SCANNER', payload: { data } });
  };

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
      {/* if data not found, keep scanner on. If data found, turn off and record data. */}
      {data !== 'Not Found'
        ? props.scannerOff(false, data)
        : props.scannerOff(true, data)}
    </>
  );
};

export default connect(mapStoreToProps)(Scanner);
