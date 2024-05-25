import Image from 'next/image';
import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch a drink...');
  }

  return response.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const img = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image src={img} className="w-48 h-48 rounded shadow-lg mb-4" priority alt={title} width={300} height={300} />
    </div>
  );
};
export default SingleDrinkPage;
