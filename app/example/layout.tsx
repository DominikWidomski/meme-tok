import MainNav from "@/components/MainNav";
import UserAvatar from "@/components/UserAvatar";

const ScrollLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="fixed w-screen z-20 my-2">
        <div className="flex h-16 items-center justify-center px-4 relative">
          <MainNav pathPrefix="/example" />
          <div className="ml-auto flex items-center space-x-4 absolute right-0">
            <UserAvatar />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollLayout;
