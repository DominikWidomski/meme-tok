import MainNav from "@/components/MainNav";
import UserAvatar from "@/components/UserAvatar";
import MemeView from "@/components/MemeView";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="fixed w-screen z-20 my-2">
        <div className="flex h-16 items-center justify-center px-4 relative">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4 absolute right-0">
            {/* <UserNav /> */}
            <UserAvatar />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between space-y-2">
          {/* <h2 className="text-3xl font-bold tracking-tight">
          </h2> */}
          <MemeView meme={meme} />
        </div>
      </div>
    </div>
  );
};

export default function Workbench() {
  return (
    <main>
      <Layout>
        <div>Hello</div>
        {/* <UI>
          <TopBar>
            <Navigation />
            <Avatar />
          </TopBar>
        </UI>
        <MemeScroller>
          <Meme>
            <Info>
              Title, tags
              <User>
                <Avatar />
              </User>
            </Info>
            <LikeButton />
            <ShareButton />
          </Meme>
        </MemeScroller> */}
      </Layout>
    </main>
  );
}
