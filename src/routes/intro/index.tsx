import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
    
  return(
    <>
       <h1 class="text-4xl  text-center font-extrabold my-20 sm:text-7xl bg-gradient-to-r  from-indigo-500  to-green-600  bg-clip-text  text-transparent">Tailwind CSS</h1>
      
      <div class="prose sm:prose-lg px-5">
        <h2>Duis pariatur laborum Lorem sit in ex et excepteur nostrud. Eu aliqua sint eiusmod tempor dolore minim do ex dolore mollit nostrud ullamco. Excepteur sunt velit ex minim eu ullamco eiusmod proident enim esse quis ea pariatur esse. Nulla adipisicing magna mollit proident enim. Sint eu commodo occaecat ex est adipisicing non irure ex. Do ullamco consequat nisi quis aute laboris nostrud sit incididunt adipisicing. Magna ipsum est mollit aute mollit.
      </h2>
        <p>Commodo culpa aute id sunt. Non elit id magna elit cillum quis reprehenderit adipisicing eu nulla amet. Dolore eu ad dolor amet occaecat voluptate do excepteur velit nulla quis deserunt.</p>
        <p>Tempor Lorem ad in voluptate et tempor dolor do officia exercitation. Nisi laboris sint ut fugiat. Officia sunt aute duis cillum laboris aliquip enim enim. Veniam excepteur ut labore eu minim esse velit nostrud nostrud magna. Occaecat labore dolor sint tempor dolor eu.</p>
      
      <form>
        <label>Email</label>
        <input type="email" name="email" id="email" 
        class="block" />
        <input type="submit" value="Submit" 
        class="bg-blue-500 
               text-white
                block
                rounded
                mt-5 px-2
                py-1"/>
      </form>
      
      </div>
    </>
  )
});
export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
      {
        name: "description",
        content: "Qwik site description",
      },
    ],}