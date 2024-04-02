import { CardProps } from "../../../data/@types/Card/Card.type";

const Card = (props: CardProps) => {
  return (
    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-6 flex-grow">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg h-full">
        <div className="p-4 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-indigo-500">
            {props.icon && <> {props.icon}</>}
            {props.quantity && <>+ de {props.quantity}</>}
          </span>
          <h3 className="text-xl font-semibold mt-2 text-center">{props.title}</h3>
          <p className="mt-2 text-gray-600 text-center">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
