import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import Deliver from "../../assets/images/Meals_on_Wheels_delivery.jpg";
import Card from "../../components/Card/Card";
import Wedo from "../../assets/images/wedo.png";
import GetInv from "../../assets/images/getinvolve.png";
import Mission from "../../assets/images/mission.png";
import { FaCompressArrowsAlt } from "react-icons/fa";

const AboutUs = () => {
  const features = [
    {
      title: "Our Mission",
      description:
        "Our mission is simple yet profound: to create a hunger-free world where everyone has access to nourishing food. We strive to make a positive impact in our communities by addressing the root causes of food insecurity and offering sustainable solutions.",
      img: Mission,
    },
    {
      title: "What We Do",
      description:
        "We go beyond simply distributing meals. Through our network of volunteers, partners, and supporters, we provide holistic support to those in need. From delivering nutritious meals to offering educational programs and advocacy initiatives, we work tirelessly to empower individuals and communities to thrive.",
      img: Wedo,
    },
    {
      title: "Get Involved",
      description:
        "Join us in our mission to create a brighter, hunger-free future for all. Whether you volunteer your time, make a donation, or simply spread the word about our cause, every action makes a difference. Together, we can build a world where no one has to worry about where their next meal will come from.",
      img: GetInv,
    },
  ];

  return (
    <PageLayout>
      <div className="grid grid-col-1 md:grid-cols-2 gap-10 mt-[50px] items-center">
        <div className="p-4">
          <img
            src={Deliver}
            alt="deliver"
            className="w-full rounded-2xl shadow-sm"
          />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold text-green-800 mb-20">
            Welcome to Merry Meals
          </h1>
          <p className="text-sm md:text-xl font-bold text-black">
            At Merry Meals, we believe that no one should go hungry. We are a
            non-profit organization dedicated to combating food insecurity and
            providing access to nutritious meals for individuals and families
            facing hardship.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-[40px] p-20">
      
     {
      features.map((f,index)=>(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
        <a href="#">
            <img className="rounded-t-lg" src={f.img} alt="" />
        </a>
        <div className="p-5 text-center">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-800 dark:text-white">{f.title}</h5>
            </a>
            <p className="mb-3 font-normal text-green-800 dark:text-gray-400">{f.description}</p>
          
        </div>
    </div>
      ))
     }
      </div>
    </PageLayout>
  );
};

export default AboutUs;
