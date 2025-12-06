import React from 'react';

const RegionSelector = ({ selectedRegion, onRegionChange }) => {
  const regions = [
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      <div className="inline-flex bg-white border-2 border-[#0a2f47] rounded-lg p-1 shadow-sm">
        {regions.map((region) => (
          <button
            key={region.value}
            onClick={() => onRegionChange(region.value)}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
              selectedRegion === region.value
                ? 'bg-[#0a2f47] text-white shadow-md'
                : 'bg-white text-[#0a2f47] hover:bg-gray-50'
            }`}
          >
            <span>{region.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
