import { useSelector } from "react-redux"
import { RootState } from "../../store/store";
import MainLayout from "../../components/Layout/MainLayout";
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
import Accordion, { FAQ_type } from "../../components/Accordion/Accordion";
import Button from "../../components/Button/Button";

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

    <MainLayout>
      <div className="kv mt-[56px]">
        <Image Img={KV} width={1360} height={473} object="center" />
      </div>
      <div className="w-[70%] mx-auto">
        <Text type="textBlock">MerryMeal is a non-profit organization with a heartwarming mission: to combat food insecurity by providing access to nutritious meals for individuals and families facing hardship. We go beyond simply delivering food; we cultivate compassion and connection within our community,</Text>
        <NumberList data={numbers} />
      </div>
      <div className="mt-[80px] w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center">OUR FEATURES</h2>
        <Text className="text-center mt-[40px] mb-[80px]">
          You can make a difference by supporting a charity that you care about<br />
          Your donation can help to change lives
        </Text>
        <div className="flex gap-8">
          {features.map((feature, index) => <Card key={index} title={feature.title} description={feature.description} img={feature.img} type="link" />)}
        </div>
      </div>
      {/*  */}
      <section className="mt-[80px]">
        <h2 className="text-3xl font-bold text-green-800 text-center"> Let's create a brighter tomorrow</h2>
        <Text className="mt-[40px] mb-[80px] text-center">Join us in supporting MerryMeal, where every contribution brings warmth and nourishment to those in need.</Text>
        <section className="circleLine mb-[153px]">
          <div className="flex gap-16 w-[80%] bg-white z-10 mx-auto rounded-3xl border-[1px] border-black py-10 px-12">
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
              <Image Img={Nurse} width={480} height={510} object="center" className="h-full rounded-[30px] rounded-br-[56px]" />
              <Image Img={CTA} width={142} height={142} object="center" className="absolute bottom-0 right-0 max-w-[115px] rotate_infinite" />
            </div>
          </div>
        </section>
      </section>

      {/* faq */}
      <section className="flex gap-10 items-start w-[80%] mx-auto">
        <Image Img={FAQ} width={507} height={521} className="flex-1" />
        <div className="flex-[1.1] mt-5">
          <h2 className="text-green-900 text-3xl font-bold">Join us for the Better Future</h2>
          <Text className="mt-[20px] mb-[28px]">From understanding our mission to discovering how you can contribute</Text>
          <Accordion data={FAQ_data} />
        </div>
      </section>
    </MainLayout>
  )
}