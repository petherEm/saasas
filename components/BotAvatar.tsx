import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-32">
      <AvatarImage src="/vabankdev_logo_short.svg" className="p-1" />
    </Avatar>
  );
};

export default BotAvatar;
