type SingleImageProps = {
  href: string;
  imgSrc: string;
};

const SingleImage = ({ href, imgSrc }: SingleImageProps) => {
  return (
    <a href={href} className="flex w-full items-center justify-center">
      <img src={imgSrc} alt="brand image" className="w-full h-32" />
    </a>
  );
};

export default SingleImage;