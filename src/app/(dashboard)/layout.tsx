import Header from "../../components/Atom/Header/Header"

type Props = {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="ox-3 lg:px-14">
                {children}
            </main>
        </>
    )
}

export default DashboardLayout