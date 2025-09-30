import Image from "next/image";
import Link from "next/link";

export default function ProgramKerja() {
  const programs = [
    {
      category: "Peningkatan Kompetensi",
      icon: "📚",
      programs: [
        {
          title: "Pelatihan Metodologi Penyuluhan",
          description: "Pelatihan teknik dan metode penyuluhan agama yang efektif dan kontekstual",
          timeline: "Bulanan",
          target: "Seluruh Penyuluh Agama"
        },
        {
          title: "Workshop Digital Dakwah",
          description: "Pelatihan pemanfaatan media digital untuk penyebaran dakwah yang lebih luas",
          timeline: "Triwulan",
          target: "Penyuluh Agama Muda"
        },
        {
          title: "Seminar Keilmuan Islam",
          description: "Diskusi dan seminar pengembangan wawasan keislaman yang moderat",
          timeline: "Semester",
          target: "Seluruh Anggota"
        }
      ]
    },
    {
      category: "Pemberdayaan Masyarakat",
      icon: "🤝",
      programs: [
        {
          title: "Bakti Sosial Ramadhan",
          description: "Distribusi paket sembako dan bantuan untuk masyarakat kurang mampu",
          timeline: "Ramadhan",
          target: "Masyarakat Pra-Sejahtera"
        },
        {
          title: "Pelatihan Kewirausahaan",
          description: "Pemberdayaan ekonomi melalui pelatihan usaha mikro dan kecil",
          timeline: "Triwulan",
          target: "Ibu-ibu Majlis Taklim"
        },
        {
          title: "Pendampingan Keluarga",
          description: "Bimbingan dan konseling keluarga untuk mewujudkan keluarga sakinah",
          timeline: "Berkala",
          target: "Keluarga Muda"
        }
      ]
    },
    {
      category: "Pembinaan Keagamaan",
      icon: "🕌",
      programs: [
        {
          title: "Pengajian Rutin",
          description: "Kajian keislaman mingguan di berbagai masjid dan musholla",
          timeline: "Mingguan",
          target: "Masyarakat Umum"
        },
        {
          title: "Bimbingan Pranikah",
          description: "Pembekalan calon pengantin tentang hak dan kewajiban dalam rumah tangga",
          timeline: "Bulanan",
          target: "Calon Pengantin"
        },
        {
          title: "Pesantren Kilat",
          description: "Program intensif pembinaan akhlak untuk remaja dan pelajar",
          timeline: "Liburan Sekolah",
          target: "Remaja & Pelajar"
        }
      ]
    },
    {
      category: "Pengembangan Organisasi",
      icon: "📊",
      programs: [
        {
          title: "Rapat Koordinasi",
          description: "Evaluasi dan perencanaan program kerja organisasi",
          timeline: "Bulanan",
          target: "Pengurus & Anggota"
        },
        {
          title: "Musyawarah Daerah",
          description: "Forum tertinggi organisasi untuk penetapan kebijakan",
          timeline: "5 Tahun",
          target: "Seluruh Anggota"
        },
        {
          title: "Pelatihan Kepemimpinan",
          description: "Peningkatan kapasitas kepemimpinan bagi kader organisasi",
          timeline: "Tahunan",
          target: "Pengurus & Calon Pengurus"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Program Kerja</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Berbagai Program Unggulan IPAI Bangkalan untuk Mewujudkan Masyarakat Madani
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Program Strategis</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              IPAI Bangkalan memiliki berbagai program kerja yang terstruktur dan berkelanjutan 
              untuk mencapai visi dan misi organisasi
            </p>
          </div>

          {programs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-green-900">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((program, programIndex) => (
                  <div 
                    key={programIndex}
                    className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-200"
                  >
                    <h4 className="text-xl font-semibold text-green-900 mb-3">{program.title}</h4>
                    <p className="text-green-700 mb-4 leading-relaxed">{program.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600 font-medium">Jadwal:</span>
                        <span className="text-green-800">{program.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600 font-medium">Sasaran:</span>
                        <span className="text-green-800 text-right">{program.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Program Unggulan</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Beberapa program prioritas yang menjadi fokus utama IPAI Bangkalan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Sekolah Penyuluh Agama",
                description: "Program pendidikan berkelanjutan untuk meningkatkan kompetensi penyuluh agama dalam berbagai aspek keilmuan dan metodologi dakwah.",
                features: ["Kurikulum Terstruktur", "Mentor Berpengalaman", "Sertifikasi Kompetensi", "Jaringan Alumni"],
                icon: "🎓"
              },
              {
                title: "Dakwah Digital",
                description: "Transformasi dakwah melalui pemanfaatan platform digital untuk menjangkau generasi muda dan masyarakat modern.",
                features: ["Konten Kreatif", "Media Sosial", "Live Streaming", "Komunitas Online"],
                icon: "📱"
              },
              {
                title: "Keluarga Sakinah Center",
                description: "Layanan komprehensif untuk pembinaan keluarga muslim melalui bimbingan pranikah, konseling keluarga, dan parenting islami.",
                features: ["Bimbingan Pranikah", "Konseling Keluarga", "Parenting Islami", "Support Group"],
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Eco Masjid",
                description: "Gerakan pelestarian lingkungan berbasis masjid dan komunitas muslim dengan pendekatan nilai-nilai Islam.",
                features: ["Pengelolaan Sampah", "Penghijauan", "Konservasi Air", "Energi Terbarukan"],
                icon: "🌱"
              }
            ].map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold text-green-900">{highlight.title}</h3>
                </div>
                <p className="text-green-700 mb-6 leading-relaxed">{highlight.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ingin Terlibat dalam Program Kami?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mari bersama-sama mewujudkan program-program yang bermanfaat bagi masyarakat Bangkalan
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak"
              className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Jadi Relawan
            </Link>
            <Link 
              href="/tentang"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}