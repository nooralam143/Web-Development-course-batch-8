import { Label, TextInput } from 'flowbite-react';

const InputField = ({name, type, value, placeHolder}) => {
    return (
        <div className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor={name} value={value} />
                </div>
                <TextInput id={name} type={type} placeholder={placeHolder} required shadow />
            </div>
        </div>
    );
}

export default InputField;