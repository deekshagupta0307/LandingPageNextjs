import { PropertyCard } from "./PropertyCard";

export const propertiesList = [
{
    id: "pro_ _1",
    name: "511 Creta, Egile USA",
    price: 1500,
    rating: 4,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image1.jpg",
},

{
    id: "pro_ _2",
    name: "02 Main St, White Mall, USA",
    price: 3100,
    rating: 4,
    sqft: 400,
    beds: 3,
    baths: 3,
    image: "/image2.jpg",
},

{
    id: "pro_ _3",
    name: "A1 Jewsack bridge, Checyu USA",
    price: 2050,
    rating: 3,
    sqft: 600,
    beds: 6,
    baths: 4,
    image: "/image3.jpg",
},

{
    id: "pro_ _4",
    name: "61 Lewkway Sait, Simriele USA",
    price: 1700,
    rating: 5,
    sqft: 400,
    beds: 4,
    baths: 3,
    image: "/image4.jpg",
},

{
    id: "pro_ _5",
    name: "188 Queue Gate, Praised USA",
    price: 3600,
    rating: 3,
    sqft: 300,
    beds: 2,
    baths: 1,
    image: "/image5.jpg",
},

{
    id: "pro_ _6",
    name: "12 kwinkei dreo, Tudice USA",
    price: 2000,
    rating: 4,
    sqft: 500,
    beds: 4,
    baths: 2,
    image: "/image6.jpg",
},

{
    id: "pro_ _7",
    name: "905 Dew Beak, Shreckle USA",
    price: 1100,
    rating: 3,
    sqft: 300,
    beds: 3,
    baths: 2,
    image: "/image7.jpg",
},

{
    id: "pro_ _8",
    name: "37 Break haw, Beynatown USA",
    price: 4000,
    rating: 5,
    sqft: 600,
    beds: 4,
    baths: 3,
    image: "/image8.jpg",
},

{
    id: "pro_ _9",
    name: "123 Setwk ragiut, Baerigth USA",
    price: 2200,
    rating: 3,
    sqft: 300,
    beds: 2,
    baths: 1,
    image: "/image9.jpg",
},
];

export function Features() {
  return (
  <div className="container pb-20">
    <h3 className="text-4xl text-center mb-2">Featured Properties</h3>
    <p className="text-center text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae rerum consectetur quod voluptas aspernatur. Eius ex neque corrupti reiciendis.
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {propertiesList.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
    </div>
  </div>
  );
}
