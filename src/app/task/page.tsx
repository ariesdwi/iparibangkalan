import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function ProgramKerja() {
  const programs = [
    {
      category: "Organisasi & Informasi Publik",
      icon: "🏛️",
      bidang: "Seksi 1",
      programs: [
        {
          title: "Koordinasi Lintas Sektoral",
          description: "Membangun kerjasama dengan instansi pemerintah, swasta, dan organisasi masyarakat",
          timeline: "Berkala",
          target: "Seluruh Stakeholder"
        },
        {
          title: "Sosialisasi Informasi Publik",
          description: "Diseminasi informasi melalui media cetak, digital, dan pertemuan langsung",
          timeline: "Mingguan",
          target: "Masyarakat Umum"
        },
        {
          title: "Penguatan Jaringan Organisasi",
          description: "Pembinaan hubungan dengan organisasi profesi sejenis di tingkat regional dan nasional",
          timeline: "Triwulan",
          target: "Pengurus & Anggota"
        }
      ]
    },
    {
      category: "Pengembangan SDM & Pendidikan",
      icon: "📚",
      bidang: "Seksi 2",
      programs: [
        {
          title: "Pelatihan Kompetensi Penyuluh",
          description: "Peningkatan kapasitas penyuluh agama dalam metodologi dan konten penyuluhan",
          timeline: "Bulanan",
          target: "Penyuluh Agama"
        },
        {
          title: "Workshop Pengembangan Diri",
          description: "Pelatihan soft skills dan kemampuan komunikasi untuk efektivitas dakwah",
          timeline: "Triwulan",
          target: "Seluruh Anggota"
        },
        {
          title: "Program Sertifikasi Kompetensi",
          description: "Penyelenggaraan uji kompetensi dan sertifikasi bagi penyuluh agama",
          timeline: "Tahunan",
          target: "Penyuluh Agama"
        }
      ]
    },
    {
      category: "Hukum & Etika Profesi",
      icon: "⚖️",
      bidang: "Seksi 3",
      programs: [
        {
          title: "Bimbingan Hukum dan Advokasi",
          description: "Pendampingan hukum dan advokasi bagi anggota yang membutuhkan",
          timeline: "Berkala",
          target: "Anggota IPARI"
        },
        {
          title: "Penegakan Kode Etik Profesi",
          description: "Pemantauan dan penegakan kode etik penyuluh agama",
          timeline: "Berkala",
          target: "Seluruh Anggota"
        },
        {
          title: "Konsultasi Hukum Keluarga",
          description: "Layanan konsultasi hukum keluarga dan masyarakat",
          timeline: "Mingguan",
          target: "Masyarakat Umum"
        }
      ]
    },
    {
      category: "Pengembangan Profesi & Kinerja",
      icon: "📊",
      bidang: "Seksi 4",
      programs: [
        {
          title: "Penilaian Kinerja Penyuluh",
          description: "Evaluasi berkala terhadap kinerja dan produktivitas penyuluh agama",
          timeline: "Semester",
          target: "Penyuluh Agama"
        },
        {
          title: "Pengembangan Karir Profesional",
          description: "Program pengembangan karir dan jenjang kepangkatan penyuluh agama",
          timeline: "Tahunan",
          target: "Anggota IPARI"
        },
        {
          title: "Forum Ilmiah Penyuluh",
          description: "Diskusi dan sharing best practices antar penyuluh agama",
          timeline: "Bulanan",
          target: "Penyuluh Agama"
        }
      ]
    },
    {
      category: "Sosial, Seni & Budaya",
      icon: "🎭",
      bidang: "Seksi 5",
      programs: [
        {
          title: "Festival Seni Islami",
          description: "Penyelenggaraan festival seni dan budaya bernafaskan Islam",
          timeline: "Tahunan",
          target: "Masyarakat Umum"
        },
        {
          title: "Bakti Sosial Kemasyarakatan",
          description: "Program bantuan sosial untuk masyarakat kurang mampu",
          timeline: "Berkala",
          target: "Masyarakat Pra-Sejahtera"
        },
        {
          title: "Pelestarian Budaya Lokal",
          description: "Pengintegrasian nilai-nilai Islam dengan budaya lokal Bangkalan",
          timeline: "Triwulan",
          target: "Komunitas Budaya"
        }
      ]
    },
    {
      category: "Moderasi Beragama",
      icon: "🕊️",
      bidang: "Seksi 6",
      programs: [
        {
          title: "Dialog Kerukunan Umat",
          description: "Forum dialog antar umat beragama untuk menjaga kerukunan",
          timeline: "Triwulan",
          target: "Tokoh Agama & Masyarakat"
        },
        {
          title: "Kampanye Islam Rahmatan lil Alamin",
          description: "Sosialisasi Islam yang ramah, moderat, dan membawa kedamaian",
          timeline: "Bulanan",
          target: "Masyarakat Umum"
        },
        {
          title: "Pendampingan Kelompok Rentan",
          description: "Pembinaan kelompok rentan terhadap paham radikal",
          timeline: "Berkala",
          target: "Remaja & Pemuda"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-green-200 text-sm font-medium mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <span>Program Strategis</span>
            <ChevronRightIcon className="w-4 h-4" />
            <span>Masa Bakti 2025-2027</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Program Kerja
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-green-100">
            Program Unggulan IPARI Bangkalan Masa Bakti 2025-2027 
            Berdasarkan Struktur Organisasi yang Komprehensif
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Struktur Program
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Program Berdasarkan Bidang
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              IPARI Bangkalan menyusun program kerja strategis sesuai dengan 6 bidang organisasi 
              untuk menjalankan visi dan misi periode 2025-2027 secara efektif dan terukur
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                <div className="flex items-start gap-6 mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-bold text-slate-900">{category.category}</h3>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                        {category.bidang}
                      </span>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.programs.map((program, programIndex) => (
                    <div 
                      key={programIndex}
                      className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-200 hover:-translate-y-2"
                    >
                      <div className="absolute top-0 left-8 w-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-16 transition-all duration-500 rounded-b-full"></div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                        {program.title}
                      </h4>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm font-medium">Jadwal:</span>
                          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                            {program.timeline}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500 text-sm font-medium">Sasaran:</span>
                          <span className="text-slate-700 text-sm text-right font-medium">
                            {program.target}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-4 shadow-sm">
              Fokus Utama
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Program Prioritas Strategis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Fokus utama IPARI Bangkalan dalam menjalankan tugas dan fungsi organisasi 
              dengan pendekatan yang sistematis dan terintegrasi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Sekolah Penyuluh Agama Modern",
                description: "Program pendidikan berkelanjutan untuk meningkatkan kompetensi penyuluh agama dengan pendekatan kontemporer dan digital.",
                bidang: "Seksi 2 & 4",
                features: ["Kurikulum Berbasis Kompetensi", "Metode Penyuluhan Modern", "Sertifikasi Profesi", "Jaringan Nasional"],
                icon: "🎓",
                color: "from-blue-500 to-cyan-600"
              },
              {
                title: "Advokasi Hukum & Etika Profesi",
                description: "Layanan komprehensif untuk perlindungan hukum dan penegakan etika profesi bagi seluruh anggota penyuluh agama.",
                bidang: "Seksi 3",
                features: ["Pendampingan Hukum", "Mediasi Konflik", "Kode Etik Profesi", "Supervisi Kinerja"],
                icon: "⚖️",
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Gerakan Moderasi Beragama",
                description: "Implementasi nilai-nilai moderasi beragama dalam masyarakat melalui pendekatan kultural dan edukatif.",
                bidang: "Seksi 6",
                features: ["Dialog Lintas Agama", "Kampanye Damai", "Pendidikan Toleransi", "Komunitas Inklusif"],
                icon: "🕊️",
                color: "from-emerald-500 to-green-600"
              },
              {
                title: "Revitalisasi Seni Budaya Islami",
                description: "Pelestarian dan pengembangan seni budaya lokal yang bernafaskan Islam untuk memperkuat identitas keislaman.",
                bidang: "Seksi 5",
                features: ["Festival Budaya", "Pelatihan Seni Islami", "Konservasi Budaya", "Komunitas Seniman"],
                icon: "🎭",
                color: "from-purple-500 to-pink-600"
              }
            ].map((highlight, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{highlight.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{highlight.bidang}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">{highlight.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Rencana Strategis
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Roadmap Program 2025-2027
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Rencana strategis pelaksanaan program kerja selama masa bakti dengan timeline yang terstruktur
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-emerald-500"></div>
              
              <div className="space-y-12">
                {[
                  {
                    year: "2025",
                    phase: "Tahap Konsolidasi & Launching",
                    programs: [
                      "Pelantikan Pengurus dan Sosialisasi Struktur",
                      "Penyusunan Rencana Kerja Tahunan",
                      "Launching Program Unggulan",
                      "Koordinasi dengan Stakeholder"
                    ],
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    year: "2026",
                    phase: "Tahap Implementasi & Ekspansi",
                    programs: [
                      "Implementasi Program di Semua Bidang",
                      "Evaluasi Mid-Term Kinerja",
                      "Ekspansi Jaringan Kerjasama",
                      "Pengembangan Kapasitas Anggota"
                    ],
                    color: "from-emerald-500 to-green-600"
                  },
                  {
                    year: "2027",
                    phase: "Tahap Konsolidasi & Legacy",
                    programs: [
                      "Konsolidasi Capaian Program",
                      "Penyusunan Laporan Akhir Masa Bakti",
                      "Persiapan Musyawarah Daerah",
                      "Transfer Knowledge ke Periode Berikutnya"
                    ],
                    color: "from-purple-500 to-indigo-600"
                  }
                ].map((timeline, index) => (
                  <div key={index} className="relative flex items-start gap-8 group">
                    {/* Year marker */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${timeline.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                      {timeline.year}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-slate-50 rounded-2xl p-8 group-hover:shadow-xl transition-all duration-500 border border-slate-200 group-hover:border-slate-300">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{timeline.phase}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {timeline.programs.map((program, progIndex) => (
                          <div key={progIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 font-medium">{program}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-slate-300 text-sm font-medium mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <span>Visi Bersama</span>
            <ChevronRightIcon className="w-4 h-4" />
            <span>Masa Depan Bangkalan</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Sinergi Membangun Bangkalan
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-slate-300">
            Mari bersama-sama mendukung program kerja IPARI Bangkalan untuk mewujudkan masyarakat 
            yang religius, moderat, dan berakhlak mulia melalui pendekatan yang profesional dan berkelanjutan
          </p>
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg inline-block shadow-2xl">
            Masa Bakti 2025-2027
          </div>
        </div>
      </section>
    </div>
  );
}