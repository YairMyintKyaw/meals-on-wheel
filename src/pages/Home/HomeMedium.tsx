import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Home from "./Home"
import HomeMember from "./HomeMember"
import HomeCaregiver from "./HomeCaregiver"
import HomePartner from "./HomePartner"
import HomeRider from "./HomeRider"
import HomeDonor from "./HomeDonor"
import HomeAdmin from "./HomeAdmin"
import PageLayout from "../../components/Layout/PageLayout"

const HomeMedium = () => {
  const {type} = useSelector((state: RootState) => state.user);

  let componentToRender;  
  switch (type) {
    case "member":
      componentToRender = <HomeMember/>;
      break;
    case "caregiver":
      componentToRender = <HomeCaregiver/>;
      break;
    case "partner":
      componentToRender = <HomePartner/>;
      break;
    case "volunteer":
      componentToRender = <HomeRider/>;
      break;
    case "donor":
      componentToRender = <HomeDonor/>;
      break;
    case "admin":
      componentToRender = <HomeAdmin/>;
      break;
    default:
      componentToRender = <Home />;
      break;
  }  

  return (
    <>
    {!type?<Home/>:
      <PageLayout>
        {componentToRender}
      </PageLayout>
    }
    </>
  )
}

export default HomeMedium