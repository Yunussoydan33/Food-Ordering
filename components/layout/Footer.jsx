import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Bize Ulaşın</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Tokat</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">İletişim +(505)8443788</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">yunuslaemre@hotmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Açılış Saati</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Hergün</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Sabah -10.00 Akşam</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 Ücretsiz Html Şablonlarının Tüm Hakları Bende Saklıdır
        </p>
      </div>
    </div>
  );
};

export default Footer;
