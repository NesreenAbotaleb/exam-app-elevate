import { FolderCode } from "lucide-react";
import Background from "./background";
import ListItem from "./list-item";
import { FEATURES } from "@/shared/constants/auth.constant";

const SideBarSection = () => {
  return (
    <section className="relative w-full  h-full flex flex-col justify-center  px-32.75 py-29 overflow-hidden">
      {/* background — pinned behind everything */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* all content sits above the background */}
      <div className="w-full relative z-10 flex flex-col h-full gap-16  max-w-114.5 justify-center self-center">
        {/* logo */}
        <div className="flex items-center gap-2 w-full">
          <FolderCode className="h-10 w-10 text-blue-600 p-1.5" />
          <h1 className="text-xl font-semibold text-blue-600">Exam App</h1>
        </div>

        {/* details + list */}
        <div className="flex flex-col gap-8  w-full ">
          <h1 className="text-3xl font-bold text-gray-800 font-inter w-full">
            Empower your learning journey with our smart exam platform.
          </h1>

          <div className="flex flex-col gap-9 mx-2 my-4 w-full">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <ListItem
                key={title}
                icon={<Icon className="h-6 w-6 text-blue-600 " />}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        {/* bottom spacer */}
        <div />
      </div>
    </section>
  );
};

export default SideBarSection;
