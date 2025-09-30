import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-900 mb-6 leading-tight">
                Ikatan Penyuluh Agama
                <span className="text-green-600 block">Republik Indonesia</span>
                <span className="text-2xl sm:text-3xl text-green-700 mt-4 block">Kabupaten Bangkalan</span>
              </h1>
              <p className="text-xl text-green-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Wadah Profesional Penyuluh Agama dalam Mewujudkan Masyarakat Bangkalan yang 
                Religius, Moderatif, dan Berakhlak Mulia Berdasarkan Nilai-Nilai Islam
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/about"
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Tentang IPARI
                </Link>
                <Link 
                  href="/task"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
                >
                  Program Kerja
                </Link>
              </div>
            </div>

            {/* Right Content - Organization Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h3 className="text-2xl font-bold text-green-800">IPARI BANGKALAN</h3>
                  <p className="text-green-600 mt-2">Masa Bakti 2025-2027</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { activity: "Penyuluh Agama", count: "150+", desc: "Anggota Aktif" },
                    { activity: "Program Bidang", count: "6", desc: "Seksi Khusus" },
                    { activity: "Wilayah Binaan", count: "18", desc: "Kecamatan" },
                    { activity: "Masa Bakti", count: "3", desc: "Tahun" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-green-800 font-medium">{item.activity}</span>
                      <div className="text-right">
                        <span className="font-bold text-green-900 text-lg">{item.count}</span>
                        <div className="text-green-600 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-3 bg-green-100 rounded-lg text-center">
                  <p className="text-green-800 font-semibold text-sm">
                    Berdasarkan Keputusan Kemenag Bangkalan No. ... Tahun 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              6 Bidang Program Unggulan
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              IPARI Bangkalan menjalankan program berdasarkan struktur organisasi yang tertuang dalam keputusan resmi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Organisasi & Informasi Publik",
                description: "Koordinasi lintas sektoral dan diseminasi informasi kepada masyarakat",
                icon: "🏛️",
                bidang: "Seksi 1"
              },
              {
                title: "Pengembangan SDM & Pendidikan",
                description: "Pelatihan dan peningkatan kompetensi penyuluh agama secara berkelanjutan",
                icon: "📚",
                bidang: "Seksi 2"
              },
              {
                title: "Hukum & Etika Profesi",
                description: "Advokasi hukum dan penegakan kode etik profesi penyuluh agama",
                icon: "⚖️",
                bidang: "Seksi 3"
              },
              {
                title: "Pengembangan Profesi & Kinerja",
                description: "Penilaian kinerja dan pengembangan karir profesional penyuluh agama",
                icon: "📊",
                bidang: "Seksi 4"
              },
              {
                title: "Sosial, Seni & Budaya",
                description: "Pengembangan kegiatan sosial dan pelestarian seni budaya Islami",
                icon: "🎭",
                bidang: "Seksi 5"
              },
              {
                title: "Moderasi Beragama",
                description: "Implementasi nilai-nilai moderasi dalam kehidupan beragama masyarakat",
                icon: "🕊️",
                bidang: "Seksi 6"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-green-100 hover:border-green-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {feature.bidang}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-green-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="text-center lg:text-left">
              <div className="bg-white text-green-900 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Visi IPARI Bangkalan</h3>
                <p className="text-lg leading-relaxed">
                  &ldquo;Terwujudnya Penyuluh Agama yang Profesional, Berintegritas, dan Berakhlak Mulia 
                  untuk Mewujudkan Masyarakat Bangkalan yang Madani dan Berkeadilan Berdasarkan Nilai-Nilai Islam&rdquo;
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="text-center lg:text-left">
              <div className="bg-white text-green-900 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-4">Misi IPARI Bangkalan</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Memfasilitasi pengembangan organisasi dan hubungan lintas sektoral</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Meningkatkan kualitas SDM melalui pendidikan dan pelatihan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Memperkuat aspek hukum, advokasi, dan etika profesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span>Mengembangkan profesionalisme dan sistem penilaian kinerja</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-green-700 rounded-2xl p-6 inline-block">
              <p className="text-lg font-semibold">
                📅 Masa Bakti: 2025 - 2027 | 🏛️ Berdasarkan Keputusan Kemenag Bangkalan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              Kepemimpinan Periode 2025-2027
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Dipimpin oleh para profesional yang berkomitmen untuk memajukan organisasi dan meningkatkan kualitas penyuluh agama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "M. Zakariya, S.Ag., M.Pd.I",
                role: "Ketua Umum",
                description: "Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan IPARI Bangkalan"
              },
              {
                name: "Mufaroha, S.Ag., M.H.",
                role: "Sekretaris Umum",
                description: "Mengelola administrasi dan dokumentasi organisasi"
              },
              {
                name: "Sainiyah, S.Ag., M.H.",
                role: "Bendahara Umum",
                description: "Mengelola keuangan dan aset organisasi"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-800 font-bold text-lg">
                    {leader.name.split(' ').slice(0,2).map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2 leading-tight">{leader.name}</h3>
                <div className="text-green-600 font-semibold mb-3">{leader.role}</div>
                <p className="text-green-700 text-sm">{leader.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
            >
              Lihat Struktur Lengkap
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Sinergi Membangun Bangkalan
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mari bersama-sama mendukung program kerja IPARI Bangkalan untuk mewujudkan masyarakat yang religius, moderat, dan berakhlak mulia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Hubungi Kami
            </Link>
            <Link 
              href="/task"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">IPARI BANGKALAN</h3>
              <p className="text-green-200 text-sm">
                Ikatan Penyuluh Agama Republik Indonesia Kabupaten Bangkalan. 
                Wadah profesional penyuluh agama berdasarkan Keputusan Kemenag Bangkalan Tahun 2025.
              </p>
              <div className="mt-3 bg-green-800 inline-block px-3 py-1 rounded-full">
                <span className="text-green-100 text-sm font-medium">Masa Bakti 2025-2027</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Menu Utama</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="/about" className="hover:text-white transition-colors">Tentang IPARI</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Struktur Organisasi</Link></li>
                <li><Link href="/task" className="hover:text-white transition-colors">Program Kerja</Link></li>
                <li><Link href="/task" className="hover:text-white transition-colors">Visi & Misi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-200">
                <li>Kantor Kementerian Agama</li>
                <li>Kabupaten Bangkalan</li>
                <li>Jawa Timur, Indonesia</li>
                <li>info@ipari-bangkalan.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legalitas</h4>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>SK Kemenag Bangkalan</li>
                <li>No. ... Tahun 2025</li>
                <li>Musyawarah Daerah</li>
                <li>14 Agustus 2025</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} IPARI (Ikatan Penyuluh Agama Republik Indonesia) Kabupaten Bangkalan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}