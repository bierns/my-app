import Link from "next/link";

export default function Team() {
  return (
    <section className="py-6 dark:bg-gray-700 dark:text-white min-h-[80vh] bg-gray-100">
      <div className="container flex flex-col items-center justify-start p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracking-wider text-start md:text-center uppercase">
          Desenvolvedores:
        </p>

        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold leading-snug">
                Cauã Ferrigolli Loureiro
              </p>
              <p>RM: 553093 - 1TDSPT</p>
              <p className="text-xl font-semibold leading-snug pt-6">
                Gabriel de Matos Magalhães
              </p>
              <p>RM: 553889 – 1TDSPR</p>
              <p className="text-xl font-semibold leading-snug pt-6">
                Gabriel Oliveira Rodrigues dos Santos
              </p>
              <p>RM: 553079 – 1TDSPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
