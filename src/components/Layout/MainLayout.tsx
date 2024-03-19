const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center min-h-screen max-w-[1512px] mx-auto py-[24px] px-[19px] md:px-[38px]">
            <div className="flex flex-col px-[12px] w-full">
                <main className="w-full text-primary">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout;