const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex justify-center px-[12px] w-full">
                <main className="w-full text-primary">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout;