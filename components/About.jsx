import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are Feane</Title>
          <p className="my-5 flex flex-col items-center">
            Türkiyenin 81 ilindede bulunan Restoran zincirimiz Türkiyenin en köklü Restoranlarından birisidir 
            Herkesi bu güzel ve hesaplı restoranımıza bekliyoruz...
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
