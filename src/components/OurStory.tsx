import Image from "next/image";
import { Button } from "./ui/button";

export function OurStory() {
    return (
        <div className="container pt-20 pb-36 grid lg:grid-cols-2 gap-10">
            <div>
                <div className="relative h-fit w-fit">
                    <Image
                        src="/home.jpg"
                        alt="a picture of room"
                        width={400}
                        height={400}
                        className="object-cover"
                    />

                    <Image
                        src="/image1.jpg"
                        alt="a picture of room"
                        width={350}
                        height={350}
                        className="absolute top-1/2 left-1/2 border-4 object-cover hidden lg:block"
                    />
                </div>
            </div>
            <div>
                <p className="font-semibold mb-2">Our story</p>
                <p className="text-3xl mb-4 ">Efficiency. Transparency. Control</p>
                <p className="text-muted-foreground mb-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias itaque, dolore earum dignissimos numquam fugiat inventore laudantium modi necessitatibus, repudiandae atque qui maxime mollitia! Nam deserunt nulla sequi aspernatur deleniti odio voluptatum corrupti atque velit! Consequuntur, esse eveniet incidunt obcaecati alias maiores qui officia illo voluptatem quae veniam earum ducimus?</p>
                <Button> Read More </Button>
            </div>
        </div>
    );
}
