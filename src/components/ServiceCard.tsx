import { Blocks, CarFront, Computer, ComputerIcon, Phone } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: <Phone/>, // You can replace these with actual icons
    title: 'Mobile and Accessories ',
    description: 'Audit and assurance is all about meticulous...',
    link: '#',
    serviceType: 'Consulting Service',
    color: 'text-rose-500'
  },
  {
    icon: <ComputerIcon/>,
    title: 'Computer and Hardware',
    description: 'We work with our clients and do a deep analysis of their...',
    link: '#',
    serviceType: 'Business Service',
    color: 'text-rose-500'
  },
  {
    icon: <CarFront/>,
    title: 'Automobile and Kit',
    description: 'Company income subject to tax is often determined...',
    link: '#',
    serviceType: 'Taxes Service',
    color: 'text-rose-500'
  },
  {
    icon: <Blocks/>,
    title: 'Pcb And Hardware',
    description: 'Company income subject to tax is often determined...',
    link: '#',
    serviceType: 'Taxes Service',
    color: 'text-rose-500'
  }
];

const ServiceCard = ({ icon, title, description, link, serviceType, color }:any) => (
  <div className="bg-gradient-to-tl from-black via-cyan-950 to-zinc-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className={`text-3xl ${color} glass-bg-1 w-[50px] h-[50px] flex justify-around items-center`}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-white mb-4">{description}</p>
    <a href={link} className="text-sm font-medium text-blue-500 hover:underline flex items-center">
      read more
      <span className="ml-1">→</span>
    </a>
  </div>
);

const ServiceList = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
);

export default ServiceList;
