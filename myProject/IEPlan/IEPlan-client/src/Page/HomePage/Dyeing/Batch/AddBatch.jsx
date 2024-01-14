import React, { useState } from 'react';
import Buyer from '../../../../Component/Buyer';
import Order from '../../../../Component/Orde';
import Style from '../../../../Component/Style';
import Color from '../../../../Component/Color';
import FabricType from '../../../../Component/FabricType';
import BookingType from './../../../../Component/BookingType';
import DyeMC from '../../../../Component/DyeMC';

const AddBatch = () => {


  return (
    <div className="max-w-md">
      <Buyer/>
      <Order/>
      <Style/>
      <Color/>
      <FabricType/>
      <BookingType/>
      <DyeMC/>
    </div>
  );
};

export default AddBatch;
