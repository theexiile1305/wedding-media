import { Toaster } from '@/app/toaster';
import Uploader from '@/app/uploader';

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-center">
    <Toaster />
    <h1 className="max-w-xl pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl">
      Hochzeit Celina & Jakob
    </h1>
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <Uploader />
    </div>
    <p className="font-light text-black w-full max-w-lg text-center mt-6">
      Vielen Dank! Du möchtest auch die restlichen Fotos und die des Fotographen
      haben? Dann melde dich gerne bei uns.
    </p>
  </main>
);

export default Home;
