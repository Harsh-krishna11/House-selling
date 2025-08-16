
export default function CardItem({ title, price, image, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-blue-600 font-semibold">{price}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        {/* <Button className="mt-4 w-full">View Details</Button> */}
      </div>
    </div>
  );
}
