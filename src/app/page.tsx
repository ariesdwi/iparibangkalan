import Link from "next/link";

export default function Home() {
  // SVG Icons
  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const SocialIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-green-700 text-sm font-medium mb-6 px-4 py-2 rounded-full bg-green-100">
                <span>Organisasi Profesi</span>
                <span>•</span>
                <span>Masa Bakti 2025-2027</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Ikatan Penyuluh Agama
                <span className="text-green-600 block">Republik Indonesia</span>
                <span className="text-2xl sm:text-3xl text-slate-600 mt-6 block">Kabupaten Bangkalan</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Wadah Profesional Penyuluh Agama dalam Mewujudkan Masyarakat Bangkalan yang 
                Religius, Moderatif, dan Berakhlak Mulia Berdasarkan Nilai-Nilai Islam
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/about"
                  className="group bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  Tentang IPARI
                </Link>
                <Link 
                  href="/task"
                  className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:shadow-xl"
                >
                  Program Kerja
                </Link>
              </div>

          
              
            </div>

            {/* Right Content - Organization Illustration */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-10 blur-xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800">IPARI BANGKALAN</h3>
                  <p className="text-slate-600 mt-2">Masa Bakti 2025-2027</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  {[
                    { activity: "Penyuluh Agama", count: "150+", desc: "Anggota Aktif" },
                    { activity: "Program Bidang", count: "6", desc: "Seksi Khusus" },
                    { activity: "Wilayah Binaan", count: "18", desc: "Kecamatan" },
                    { activity: "Masa Bakti", count: "3", desc: "Tahun" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                      <span className="text-slate-700 font-medium">{item.activity}</span>
                      <div className="text-right">
                        <span className="font-bold text-slate-900 text-lg">{item.count}</span>
                        <div className="text-slate-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl text-center border border-green-100">
                  <p className="text-slate-700 font-semibold text-sm">
                    Berdasarkan Keputusan Kemenag Bangkalan Tahun 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              Program Unggulan
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              6 Bidang Program Strategis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              IPARI Bangkalan menjalankan program berdasarkan struktur organisasi yang tertuang dalam keputusan resmi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Organisasi & Informasi Publik",
                description: "Koordinasi lintas sektoral dan diseminasi informasi kepada masyarakat",
                icon: "🏛️",
                bidang: "Seksi 1",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Pengembangan SDM & Pendidikan",
                description: "Pelatihan dan peningkatan kompetensi penyuluh agama secara berkelanjutan",
                icon: "📚",
                bidang: "Seksi 2",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Hukum & Etika Profesi",
                description: "Advokasi hukum dan penegakan kode etik profesi penyuluh agama",
                icon: "⚖️",
                bidang: "Seksi 3",
                color: "from-amber-500 to-orange-500"
              },
              {
                title: "Pengembangan Profesi & Kinerja",
                description: "Penilaian kinerja dan pengembangan karir profesional penyuluh agama",
                icon: "📊",
                bidang: "Seksi 4",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Sosial, Seni & Budaya",
                description: "Pengembangan kegiatan sosial dan pelestarian seni budaya Islami",
                icon: "🎭",
                bidang: "Seksi 5",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Moderasi Beragama",
                description: "Implementasi nilai-nilai moderasi dalam kehidupan beragama masyarakat",
                icon: "🕊️",
                bidang: "Seksi 6",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {feature.bidang}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="group relative">
              <div className="relative bg-white text-slate-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-3xl"></div>
               
                <h3 className="text-2xl font-bold mb-6 text-center">Visi IPARI Bangkalan</h3>
                <blockquote className="text-lg leading-relaxed text-center italic text-slate-700">
                  &ldquo;Terwujudnya Penyuluh Agama yang Profesional, Berintegritas, dan Berakhlak Mulia 
                  untuk Mewujudkan Masyarakat Bangkalan yang Madani dan Berkeadilan Berdasarkan Nilai-Nilai Islam&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Misi */}
            <div className="group relative">
              <div className="relative bg-white text-slate-900 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
                
                <h3 className="text-2xl font-bold mb-6 text-center">Misi IPARI Bangkalan</h3>
                <ul className="space-y-4">
                  {[
                    "Memfasilitasi pengembangan organisasi dan hubungan lintas sektoral",
                    "Meningkatkan kualitas SDM melalui pendidikan dan pelatihan",
                    "Memperkuat aspek hukum, advokasi, dan etika profesi",
                    "Mengembangkan profesionalisme dan sistem penilaian kinerja"
                  ].map((misi, index) => (
                    <li key={index} className="flex items-start gap-3 group/item hover:bg-slate-50 p-3 rounded-xl transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 leading-relaxed">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
              <p className="text-lg font-semibold">
                📅 Masa Bakti: 2025 - 2027 | 🏛️ Berdasarkan Keputusan Kemenag Bangkalan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              Kepemimpinan
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Kepemimpinan Periode 2025-2027
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dipimpin oleh para profesional yang berkomitmen untuk memajukan organisasi dan meningkatkan kualitas penyuluh agama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "M. Zakariya, S.Ag., M.Pd.I",
                role: "Ketua Umum",
                description: "Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan IPARI Bangkalan",
                color: "from-green-500 to-emerald-600"
              },
              {
                name: "Mufaroha, S.Ag., M.H.",
                role: "Sekretaris Umum",
                description: "Mengelola administrasi dan dokumentasi organisasi",
                color: "from-blue-500 to-cyan-600"
              },
              {
                name: "Sainiyah, S.Ag., M.H.",
                role: "Bendahara Umum",
                description: "Mengelola keuangan dan aset organisasi",
                color: "from-purple-500 to-pink-600"
              }
            ].map((leader, index) => (
              <div key={index} className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${leader.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {leader.name.split(' ').slice(0,2).map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">{leader.name}</h3>
                <div className="text-slate-600 font-semibold mb-4 px-4 py-2 bg-slate-100 rounded-full">
                  {leader.role}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{leader.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
            >
              Lihat Struktur Lengkap
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-700 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-green-200 text-sm font-medium mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <SocialIcon />
            <span>Terhubung Dengan Kami</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Sinergi Membangun Bangkalan
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-green-100">
            Mari bersama-sama mendukung program kerja IPARI Bangkalan untuk mewujudkan masyarakat yang religius, moderat, dan berakhlak mulia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Hubungi Kami
            </Link>
            <Link 
              href="/task"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">IPARI BANGKALAN</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Ikatan Penyuluh Agama Republik Indonesia Kabupaten Bangkalan. 
                Wadah profesional penyuluh agama berdasarkan Keputusan Kemenag Bangkalan Tahun 2025.
              </p>
              <div className="bg-slate-800 inline-block px-3 py-1 rounded-full">
                <span className="text-slate-100 text-sm font-medium">Masa Bakti 2025-2027</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Menu Utama</h4>
              <ul className="space-y-3 text-slate-300">
                <li><Link href="/about" className="hover:text-white transition-colors">Tentang IPARI</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Struktur Organisasi</Link></li>
                <li><Link href="/task" className="hover:text-white transition-colors">Program Kerja</Link></li>
                <li><Link href="/task" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Kontak & Alamat</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <PhoneIcon />
                  <div>
                    <p>+62 817-5096-663</p>
                    <p>+62 858-5204-0243</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinIcon />
                  <p className="text-sm">
                    Jl. Soekarno Hatta No.9A, Mlajah,<br />
                    Kec. Bangkalan, Kabupaten Bangkalan,<br />
                    Jawa Timur 69116
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Media Sosial</h4>
              <ul className="space-y-3 text-slate-300">
                <li>📷 Instagram: @iparibangkalan</li>
                <li>👥 Facebook: iparibangkalan</li>
                <li>🎬 YouTube: iparibangkalan</li>
                <li>🎵 TikTok: @iparibangkalan</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} IPARI (Ikatan Penyuluh Agama Republik Indonesia) Kabupaten Bangkalan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}