import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-28 h-28 relative animate-spin">
        <Image alt="Logo" fill src="/vabankdev_logo_short.svg" />
      </div>

      <p className="text-sm text-muted-foreground">
        Vabank engine is working...
      </p>
    </div>
  );
};

export default Loader;
