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
                Ikatan Penyuluh Agama Islam
                <span className="text-green-600 block">Bangkalan</span>
              </h1>
              <p className="text-xl text-green-700 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Mewujudkan Penyuluh Agama Islam yang Profesional, Berintegritas, dan Berakhlak Mulia 
                untuk Membangun Masyarakat Madani di Bangkalan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/about"
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Tentang Kami
                </Link>
                <Link 
                  href="/task"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
                >
                  Program Kerja
                </Link>
              </div>
            </div>

            {/* Right Content - Mosque Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🕌</div>
                  <h3 className="text-2xl font-bold text-green-800">IPAI BANGKALAN</h3>
                  <p className="text-green-600 mt-2">Islamic Religious Instructors Association</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { activity: "Penyuluhan Agama", count: "150+", desc: "Penyuluh Aktif" },
                    { activity: "Kegiatan Rutin", count: "50+", desc: "Program Tahunan" },
                    { activity: "Wilayah Binaan", count: "27", desc: "Kecamatan" },
                    { activity: "Masyarakat", count: "1M+", desc: "Jumlah Penduduk" }
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
              Program Unggulan IPAI Bangkalan
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Berbagai kegiatan dan program yang dilaksanakan untuk meningkatkan kualitas penyuluhan agama Islam di Bangkalan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Peningkatan Kompetensi",
                description: "Pelatihan dan workshop peningkatan kapasitas penyuluh agama Islam dalam berbagai bidang keilmuan dan metodologi penyuluhan.",
                icon: "📚"
              },
              {
                title: "Pemberdayaan Masyarakat",
                description: "Program pendampingan dan pemberdayaan masyarakat dalam bidang ekonomi, pendidikan, dan sosial keagamaan.",
                icon: "🤝"
              },
              {
                title: "Pembinaan Keagamaan",
                description: "Kegiatan ceramah, pengajian, dan bimbingan keagamaan untuk berbagai kalangan masyarakat.",
                icon: "🕌"
              },
              {
                title: "Keluarga Sakinah",
                description: "Bimbingan pranikah dan pembinaan keluarga sakinah untuk mewujudkan keluarga harmonis dan islami.",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Penyuluhan Lingkungan",
                description: "Kampanye dan edukasi tentang pentingnya menjaga lingkungan berdasarkan nilai-nilai Islam.",
                icon: "🌱"
              },
              {
                title: "Penelitian & Pengembangan",
                description: "Kajian dan penelitian untuk pengembangan metode penyuluhan agama yang efektif dan kontekstual.",
                icon: "📊"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-green-100"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
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
                <h3 className="text-2xl font-bold mb-4">Visi</h3>
                <p className="text-lg leading-relaxed">
                  Terwujudnya Penyuluh Agama Islam yang Profesional, Berintegritas, dan Berakhlak Mulia 
                  untuk Mewujudkan Masyarakat Bangkalan yang Madani dan Berkeadilan
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="text-center lg:text-left">
              <div className="bg-white text-green-900 rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-4">Misi</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Meningkatkan kualitas profesionalisme dan kompetensi penyuluh agama Islam
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Memperkuat peran penyuluh agama dalam pembinaan mental spiritual masyarakat
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Mengembangkan jaringan kerjasama untuk pemberdayaan umat
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Mendorong terwujudnya penyuluh agama yang berintegritas dan berakhlak mulia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6">
            Mari Berkolaborasi Bersama Kami
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan IPAI Bangkalan dalam mewujudkan masyarakat yang religius, sejahtera, dan berakhlak mulia berdasarkan nilai-nilai Islam rahmatan lil &apos;alamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak"
              className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Hubungi Kami
            </Link>
            <Link 
              href="/kegiatan"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              Lihat Kegiatan
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">IPAI BANGKALAN</h3>
              <p className="text-green-200">
                Ikatan Penyuluh Agama Islam Kabupaten Bangkalan. Wadah para penyuluh agama Islam untuk meningkatkan profesionalisme dan kualitas pelayanan.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Menu Utama</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/visi-misi" className="hover:text-white transition-colors">Visi Misi</Link></li>
                <li><Link href="/program" className="hover:text-white transition-colors">Program Kerja</Link></li>
                <li><Link href="/pengurus" className="hover:text-white transition-colors">Struktur Pengurus</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-green-200">
                <li>Jl. Raya Bangkalan No. 123</li>
                <li>Kabupaten Bangkalan, Jawa Timur</li>
                <li>(031) 123-4567</li>
                <li>info@ipaibangkalan.org</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Media Sosial</h4>
              <ul className="space-y-2 text-green-200">
                <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">YouTube</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} Ikatan Penyuluh Agama Islam (IPAI) Bangkalan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}