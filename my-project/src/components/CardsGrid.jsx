import CardItem from "./CardItem";
export default function CardsGrid() {
  const items = [
    {
      id: 1,
      title: "Honda City 2022",
      price: "₹12,50,000",
      image: "https://via.placeholder.com/400x250",
      description: "Top model, single owner, excellent condition.",
    },
    {
      id: 2,
      title: "iPhone 14 Pro",
      price: "₹90,000",
      image: "https://via.placeholder.com/400x250",
      description: "128GB, Deep Purple, almost new.",
    },
    {
      id: 3,
      title: "2BHK Flat in Noida",
      price: "₹55,00,000",
      image: "https://via.placeholder.com/400x250",
      description: "Spacious flat with modular kitchen & balcony.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Listings</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
