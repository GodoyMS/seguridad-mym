import React from "react";

const FeaturesHome = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 lg:gap-10">
        <div className=" place-self-center lg:col-span-4  ">
          <div className=" flex justify-start gap-2 font-bold text-blue-800 items-center">
            Conocenos
          </div>
          <p className="max-w-2xl mb-6 font-bold  text-black lg:mb-8 text-xl md:text-xl lg:text-3xl ">
            Quienes Somos
          </p>
          <div className=" w-32 h-[2px] bg-blue-700 mb-2"></div>
          <div>
            <p className=" font-light text-justify text-gray-600">
              El Comité de Seguridad Ciudadana (CODISEC) es un foro de
              coordinación y desarrollo de políticas, programas y actividades
              relacionadas con la seguridad ciudadana del distrito de
              Yanacancha.
            </p>
            <div className=" w-full mt-6 ">
              <a
                className=" px-8 py-3 bg-blue-600 rounded-md font-bold hover:bg-opacity-15 transition duration-300 text-blue-600 bg-opacity-10  inline-flex justify-start gap-2 items-center"
                target="_blank"
                href="https://www.gob.pe/institucion/muniyanacancha-pasco/informes-publicaciones/4178116-evaluacion-de-los-integrantes-del-codisec-yanacancha-i-trimestre"
              >
                Conóce más
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8  ">
          <img
            src="/assets/images/features/mision.webp"
            className=" h-full w-full object-cover rounded-md "
          />
        </div>
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8  ">
          <img
            src="/assets/images/features/mision.webp"
            className=" h-full w-full object-cover rounded-md "
          />
        </div>
        <div className=" place-self-center lg:col-span-4  ">
          <div className=" flex justify-start gap-2 font-bold text-green-800 items-center">
            Nuestro futuro
          </div>
          <p className="max-w-2xl mb-6 font-bold  text-black lg:mb-8 text-xl md:text-xl lg:text-3xl ">
            Visión
          </p>
          <div className=" w-32 h-[2px] bg-green-700 mb-2"></div>
          <div>
            <p className=" font-light text-justify text-gray-600">
              Hacer de nuestro distrito un lugar que asegure la armonía pacifica
              de la población y de sus visitantes, en un marco de seguridad,
              orden, lo cual permita una calidad de vida con la práctica de
              valores de la población.
            </p>
            <div className=" w-full mt-6 ">
              <a
                className=" px-8 py-3 bg-green-600 rounded-md font-bold hover:bg-opacity-15 transition duration-300 text-green-600 bg-opacity-10  inline-flex justify-start gap-2 items-center"
                target="_blank"
                href="https://cdn.www.gob.pe/uploads/document/file/5895045/4178116-plan-de-accion-distrital-de-seguridad-ciudadana-del-distrito-de-yanacancha-2024.pdf?v=1708610638"
              >
                Conóce más
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 lg:gap-10">
        <div className=" place-self-center lg:col-span-4  ">
          <div className=" flex justify-start gap-2 font-bold text-red-800 items-center">
            Nuestro objetivo
          </div>
          <p className="max-w-2xl mb-6 font-bold  text-black lg:mb-8 text-xl md:text-xl lg:text-3xl ">
            Misión
          </p>
          <div className=" w-32 h-[2px] bg-red-700 mb-2"></div>
          <div>
            <p className=" font-light text-justify text-gray-600">
            Difundir la política local de seguridad ciudadana y fortalecerlo mediante el incentivo y capacitaciones a nivel interno y externo del CODISEC en conformidad y dialogo con instituciones asociados al ámbito distrital.
            </p>
            <div className=" w-full mt-6 ">
              <a
                className=" px-8 py-3 bg-red-600 rounded-md font-bold hover:bg-opacity-15 transition duration-300 text-red-600 bg-opacity-10  inline-flex justify-start gap-2 items-center"
                target="_blank"
                href="https://cdn.www.gob.pe/uploads/document/file/5895045/4178116-plan-de-accion-distrital-de-seguridad-ciudadana-del-distrito-de-yanacancha-2024.pdf?v=1708610638"
              >
                Conóce más  
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8  ">
          <img
            src="/assets/images/features/mision.webp"
            className=" h-full w-full object-cover rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesHome;
