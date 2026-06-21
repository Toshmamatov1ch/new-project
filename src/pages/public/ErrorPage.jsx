function ErrorPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-liner-to-br from-[#e0f7fa] via-[#f3e5f5] to-[#fff3e0] font-sans relative overflow-hidden">
      {/* Orqa fondagi bezaklar (Quyosh va Oy joylashuvi uchun) */}
      <div className="absolute top-10 left-10 text-5xl opacity-40 animate-pulse">
        ☀️
      </div>
      <div className="absolute top-14 right-14 text-5xl opacity-40 rotate-12">
        🌙
      </div>

      {/* Asosiy Kartochka */}
      <div className="max-w-2xl w-full text-center flex flex-col items-center z-10">
        {/* Markazdagi Rasm / Illyustratsiya */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 mb-8 bg-white/40 backdrop-blur-sm rounded-full p-6 shadow-xl border border-white/60 flex items-center justify-center animate-bounce [animation-duration:3s]">
          {/* Bu yerga o'zingizning raketa rasmingizni qo'yishingiz mumkin */}
          <img
            src="https://img.freepik.com/premium-vector/rocet-vector_150234-54304.jpg?w=360"
            alt="Rocket 404"
            className="w-full h-full object-contain rounded-full
            "
          />
          {/* 404 Matni raketaning yonida turishi uchun */}
          <span className="absolute bottom-4 bg-[#0f172a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wider">
            404 ERROR
          </span>
        </div>

        {/* Sarlavha */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4 tracking-tight">
          Ups! Sahifa topilmadi.
        </h1>

        {/* Tavsif matni */}
        <p className="text-gray-600 text-sm md:text-base max-w-md mb-8 leading-relaxed font-medium">
          Ammo xavotir olmang! Bu koinotda sarguzashtlar tugamaydi. <br />
          Keling, birgalikda bosh sahifaga qaytamiz.
        </p>

        {/* Asosiy tugma */}
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Bosh sahifaga qaytish
        </button>

        {/* Pastki havolalar (Footer Links) */}
        <div className="mt-12 flex items-center gap-4 text-xs font-semibold text-gray-500">
          <a href="#help" className="hover:text-[#0284c7] transition-colors">
            Yordam markazi
          </a>
          <span className="text-gray-300">•</span>
          <a href="#contact" className="hover:text-[#0284c7] transition-colors">
            Aloqa
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
