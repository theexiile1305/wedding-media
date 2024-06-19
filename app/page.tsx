import { Toaster } from '@/app/toaster';
import Uploader from '@/app/uploader';

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center">
    <Toaster />
    <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
      Wedding Media
    </h1>
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <Uploader />
    </div>
    <p className="font-light text-gray-600 w-full max-w-lg text-center mt-6">
      Upload your media so that it can be accessed easily.
    </p>
  </main>
);

export default Home;
