import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Program Kerja</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Program Unggulan IPARI Bangkalan Masa Bakti 2025-2027 Berdasarkan Struktur Organisasi
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Program Berdasarkan Bidang</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              IPARI Bangkalan menyusun program kerja sesuai dengan 6 bidang organisasi 
              untuk menjalankan visi dan misi periode 2025-2027
            </p>
          </div>

          {programs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900">{category.category}</h3>
                  <p className="text-green-600 font-medium">{category.bidang}</p>
                </div>
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
            <h2 className="text-3xl font-bold text-green-900 mb-4">Program Prioritas</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Fokus utama IPARI Bangkalan dalam menjalankan tugas dan fungsi organisasi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Sekolah Penyuluh Agama Modern",
                description: "Program pendidikan berkelanjutan untuk meningkatkan kompetensi penyuluh agama dengan pendekatan kontemporer dan digital.",
                bidang: "Seksi 2 & 4",
                features: ["Kurikulum Berbasis Kompetensi", "Metode Penyuluhan Modern", "Sertifikasi Profesi", "Jaringan Nasional"],
                icon: "🎓"
              },
              {
                title: "Advokasi Hukum & Etika Profesi",
                description: "Layanan komprehensif untuk perlindungan hukum dan penegakan etika profesi bagi seluruh anggota penyuluh agama.",
                bidang: "Seksi 3",
                features: ["Pendampingan Hukum", "Mediasi Konflik", "Kode Etik Profesi", "Supervisi Kinerja"],
                icon: "⚖️"
              },
              {
                title: "Gerakan Moderasi Beragama",
                description: "Implementasi nilai-nilai moderasi beragama dalam masyarakat melalui pendekatan kultural dan edukatif.",
                bidang: "Seksi 6",
                features: ["Dialog Lintas Agama", "Kampanye Damai", "Pendidikan Toleransi", "Komunitas Inklusif"],
                icon: "🕊️"
              },
              {
                title: "Revitalisasi Seni Budaya Islami",
                description: "Pelestarian dan pengembangan seni budaya lokal yang bernafaskan Islam untuk memperkuat identitas keislaman.",
                bidang: "Seksi 5",
                features: ["Festival Budaya", "Pelatihan Seni Islami", "Konservasi Budaya", "Komunitas Seniman"],
                icon: "🎭"
              }
            ].map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{highlight.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900">{highlight.title}</h3>
                    <p className="text-green-600 text-sm font-medium">{highlight.bidang}</p>
                  </div>
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Roadmap Program 2025-2027</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Rencana strategis pelaksanaan program kerja selama masa bakti
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2025",
                  phase: "Tahap Konsolidasi & Launching",
                  programs: [
                    "Pelantikan Pengurus dan Sosialisasi Struktur",
                    "Penyusunan Rencana Kerja Tahunan",
                    "Launching Program Unggulan",
                    "Koordinasi dengan Stakeholder"
                  ]
                },
                {
                  year: "2026",
                  phase: "Tahap Implementasi & Ekspansi",
                  programs: [
                    "Implementasi Program di Semua Bidang",
                    "Evaluasi Mid-Term Kinerja",
                    "Ekspansi Jaringan Kerjasama",
                    "Pengembangan Kapasitas Anggota"
                  ]
                },
                {
                  year: "2027",
                  phase: "Tahap Konsolidasi & Legacy",
                  programs: [
                    "Konsolidasi Capaian Program",
                    "Penyusunan Laporan Akhir Masa Bakti",
                    "Persiapan Musyawarah Daerah",
                    "Transfer Knowledge ke Periode Berikutnya"
                  ]
                }
              ].map((timeline, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold text-xl">
                      {timeline.year}
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">{timeline.phase}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {timeline.programs.map((program, progIndex) => (
                      <div key={progIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-green-800">{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
          <div className="bg-green-500 inline-block px-6 py-3 rounded-lg font-semibold text-lg">
            Masa Bakti 2025-2027
          </div>
        </div>
      </section>
    </div>
  );
}