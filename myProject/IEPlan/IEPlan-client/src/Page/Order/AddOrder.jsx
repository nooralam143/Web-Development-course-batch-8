import { Button } from "flowbite-react";
import InputField from "../../Component/InputField";


const AddOrder = () => {
    const handleAddCell = () => {
        const part2Div = document.querySelector('.part3');
        const clone = part2Div.cloneNode(true);
        part2Div.parentNode.appendChild(clone);
      };
    return (
        <div>
            <div className="flex flex-col">
            <div className="part1 flex space-x-2">
            <InputField type={'date'} name={'Shipment Date'} value={'Shipment Date'} placeHolder={"Shipment Date"}></InputField>
            <InputField type={'date'} name={'Po Date'} value={'Po Date'} placeHolder={"Po Date"}></InputField>
            <InputField type={'date'} name={'Delivery Date'} value={'Delivery Date'} placeHolder={"Delivery Date"}></InputField>
            <InputField type={'date'} name={'Booking Received Date'} value={'Booking Received Date'} placeHolder={"Booking Received Date"}></InputField>
            </div>
            <div className="part2 flex space-x-2">
            <InputField type={'text'} name={'Buyer'} value={'Buyer'} placeHolder={"Buyer"}></InputField>
            <InputField type={'text'} name={'Order'} value={'Order'} placeHolder={"Order"}></InputField>
            <InputField type={'text'} name={'Style'} value={'Style'} placeHolder={"Style"}></InputField>
            </div>
            <div className="part3 flex space-x-2">
            <InputField type={'text'} name={'Color'} value={''} placeHolder={"Color"}></InputField>
            <InputField type={'text'} name={'Color Type'} value={''} placeHolder={"Color Type"}></InputField>
            <InputField type={'text'} name={'Fabric Type'} value={''} placeHolder={"Fabric Type"}></InputField>
            <InputField type={'text'} name={'Dia'} value={''} placeHolder={"Dia"}></InputField>
            <InputField type={'text'} name={'GSM'} value={''} placeHolder={"GSM"}></InputField>
            <InputField type={'text'} name={'Type'} value={''} placeHolder={"Booking Type"}></InputField>
            <InputField type={'number'} name={'Order PCS'} value={''} placeHolder={"Order PCS"}></InputField>
            <InputField type={'number'} name={'Booking QTY'} value={''} placeHolder={"Order QTY"}></InputField>
            <InputField type={'number'} name={'Finish QTY'} value={''} placeHolder={"Finish QTY"}></InputField>
            <InputField type={'number'} name={'CollarCuff PCS'} value={''} placeHolder={"CollarCuff PCS"}></InputField>
            </div>
            </div>
            <Button className="w-auto ml-3 h-auto" onClick={handleAddCell}>
          Add Cell
        </Button>
        </div>
    );
};

export default AddOrder;