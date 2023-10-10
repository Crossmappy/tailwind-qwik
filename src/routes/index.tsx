import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>

      <img class="h-64 w-full object-cover" src="./header.jpg" alt="Cine" width=" " height=" "/>
     
     <div class="text-center pt-8 mb-10 px-4">
     <h1 class="text-4xl text-gray-900 font-extrabold tracking-tight">Mira mis peliculas 
      <span class="block text-blue-700">y series favoritas</span>
     </h1>

      <p class="text-lg text-gray-500 mt-3 max-w-md max-auto">
      Reproduce en streaming todas las peliculas y series en tus dispositivos
      </p>

      <div class="mt-10">
        <a class="bg-red-700 text-white mt-10 py-3 inline-block rounded-lg text=sm shadow-sm  w-full" href=" " >Empezar</a>
      </div>

     </div>


    </>
  );
});

export const head: DocumentHead = {
  title: "Peliculas y series",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
