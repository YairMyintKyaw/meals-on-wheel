import { Link, useNavigate } from "react-router-dom"
import MainLayout from "../../components/Layout/MainLayout"
import Button from "../../components/Button/Button"
import Img from "../../assets/images/img_logo00.png"

const UserType = () => {
    const nav = useNavigate();
    const handleClick = () => {

    }
    const handleBack = () => {
        nav("/");
    }
    return (
        <div className=" max-w-[600px] mx-auto my-[80px]">
            <div className="mb-[7px]"><Button handleClick={handleBack} buttonType="back">Back</Button></div>
            <div className=""><figure className="w-[245px] mx-auto mb-[39px]"><img src={Img} alt="" /></figure></div>
            <section>
                <h1 className="text-center text-green-800 text-4xl font-semibold mb-[36px]">Join With Us</h1>
                <ul className="w-[380px] flex flex-col gap-[24px] mx-auto">
                    <li><Link to={"/register/member"}><Button handleClick={handleClick}>Member</Button></Link></li>
                    <li><Link to={"/register/care-giver"}><Button handleClick={handleClick}>Care Giver</Button></Link></li>
                    <li><Link to={"/register/donator"}><Button handleClick={handleClick}>Donator/Supporter</Button></Link></li>
                    <li><Link to={"/register/volunteer"}><Button handleClick={handleClick}>Volunteer</Button></Link></li>
                    <li><Link to={"/register/partner"}><Button handleClick={handleClick}>Partner</Button></Link></li>
                </ul>
            </section>
        </div>
    )
}

export default UserType