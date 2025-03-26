import Image from "next/image";
import { Button } from "../components/Button";
import illustrationPhones from '../images/illustration-phones.svg';
import illustrationEditorDesktop from '../images/illustration-editor-desktop.svg';
import illustrationLaptopDesktop from '../images/illustration-laptop-desktop.svg';

export default function Home() {
  return (
    <div>
      <h1>A modern publishing platform</h1>
      <span>Grow your audience and build your online brand</span>
      <div>
        <Button title="Start For Free" buttonStyle="color" />
        <Button title="Learn More" buttonStyle="transparent" />
      </div>
      <main>
        <h2>Designed for the future</h2>
        <div>
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Fugiat a optio et dolores ab fugit, accusamus tenetur error nemo exercitationem. 
              Doloribus minus aspernatur molestiae iste. Sequi dolorem tempora nihil temporibus?
            </p>
            <h3>Robust content management</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Aspernatur, molestias. Magnam ab reiciendis vel, minus ipsum voluptate vero in magni placeat!
               Tenetur sint quo iusto similique quasi deserunt qui mollitia.
            </p>
          </div>
          <Image src={illustrationEditorDesktop} alt="ILLUSTRATION" width="24" height="24" />
        </div>
      </main>
      <div>
        <Image src={illustrationPhones} alt="State of the Art Infrastructure" width="24" height="24" />
        <h3>State of the Art Infrastructure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Esse fugiat voluptatum ducimus magni soluta harum alias tenetur iste. 
           Reiciendis sequi tenetur aperiam quaerat totam assumenda. 
           Ipsam eveniet officiis error enim.
        </p>
      </div>
      <div>
        <Image src={illustrationLaptopDesktop} alt="State of the Art Infrastructure" width="24" height="24" />
        <div>
          <h3>Free, Open, Simple</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugiat a optio et dolores ab fugit, accusamus tenetur error nemo exercitationem. 
            Doloribus minus aspernatur molestiae iste. Sequi dolorem tempora nihil temporibus?
          </p>
          <h3>Powerful tooling</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, molestias. Magnam ab reiciendis vel, minus ipsum voluptate vero in magni placeat!
              Tenetur sint quo iusto similique quasi deserunt qui mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}
