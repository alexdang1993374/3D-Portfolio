interface IProjectLink {
  link: string;
  image: string;
}

const ProjectLink = ({ link, image }: IProjectLink) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-[0.85]"
    >
      <img src={image} alt="github" className="w-1/2 h-1/2 object-contain" />
    </div>
  );
};

export default ProjectLink;
