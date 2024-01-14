import React, { useState } from 'react';

const BookingType = () => {
  const options = ['AWG', 'HKG', 'Short QTY'];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="Booking Type" value="Booking Type" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search options"
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <select
          id="Booking Type"
          value={selectedOption}
          onChange={handleChange}
          required
          className="absolute top-0 right-0 bottom-0 block w-8 h-full border-transparent bg-transparent rounded-md focus:ring-0 focus:border-0 sm:text-sm"
        >
          <option value="" disabled hidden>
            Select option
          </option>
          {filteredOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Label = ({ htmlFor, value }) => (
  <label className="block text-sm font-medium text-gray-700" htmlFor={htmlFor}>
    {value}
  </label>
);

export default BookingType;
