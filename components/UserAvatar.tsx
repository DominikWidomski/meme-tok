import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className="h-12 w-12 mr-4">
      <AvatarImage
        src="https://media2.giphy.com/media/y6Inkaz7omxAk/giphy.gif"
        alt="@username"
      />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
