import Image from "next/image";
import Link from "next/link";
const ProjectPage = () => {
  const listProjects = [
    {
      id: 1,
      name: "Ecommerce",
      description:
        "Simple E-commerce site, integrated with Midtrans Payment, FrontEnd Using React and Backend using ExpressJs",
      image: "/images/ecomm.png",
      github: "https://github.com/apxcodefun/front-ecom",
      backend: "https://github.com/apxcodefun/backend-ecomm",
      preview: "https://google.com",
    },
    {
      id: 2,
      name: "Classic Loker App",
      description: "Classic Loker App with simple user interface",
      image: "/images/classi.png",
      github: "https://github.com/apxcodefun/lokerapp",
      backend: "",
      preview: "https://google.com",
    },
    // Add more projects here
  ];
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Judul Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">List Of My Work</h1>
      </div>

      {/* Card Projects Section */}
      <div className="flex flex-wrap gap-6 mt-6 justify-center">
        {listProjects.map((list) => (
          <div className="group relative max-w-sm" key={list.id}>
            {/* Card Content */}
            <div className="bg-gradient-to-r from-sblack to-sblu rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:scale-105">
              <Image
                src={list.image}
                alt={list.name}
                width={600}
                height={600}
                className="rounded-md"
              />
              <h2 className="text-xl font-semibold mb-4">{list.name}</h2>
              <p className="text-white text-sm">{list.description}</p>
              {/* Button GitHub */}
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-gradient-to-r from-sblue to-sblu hover:from-sblu to-sblue hover:text-white transition-colors duration-300 ease-in-out rounded-full mt-2"
              >
                <Link href={list.github}>FrontEnd Git</Link>
              </button>
              {list.backend === "" ? null : (
                <button
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-gradient-to-r from-sblue to-sblu hover:from-sblu to-sblue hover:text-white transition-colors duration-300 ease-in-out ml-4 rounded-full mt-2"
                >
                  <Link href={list.backend}>BackEnd Git</Link>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
