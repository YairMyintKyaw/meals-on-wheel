import MainLayout from "./MainLayout"
import Img from "../../assets/images/img_auth.jpg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const nav = useNavigate()
    const handleClick = () => {
        nav(-1);
    }
    return (
        <MainLayout>
            <div className="flex py-[12px] h-full">
                <div className="flex-[6] h-full max-h-[calc(100vh-24px)] sticky top-[12px] overflow-hidden">
                    <figure className="rounded-[20px] overflow-hidden h-full overlay sticky top-0">
                        <img src={Img} alt="" className="h-full object-cover object-right" />
                        <figcaption className="absolute bottom-[11%] left-[5%] z-10">
                            <h2 className="text-5xl text-white font-semibold mb-[18px]">Merry Meal</h2>
                            <p className="text-2xl text-white font-medium ">Every contribution, big or small, fuels hope and empowers <br /> individuals and families in need.</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="flex-[4] px-[6%] py-[36px]">
                    <Button handleClick={handleClick} buttonType="back" className="mb-[42px]">Back</Button>
                    <h1 className="text-2xl font-medium text-neutral-800 mb-[18px]">{title}</h1>
                    {children}
                    <p className="text-base font-medium text-neutral-500 mt-[24px] text-center">By continuing, you agree to the MERRY MEAL <a target="_blank" className="" href="https://www.gofundme.com/terms">terms</a> and <br />acknowledge receipt of our <a target="_blank" href="https://www.gofundme.com/terms">privacy notice</a>.</p>
                </div>
            </div>
        </MainLayout>
    )
}

export default AuthLayout