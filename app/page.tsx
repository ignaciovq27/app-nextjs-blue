// import React from 'react'

// COMPONENTS
import { EmailForm } from "@/components/email-form";
import ItemList from "@/components/item-list";

// ICONS
import { CircleCheck } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className=" bg-gradient-to-r from-slate-200 via-blue-500 to-blue-700 min-h-screen grid place-content-center">
      <article className="bg-white grid grid-cols-1 m-5 rounded-3xl items-center md:grid-cols-2 md:min-w-[650px]">

        {/* section # 1 */}
        <section className="p-6 md:p-12 pt-3 space-y-2 order-last rounded-3xl md:pt-12  max-w-xl">
          <h1 className="text-center text-3xl md:text-4xl font-bold tracking-wide pb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 bg-clip-text text-transparent">¡Recibe noticias de aves!</h1>
          <p className="text-left ">Únete a más de <b>60.000 apasionados de las aves </b>quienes reciben actualizaciones mensuales sobre:</p>
          <ul className="py-3 space-y-1 md:space-y-1 pt-2 md:pl-8">
            <ItemList icon={CircleCheck} itemText="Descubrimientos sobre plumajes, rutas de vuelos y comportamientos únicos de especies." />
            <ItemList icon={CircleCheck} itemText="Datos esenciales para conocer sobre como interactúan con sus nidos y hábitats." />
            <ItemList icon={CircleCheck} itemText="Y mucho más!" />
          </ul>
          <EmailForm />
        </section>

        {/* section # 2*/}
        <section className="md:order-last rounded-3xl p-4 md:p-10 h-full">
          <Image
            className="object-cover w-full h-full rounded-2xl"
            src="/main_image.jpg"
            width={300}
            height={600}
            alt="main_image.jpg"
            priority
          />
        </section>

      </article>
    </div>

    // <>
    //   <div className="flex justify-center items-center h-screen">
    //     <h1 className="text-center inline-flex p-8 m-3 rounded-xl text-white bg-blue-700">
    //       HomePage
    //     </h1>
    //     <Button
    //       variant={"default"}
    //       size={"icon"}
    //       className="text-lg rounded-xl bg-blue-800 hover:bg-blue-400"
    //     >B
    //     </Button>
    //   </div>
    // </>
  );
};


export default HomePage