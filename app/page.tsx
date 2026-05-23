import Sidebar from "@/components/Sidebar";
import CvContent from "@/components/CvContent";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl">
      <Sidebar />
      <div className="flex-1 lg:ml-0">
        <CvContent />
      </div>
    </main>
  );
}
