import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';


const HomeDonor = () => {
  const nav = useNavigate();
const handleDonateClick = () => {
  nav("/payment");
};
  return (
    <div>
      <h2 className='text-center mt-10 mb-4 text-green-800 font-700 font-extrabold text-4xl'>Be The Solution</h2>
      <p className='mt-2 mb-10 text-center text-neutral-800'>Your generosity fuels our mission to provide essential meals and vital companionship to seniors and individuals with disabilities in our community. With every donation, you're making a tangible difference in the lives of those who rely on us for daily nourishment and support. Your support enables us to deliver hot, nutritious meals to doorsteps, ensuring that no one is left hungry or isolated. Together, we can combat hunger and loneliness, brightening the days of our neighbors in need. Join us in our efforts to create a healthier, more connected community by donating today. Together, we can make a meaningful impact that lasts a lifetime.</p>
    <div className='my-5 md:flex md:flex-row gap-6 ' >
    <div>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-green-600 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-white">Basic Donation plan</h5>
    <div className="flex items-baseline text-white-900 dark:text-white">
    <span className="text-3xl font-semibold">$</span> 
    <span className="text-5xl font-extrabold tracking-tight">50</span>
    {/* <span className="ms-1 text-xl font-normal text-white-500 dark:text-white-400">/month</span> */}
    </div>
    <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">2 team members</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">4 sets of meals</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Cover fee for 2 Delivey Routes</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">No Tip to Volunteer</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Fund Raising Point : 10 Points</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">A Gift Included</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Integration help</span>
    </li> 
   </ul>
    <Button buttonType='white' handleClick={handleDonateClick}>Donate</Button>
    </div> 
    </div>


    <div>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-green-600 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-white">Standard Donation plan</h5>
    <div className="flex items-baseline text-white-900 dark:text-white">
    <span className="text-3xl font-semibold">$</span> 
    <span className="text-5xl font-extrabold tracking-tight">89</span>
    {/* <span className="ms-1 text-xl font-normal text-white-500 dark:text-white-400">/month</span> */}
    </div>
    <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">4 team members</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">8 sets of meals</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Cover fee for 4 Delivey Routes</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Small Tip to Volunteer</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Fund Raising Point : 25 Points</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Three Gift Included</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Integration help</span>
    </li> 
   </ul>
   <Button buttonType='white' handleClick={handleDonateClick}>Donate</Button>    
   </div>
    </div>

    <div>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-green-600 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-white">Premium Donation plan</h5>
    <div className="flex items-baseline text-white-900 dark:text-white">
    <span className="text-3xl font-semibold">$</span> 
    <span className="text-5xl font-extrabold tracking-tight">129</span>
    {/* <span className="ms-1 text-xl font-normal text-white-500 dark:text-white-400">/month</span> */}
    </div>
    <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">10 team members</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">8 sets of meals</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Cover fee for 8 Delivey Routes</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Decent Tip to Volunteer</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Fund Raising Point : 50 Points</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Special Gift Included</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Integration help</span>
    </li> 
   </ul>
   <Button buttonType='white' handleClick={handleDonateClick}>Donate</Button>
       </div>
    </div>

    <div>
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-green-600 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-white">Gold Donation Plan</h5>
    <div className="flex items-baseline text-white-900 dark:text-white">
    <span className="text-3xl font-semibold">$</span> 
    <span className="text-5xl font-extrabold tracking-tight">229</span>
    {/* <span className="ms-1 text-xl font-normal text-white-500 dark:text-white-400">/month</span> */}
    </div>
    <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">.. team members</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">.. sets of meals</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Cover fee for .. Delivey Routes</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">.. Tip to Volunteer</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Fund Raising Point : .. Points</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">.. Gift Included</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-white ms-3">Integration help</span>
    </li> 
   </ul>
   <Button buttonType='white' handleClick={handleDonateClick}>Donate</Button>    </div>
    </div>
    </div>
    </div>
  )
}

export default HomeDonor