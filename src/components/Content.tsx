import { FunctionComponent } from "react";
import Images from "./Images";

interface ContentProps {}

const Content: FunctionComponent<ContentProps> = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="flex flex-col w-full">
        <Images />
      </div>
    </main>
  );
};

export default Content;
