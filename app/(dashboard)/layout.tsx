import Aside from "@/components/aside";
import Header from "@/components/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`max-w-[1440px] min-h-full relative mx-auto`}>
      <Aside />
      <main className="border-box min-h-screen py-8 pb-[200px] overflow-hidden relative">
        <Header />
        {children}
      </main>
    </div>
  );
}