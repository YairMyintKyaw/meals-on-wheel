import { useSelector } from "react-redux"
import { RootState } from "../../store/store";
import "./style.css";
import NumberList, { NumberData } from "../../components/Number/Number";
import Text from "../../components/Text/Text";
import KV from "../../assets/images/Top/img_kv.png";
import Feature01 from "../../assets/images/Top/img_feature01.svg";
import Feature02 from "../../assets/images/Top/img_feature02.svg";
import Feature03 from "../../assets/images/Top/img_feature03.svg";
import FAQ from "../../assets/images/Top/img_faq.png"
import Card from "../../components/Card/Card";
import Image from "../../components/Image/Image";
import Nurse from "../../assets/images/img_auth.jpg"
import CTA from "../../assets/images/Top/img_cta.png"
import Hand from "../../assets/images/Top/img_hand.png"
import Smile from "../../assets/images/Top/img_smiley.png"
import Users from "../../assets/images/Top/img_users.png"
import Accordion, { FAQ_type } from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";
import PageLayout from "../../components/Layout/PageLayout";
import Footer from "../../components/Footer/Footer";

const numbers: NumberData[] = [
  {
    title: "Number of Donator",
    number: "10K"
  },
  {
    title: "Volunteers WorldWide",
    number: "15K"
  },
  {
    title: "We’ve Helped",
    number: "28K"
  }
]

const features = [
  {
    title: "Donation",
    description: "Your generous donation allows us to continue providing vital meals to those in need. Every contribution, big or small, has a lasting impact. Donate today!",
    img: Feature01
  },
  {
    title: "Volunteer",
    description: "Become a MerryMeal volunteer and deliver nutritious meals directly to recipients' doorsteps. Your compassion can make a world of difference",
    img: Feature02
  },
  {
    title: "Partner",
    description: "Amplify your impact! Partner with MerryMeal to utilize your resources and expertise in reaching those facing food insecurity. Learn more about partnership opportunities.",
    img: Feature03
  },
]

const FAQ_data: FAQ_type[] = [
  { question: "What is MerryMeal's mission?", answer: "Your donations play a crucial role in sustaining our operations and reaching more individuals in need. You can make a donation securely through our website or by contacting our team directly." },
  { question: "How can I support MerryMeal through donations?", answer: "Your donations play a crucial role in sustaining our operations and reaching more individuals in need. You can make a donation securely through our website or by contacting our team directly." },
  { question: "Are there volunteer opportunities available with MerryMeal?", answer: "Your donations play a crucial role in sustaining our operations and reaching more individuals in need. You can make a donation securely through our website or by contacting our team directly." },
]



