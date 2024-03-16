import Navigation from "../Navigation/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center min-h-screen max-w-[1512px] mx-auto py-[24px] px-[38px]">
            <div className="flex flex-col px-[12px] w-full">
                <Navigation />
                <main className="w-full text-primary">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout;