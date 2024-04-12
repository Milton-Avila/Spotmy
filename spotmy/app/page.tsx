import InterfaceLeft from "@/components/main/interfaceLeft";
import InterfaceRight from "@/components/main/interfaceRight";
import InterfaceMain from "@/components/main/interfaceMain";
import InterfaceBottom from "@/components/main/interfaceBottom"
import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className='h-screen flex flex-col'>

        
        <div className="grid grid-cols-9 w-screen h-full">

          <InterfaceLeft/>

          <InterfaceMain/>

          <InterfaceRight/>
        </div>

        <InterfaceBottom/>

      </div>
    
    </>
  );
}