export default function Home() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <PageLayout isFooter={false}>
        <div className="kv mt-[56px]">
          <Image Img={KV} width={1360} height={473} object="center" />
        </div>
        <div className="lg:w-[70%] mx-auto">
          <Text type="textBlock">MerryMeal is a non-profit organization with a heartwarming mission: to combat food insecurity by providing access to nutritious meals for individuals and families facing hardship. We go beyond simply delivering food; we cultivate compassion and connection within our community,</Text>
          <NumberList data={numbers} />
        </div>
        <div className="mt-[80px] lg:w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center">OUR FEATURES</h2>
          <Text className="text-center mt-[40px] mb-[80px]">
            You can make a difference by supporting a charity that you care about<br />
            Your donation can help to change lives
          </Text>
          <div className="flex flex-col md:flex-row gap-8">
            {features.map((feature, index) => <Card key={index} title={feature.title} description={feature.description} img={feature.img} type="link" />)}
          </div>
        </div>
        <section className="mt-[80px]">
          <h2 className="text-3xl font-bold text-green-800 text-center"> Let's create a brighter tomorrow</h2>
          <Text className="mt-[40px] mb-[80px] text-center">Join us in supporting MerryMeal, where every contribution brings warmth and nourishment to those in need.</Text>
          <section className="circleLine arrow mb-[153px]">
            <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16 lg:w-[80%] bg-white z-10 mx-auto rounded-3xl border-[1px] border-black py-5 px-6 lg:py-10 lg:px-12">
              <div className="flex-1 py-8">
                <h3 className="text-5xl font-bold mb-[32px]">
                  Share Food With <br />
                  Others Who Is <br />
                  In Need <br />
                </h3>
                <p className="text-sm font-medium mb-[56.38px]">Every meal shared is a gesture of kindness, every donation given is a beacon of hope. Your generosity fuels the journey towards a hunger-free tomorrow for all.</p>
                <div className="relative flex w-full h-[12.37px] bg-slate-300 rounded-lg mb-[32px]">
                  <p className="absolute bottom-[12.37px] text-neutral-800 text-sm font-medium">Raised : $69,152</p>
                  <p className="absolute bottom-[12.37px] right-0 text-neutral-800 text-sm font-medium">Goal: $89,000</p>
                  <span className="h-full w-[40%] bg-green-800 rounded-lg"></span>
                </div>
                <Button buttonType="secondary--green" className="w-fit">Donate Now</Button>
              </div>
              <div className="flex-1 relative">
                <Image Img={Nurse} width={480} height={510} object="center" className="h-full rounded-[30px] rounded-br-[38px] lg:rounded-br-[56px]" />
                <Image Img={CTA} width={142} height={142} object="center" className="absolute bottom-0 right-0 max-w-[75px] lg:max-w-[115px] rotate_infinite" />
              </div>
            </div>
          </section>
        </section>
        {/* start help */}
        <section className="bg-green-900 py-[44.39px] px-10 rounded-[30px] lg:w-[80%] mx-auto mb-[160px]">
          <h2 className="text-4xl text-center text-white">How To Start Help</h2>
          <p className="text-white text-center text-sm mt-6 mb-16"> Whether it's a smile, a donation, or lending a helping hand, every action has the power to ignite positive change.</p>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <section className="flex flex-col items-center text-white">
              <Image Img={Users} width={52} height={52} className="max-w-[52px]" />
              <h3 className="text-xl mt-5">Register Yourself</h3>
              <p className="font-medium text-xs mt-3 text-center">Sign up to join and be part of the good  <br /> people who love to share</p>
            </section>
            <section className="flex flex-col items-center text-white">
              <Image Img={Hand} width={52} height={52} className="max-w-[52px]" />
              <h3 className="text-xl mt-5">Select Roles</h3>
              <p className="font-medium text-xs mt-3 text-center">There are many things you can choose to <br /> share goodness with</p>
            </section>
            <section className="flex flex-col items-center text-white">
              <Image Img={Smile} width={52} height={52} className="max-w-[52px]" />
              <h3 className="text-xl mt-5">Share Happiness</h3>
              <p className="font-medium text-xs mt-3 text-center">Sharing happiness with those less and <br /> doing more good for others</p>
            </section>
          </div>
        </section>
        {/* faq */}
        <section className="flex flex-col-reverse md:flex-row gap-10 items-start lg:w-[80%] mx-auto">
          <Image Img={FAQ} width={507} height={521} className="flex-1" />
          <div className="flex-[1.1] mt-5">
            <h2 className="text-green-900 text-3xl font-bold">Join us for the Better Future</h2>
            <Text className="mt-[20px] mb-[28px]">From understanding our mission to discovering how you can contribute</Text>
            <Accordion data={FAQ_data} />
          </div>
        </section>
      </PageLayout>
      <section className="footer pt-56 pb-20 px-1 w-full text-center mt-[144px]">
        <div className="relative w-fit mx-auto text-white">
          <span className="font-medium text-base md:text-xl text-end absolute right-0 -top-4">Begin with a single step towards kindness.</span>
          <h2 className="text-8xl md:text-9xl text-center">Become a part <br className="hideInSp" /> of the future</h2>
        </div>
        <Button buttonType="secondary" className="text-white w-fit mx-auto mt-[73px]">Join With Us</Button>
      </section>
      <Footer />
    </>
  )
}