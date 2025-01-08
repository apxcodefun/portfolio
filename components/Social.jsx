import Image from "next/image";

const Social = () => {
  return (
    <div className="flex items-center space-x-2 mt-5">
      <a
        href="https://github.com/apxcodefun"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/github.png"
          alt="GitHub"
          width={30}
          height={30}
          className="bg-sky-500 rounded-badge"
        />
      </a>
      <a
        href="https://instagram.com/ardiansyah__putra"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/instagram.png"
          alt="Instagram"
          width={30}
          height={30}
          className="bg-sky-500 rounded-full"
        />
      </a>
      {/* Add more social media icons */}
    </div>
  );
};

export default Social;
