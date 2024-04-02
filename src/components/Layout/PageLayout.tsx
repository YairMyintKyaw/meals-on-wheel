import Footer from "../Footer/Footer"
import Navigation from "../Navigation/Navigation"
import MainLayout from "./MainLayout"

const PageLayout = ({ isFooter = true, children }: { isFooter?: boolean, children: React.ReactNode }) => {
    return (
        <MainLayout>
            <Navigation />
            {children}
            {isFooter && <Footer />}
        </MainLayout>
    )
}

export default PageLayout