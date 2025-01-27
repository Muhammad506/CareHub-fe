import Sidebar from "../dashboard/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex ">
            {/* Sidebar */}
            <div className="flex-none h-screen">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1  h-screen bg-gray-100 transition-all duration-500">
                {children}
            </div>
        </div>
    );
}
