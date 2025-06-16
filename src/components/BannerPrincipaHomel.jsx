import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import TenisVermelho from '../assets/imagens/tenisvermelho.png';
import TenisPreto from '../assets/imagens/sptazulxbonus.png';
import TenisJordan from '../assets/imagens/tenisazul2.png';

export default function BannerPrincipalHome() {
  return (
    <section className="bg-[#F6F6F6] py-12 flex justify-center relative overflow-hidden">
      <div className="w-[92%] max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {[TenisVermelho, TenisPreto, TenisJordan].map((imagem, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="max-w-xl text-center md:text-left">
                  <h4 className="text-[#f6aa1c] font-bold text-base mb-4">
                    Melhores ofertas personalizadas
                  </h4>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1f1f1f]">
                    Queima de <br /> estoque Nike 🔥
                  </h1>
                  <p className="text-[#474747] text-base mt-4 mb-6">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#C92071] text-white px-10 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    Ver ofertas
                  </a>
                </div>
                <img
                  src={imagem}
                  alt="Tênis em promoção"
                  className="w-[300px] md:w-[420px] lg:w-[500px] mb-10 md:mb-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas dentro de retângulo bem estilizado e lindão */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-white/80 px-4 py-2 rounded-xl shadow">
            {/* bullets e estudar sobre depois */}
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
