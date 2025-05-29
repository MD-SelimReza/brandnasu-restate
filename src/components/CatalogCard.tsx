import Image from 'next/image';
import Link from 'next/link';
import { MdPriceChange } from 'react-icons/md';

type CatalogItem = {
  id: number;
  image: string;
  title: string;
  link: string;
  price: string;
  paymentType: string;
  description: string;
};

const CatalogCard = ({
  image,
  title,
  link,
  price,
  paymentType,
  description,
}: CatalogItem) => {
  return (
    <div className="rounded-xl xl:p-8 p-6 max-w-[440px] bg-white flex flex-col h-full">
      <Link href={link}>
        <div className="mb-6 relative w-full aspect-[16/9] rounded-lg">
          <Image
            src={image}
            layout="fill"
            alt={title}
            className="rounded-lg object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl text-darkIndigo font-semibold text-left">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-darkGray font-medium">Pricing</span>
            <span className="text-2xl text-indigo font-bold">{price}</span>
          </div>
          <p className="text-darkGray text-left text-lg font-semibold flex items-center gap-2">
            <MdPriceChange />
            <span>{paymentType}</span>
          </p>
          <p className="text-darkGray text-left">
            {description.split(' ').slice(0, 20).join(' ')}
            {description.split(' ').length > 20 && '...'}
          </p>
        </div>
        <Link href={link} className="block w-full mt-6">
          <button className="py-2.5 px-8 w-full text-lg font-bold bg-indigo text-white hover:bg-darkIndigo transition-all duration-500 rounded-lg">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CatalogCard;
