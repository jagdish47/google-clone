import { TbGridDots } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const url: string =
    "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80";

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-3 items-center">
      <Link href="https://mail.google.com">
        <p className="text-sm hover:underline cursor-pointer">Gmail</p>
      </Link>

      <Link href="https://images.google.com">
        <p className="text-sm hover:underline cursor-pointer">Images</p>
      </Link>
      <p>
        <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />
      </p>
      <Image
        src={url}
        alt="Logo"
        width={35}
        height={100}
        className="rounded-full h-8 w-8 object-cover"
      />
    </div>
  );
};

export default Header;
