import { useState } from 'react';
import DoctorImage from '../../assets/doctor/fd-3.avif';

const Questions = () => {
  const [items, setItems] = useState([
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4">
        <div className='mx-4 w-10/12 mx-auto'>
          <img src={DoctorImage} alt="Doctor" className="" />
        </div>
        <div className="container mx-auto p-4">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Most Questions By Our Beloved Patients</h1>
            {items.map((item, index) => (
              <div key={index} className="mb-4 border rounded">
                <div
                  className={`flex justify-between items-center p-4 cursor-pointer ${activeIndex === index ? 'bg-gray-200' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform ${activeIndex === index ? 'rotate-180' : ''} transition-transform`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-100">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
