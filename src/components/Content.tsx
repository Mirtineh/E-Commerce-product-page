import { FunctionComponent } from "react";
import Images from "./Images";
import MainSection from "./MainSection";

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col w-full">
        <Images />
        <MainSection />
      </div>
    </main>
  );
};

export default Content;
