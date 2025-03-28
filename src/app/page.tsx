import Image from "next/image";
import { Button } from "../components/Button";
import illustrationPhones from '../images/illustration-phones.svg';
import illustrationEditorDesktop from '../images/illustration-editor-desktop.svg';
import illustrationEditorMobile from '../images/illustration-editor-mobile.svg';
import illustrationLaptopDesktop from '../images/illustration-laptop-desktop.svg';
import illustrationLaptopMobile from '../images/illustration-laptop-mobile.svg';

export default function Home() {
  return (
    <main>
      <div 
        className="bg-[url(../images/bg-pattern-intro-desktop.svg)] bg-no-repeat bg-cover bg-center h-80 bg-[#fe545c]  text-center p-8 rounded-bl-[5rem]"
      >
        <h1 className="text-4xl text-white mb-5">A modern publishing platform</h1>
        <span className="text-sm text-white font-normal">
          Grow your audience and build your online brand
        </span>
        <div className="flex flex-row gap-4 justify-center mt-14">
          <Button title="Start For Free" buttonStyle="color" />
          <Button title="Learn More" buttonStyle="border" />
        </div>
      </div>
      <div className="m-4 mr-0">
        <h2 className="text-[#2f414d] text-2xl text-center mb-3">Designed for the future</h2>
        <div className="flex md:flex-row flex-col-reverse justify-start items-center">
          <div>
            <h3 className="text-[#2f414d] text-xl mb-3">Introducing an extensible editor</h3>
            <p className="text-justify p-4 md:p-0 text-[#666673] font-normal mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat a optio et dolores ab fugit, accusamus tenetur error nemo exercitationem. 
              Doloribus minus aspernatur molestiae iste. Sequi dolorem tempora nihil temporibus?
            </p>
            <h3 className="p-2 text-[#2f414d] text-xl mb-3">Robust content management</h3>
            <p className="text-justify p-4 md:p-0 text-[#666673] font-normal mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Aspernatur, molestias. Magnam ab reiciendis vel, minus ipsum voluptate vero in magni placeat!
               Tenetur sint quo iusto similique quasi deserunt qui mollitia.
            </p>
          </div>
          <Image 
            src={illustrationEditorDesktop} 
            alt="ILLUSTRATION" 
            width={500} 
            className="hidden md:block align-top relative right-[-160px] mt-[-80px]" 
          />
          <Image src={illustrationEditorMobile} 
          alt="State of the Art Infrastructure" 
          width={300}
          className="align-top block md:hidden"
        />
        </div>
      </div>
      <div 
        className="flex md:flex-row flex-col md:justify-start justify-center items-center p-2 md:pr-8 md:h-[350] bg-[#393a56] rounded-bl-[6rem] rounded-tr-[6rem]"
      >
        <Image src={illustrationPhones} alt="State of the Art Infrastructure" width={500} />
       <div>
        <h3 className="p-2 text-white text-xl mb-3">State of the Art Infrastructure</h3>
          <p className="text-justify p-4 md:p-0 text-white font-normal mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Esse fugiat voluptatum ducimus magni soluta harum alias tenetur iste. 
            Reiciendis sequi tenetur aperiam quaerat totam assumenda. 
            Ipsam eveniet officiis error enim.
          </p>
       </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-start justify-center mt-[120px] pr-8">
        <Image src={illustrationLaptopDesktop} 
          alt="State of the Art Infrastructure" 
          width={500}
          className="align-top hidden md:block relative left-[-140px] mt-[-90px]"
        />
        <Image src={illustrationLaptopMobile} 
          alt="State of the Art Infrastructure" 
          width={500}
          className="align-top block md:hidden"
        />
        <div>
          <h3 className="p-2 text-[#2f414d] text-xl mb-3">Free, Open, Simple</h3>
          <p className="text-justify p-4 md:p-0 text-[#666673] font-normal mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugiat a optio et dolores ab fugit, accusamus tenetur error nemo exercitationem. 
            Doloribus minus aspernatur molestiae iste. Sequi dolorem tempora nihil temporibus?
          </p>
          <h3 className="p-2 text-[#2f414d] text-xl mb-3">Powerful tooling</h3>
          <p className="text-justify p-4 md:p-0 text-[#666673] font-normal mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, molestias. Magnam ab reiciendis vel, minus ipsum voluptate vero in magni placeat!
              Tenetur sint quo iusto similique quasi deserunt qui mollitia.
          </p>
        </div>
      </div>
    </main>
  );
}
