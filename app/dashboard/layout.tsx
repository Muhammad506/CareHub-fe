import Sidebar from "../dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex ">
            {/* Sidebar */}
            <div className="flex-none h-full">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1  h-screen  transition-all duration-500">
                {children}
            </div>
        </div>
    );
}
