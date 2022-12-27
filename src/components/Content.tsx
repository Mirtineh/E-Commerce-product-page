import { FunctionComponent } from "react";
import Images from "./Images";
import MainSection from "./MainSection";

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = () => {
  return (
    <main className="flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row justify-between max-w-5xl sm:my-20">
        <Images />
        <MainSection />
      </div>
    </main>
  );
};

export default Content;
