import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// Import foto lokal kamu di sini
import FotoGanteng from './assets/potogua.jpeg';
import FotoKeren from './assets/fotorazka.jpeg';
import FotoGokil from './assets/fotoeki.jpeg';

// --- DATA MAHASISWA (DENGAN FOTO PROFIL) ---
const mahasiswaData = [
  {
    id: "MuhammadAlfath",
    nama: "Muhammad Alfath",
    nim: "253140707111056",
    prodi: "Teknologi Informasi",
    deskripsi: "Saya seorang mahasiswa yang memiliki ketertarikan terhadap teknologi dan mempelajari bagaimana teknologi berkembang. Saya memiliki karakter yang lumayan batu tetapi saya yakin bahwa saya adalah seorang yang visioner, saya lebih suka mengerjakan sesuatu sendirian selagi saya mampu. Saya yakin saya memiliki kredibilitas atas kata-kata saya.",
    tema: "bg-[#E2E8CE]", // Sage Green
    aksen: "bg-[#A6A273]",
    // URL Foto dari Unsplash (Kotak)
    foto: FotoGanteng,
    instagram: "https://instagram.com/alpat.zz", 
    linkedin: "https://linkedin.com/in/muhammad-alfath-5a68312b1",
    email: "mhmmdalpat15@gmail.com",
    telepon: "6281401681752",
    domisili: "Soehat, Malang, Jawa Timur"
  },
  {
    id: "RazkaVamadeva",
    nama: "Muhammad Razka Vamadeva",
    nim: "253140707111148",
    prodi: "Teknologi Informasi",
    deskripsi: "Sering menghabiskan waktu dengan ngoding ditemani musik lofi.",
    tema: "bg-[#F4E1D2]", // Warm Sand
    aksen: "bg-[#D9A691]",
    foto: FotoKeren,
    instagram: "https://instagram.com/depaaaa__", 
    linkedin: "https://linkedin.com/in/muhammad-alfath",
    email: "vamadevarazka@gmail.com",
    telepon: "6281282480324",
    domisili: "Sigura-gura, Malang, Jawa Timur"
  },
  {
    id: "Eky",
    nama: "Habibi Ahmad Rizky",
    nim: "253140707111089",
    prodi: "Teknologi Informasi",
    deskripsi: "Suka mengeksplorasi strategi bisnis baru.",
    tema: "bg-[#D0E1E1]", // Soft Teal
    aksen: "bg-[#8AA8A8]",
    foto: FotoGokil,
    instagram: "https://instagram.com/h_ekybruh", 
    linkedin: "https://linkedin.com/in/muhammad-alfath",
    email: "ekyhabibi4@email.com",
    telepon: "6281347702840",
    domisili: "Tlogomas, Malang, Jawa Timur"
  }
];

// --- 1. HALAMAN OPENING (HOME) ---
const OpeningPage = () => (
  <div className="min-h-screen bg-[#D8FFE1] flex flex-col items-center justify-center p-6 font-serif">
    <header className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-[#433E3F] mb-4">Biodata Mahasiswa</h1>
      <p className="text-[#8C8179] tracking-widest uppercase text-sm">Kelompok 8</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
      {mahasiswaData.map((mhs) => (
        <Link to={`/detail/${mhs.id}`} key={mhs.id} className="group">
          <div className="bg-white w-[300px] h-[400px] flex flex-col items-center justify-between p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 flex flex-col items-center border border-[#F1E9DB]">

            {/* FOTO PROFIL DI HALAMAN DEPAN */}
            <div className={`w-32 h-32 ${mhs.tema} rounded-3xl mb-6 overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-inner`}>
              <img src={mhs.foto} alt={mhs.nama} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>

            <h2 className="text-xl font-bold text-[#433E3F] text-center">{mhs.nama}</h2>
            <p className="text-sm text-[#8C8179] mb-6">{mhs.prodi}</p>

            {/* Tambahkan ini di bawah teks Prodi atau Nim */}
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={18} className="text-slate-400" />
              <span className="text-xs font-medium">{mhs.domisili}</span>
            </div>

            <div className={`px-6 py-2 rounded-full text-white text-xs font-bold tracking-tighter ${mhs.aksen}`}>
              LIHAT PROFIL
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// --- 2. HALAMAN DETAIL BIODATA ---
const DetailPage = () => {
  const { id } = useParams();
  const mhs = mahasiswaData.find(item => item.id === id);

  if (!mhs) return <div className="p-10 text-center">Data Mahasiswa Tidak Ditemukan.</div>;

  return (
    <div className={`min-h-screen ${mhs.tema} flex items-center justify-center p-4 md:p-10 font-sans`}>
      <div className="bg-white/70 backdrop-blur-xl max-w-4xl w-full rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/50 relative">
        
        {/* Sisi Foto (Kiri/Atas) */}
        <div className="md:w-2/5 p-10 flex flex-col items-center justify-center text-center">
          
          {/* FOTO PROFIL DI HALAMAN DETAIL */}
          <div className="w-48 h-64 rounded-[5rem] overflow-hidden shadow-2xl mb-6 border-8 border-white">
            <img src={mhs.foto} alt={mhs.nama} className="w-full h-full object-cover" />
          </div>

          {/* Tambahkan ini di bawah teks Prodi atau Nim */}
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{mhs.domisili}</span>
          </div>

            {/* CONTAINER IKON SOSIAL & KONTAK */}
          <div className="flex justify-center gap-4 mb-6">
            
            {/* Instagram & Linkedin yang sudah ada ... */}
            <a href={mhs.instagram} target="_blank" className="text-xs text-pink-600 font-bold">IG</a>
            <a href={mhs.linkedin} target="_blank" className="text-xs text-blue-700 font-bold">IN</a>
             
            {/* Email */}
            <a href={`mailto:${mhs.email}`} onClick={(e) => e.stopPropagation()}>
              <Mail size={18} className="text-gray-500 hover:text-red-500 transition-colors" />
            </a>

            {/* Telepon/WA */}
            <a href={`https://wa.me/${mhs.telepon}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <Phone size={18} className="text-gray-500 hover:text-green-600 transition-colors" />
            </a>
          </div>

          <Link to="/" className="text-sm font-bold text-[#8C8179] hover:text-[#433E3F] transition-colors flex items-center gap-2">
            <span>←</span> KEMBALI
          </Link>
        </div>

        {/* Sisi Konten (Kanan/Bawah) */}
        <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
          <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-black tracking-[0.3em] text-white ${mhs.aksen} mb-4`}>
            {mhs.nim}
          </span>
          <h1 className={`text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-2`}>{mhs.nama}</h1>
          <h3 className="text-xl text-[#8C8179] mb-8 font-medium">{mhs.prodi}</h3>
          
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-white pl-4 capitalize text-xs tracking-widest">
              "{mhs.deskripsi}"
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-3xl">
                <p className="text-[10px] text-[#8C8179] font-bold uppercase">Angkatan</p>
                <p className="font-bold text-[#433E3F]">2025</p>
              </div>
              <div className="bg-white/50 p-4 rounded-3xl">
                <p className="text-[10px] text-[#8C8179] font-bold uppercase">Status</p>
                <p className="font-bold text-[#433E3F]">Aktif</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- 3. KONFIGURASI ROUTER ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}