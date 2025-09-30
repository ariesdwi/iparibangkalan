import Image from "next/image";
import ipari from "../assets/iparibangkalan.jpeg";

export default function TentangKami() {
  // SVG Icon untuk dekorasi
  const BuildingIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  const TargetIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-emerald-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-green-200 text-sm font-medium mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <BuildingIcon />
            <span>Profil Organisasi</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight">
            Tentang IPARI Bangkalan
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-green-100">
            IPARI (Ikatan Penyuluh Agama Republik Indonesia) adalah organisasi profesi yang mewadahi seluruh penyuluh agama di Indonesia dari berbagai agama untuk meningkatkan profesionalisme, dan berkontribusi pada pembangunan masyarakat yang religius, moderat, dan inklusif.
          </p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl opacity-20 blur-xl"></div>
              <Image
                src={ipari}
                alt="Landasan Hukum IPARI Bangkalan"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                Landasan Hukum
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Dasar Pembentukan Organisasi
              </h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg">
                  Berdasarkan Keputusan Kepala Kantor Kementerian Agama Kabupaten Bangkalan 
                  Tahun 2025, IPARI Kabupaten Bangkalan secara resmi dibentuk untuk masa bakti 
                  2025-2027 sebagai organisasi profesi bagi Penyuluh Agama.
                </p>
                <p>
                  Pembentukan organisasi ini merupakan pelaksanaan amanah Peraturan Menteri 
                  Pendayagunaan Aparatur Negara Dan Reformasi Birokrasi Republik Indonesia 
                  Nomor 9 Tahun 2021 Tentang Jabatan Fungsional Penyuluh Agama Pasal 53 Ayat (2) 
                  huruf n.
                </p>
                <p>
                  Kepengurusan IPARI Bangkalan periode 2025-2027 ditetapkan berdasarkan hasil 
                  Musyawarah Daerah Penyuluh Agama Kabupaten Bangkalan yang diselenggarakan 
                  pada tanggal 14 Agustus 2025 di Burneh, Kabupaten Bangkalan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              Pedoman Organisasi
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Visi dan Misi Strategis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Arah dan tujuan perjuangan IPARI Bangkalan dalam membangun masyarakat yang religius dan moderat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-3xl"></div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                  <TargetIcon />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Visi</h3>
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed text-center italic">
                &ldquo;Menjadi wadah profesional penyuluh agama yang berintegritas, berilmu, dan berdaya guna, yang mampu berkontribusi nyata dalam pembangunan masyarakat yang religius, inklusif, dan moderat.&rdquo;
              </blockquote>
            </div>

            {/* Misi */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-3xl"></div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  <UsersIcon />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Misi</h3>
              </div>
              <ul className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Penguatan Kompetensi",
                    description: "Meningkatkan kompetensi penyuluh melalui pendidikan, pelatihan, dan literasi"
                  },
                  {
                    number: "02",
                    title: "Pembangunan Sinergi",
                    description: "Membangun kerja sama dengan pemerintah, lembaga keagamaan, ormas, dan masyarakat sipil"
                  },
                  {
                    number: "03",
                    title: "Pendorongan Karya Nyata",
                    description: "Mendorong penyuluh untuk menghasilkan karya dalam bidang dakwah, literasi, dan pemberdayaan masyarakat"
                  },
                  {
                    number: "04",
                    title: "Penggerak Moderasi Beragama",
                    description: "Menjadi motor penggerak dalam moderasi beragama, penguatan keluarga sakinah, serta kepedulian sosial dan lingkungan"
                  }
                ].map((misi, index) => (
                  <li key={index} className="flex items-start gap-4 group/item hover:bg-slate-50 p-3 rounded-xl transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                      {misi.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">{misi.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{misi.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              Kepengurusan
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Struktur Organisasi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Kepengurusan IPARI Kabupaten Bangkalan Periode 2025-2027
            </p>
          </div>

          {/* Pimpinan Utama */}
          <div className="mb-20">
  <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Pimpinan Utama</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: "M. Zakariya, S.Ag., M.Pd.I",
        role: "Ketua Umum",
        description: "Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan IPARI Bangkalan",
        color: "from-green-500 to-emerald-600",
        initials: "MZ"
      },
      {
        name: "Mufaroha, S.Ag., M.H.",
        role: "Sekretaris Umum",
        description: "Mengelola administrasi dan dokumentasi organisasi",
        color: "from-blue-500 to-cyan-600",
        initials: "MM"
      },
      {
        name: "Sainiyah, S.Ag., M.H.",
        role: "Bendahara Umum",
        description: "Mengelola keuangan dan aset organisasi",
        color: "from-purple-500 to-pink-600",
        initials: "SS"
      }
    ].map((pengurus, index) => (
      <div key={index} className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:-translate-y-2">
        <div className={`w-20 h-20 bg-gradient-to-br ${pengurus.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {pengurus.initials}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{pengurus.name}</h3>
        <div className="text-slate-600 font-semibold mb-4 px-4 py-2 bg-slate-100 rounded-full inline-block">
          {pengurus.role}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">{pengurus.description}</p>
      </div>
    ))}
  </div>
</div>

          {/* Dewan Pembina */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Dewan Pembina</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kepala Kantor Kementerian Agama",
                  role: "Pelindung",
                  description: "Memberikan perlindungan dan pembinaan organisasi",
                  icon: "🛡️"
                },
                {
                  name: "Kepala Sub. Bag. Tata Usaha",
                  role: "Pengarah",
                  description: "Memberikan arahan strategis organisasi",
                  icon: "🧭"
                },
                {
                  name: "Kepala Seksi Bimas Islam",
                  role: "Majelis Kehormatan Etik",
                  description: "Menjaga etika dan kehormatan profesi",
                  icon: "⚖️"
                }
              ].map((pembina, index) => (
                <div key={index} className="group relative bg-slate-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 border border-slate-200">
                  <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {pembina.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{pembina.role}</h3>
                  <div className="text-slate-700 font-semibold mb-4 text-sm leading-tight">{pembina.name}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{pembina.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bidang-Bidang */}
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Bidang-Bidang Khusus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Organisasi & Informasi Publik",
                  ketua: "Mohammad Tikno Mulyono, S.Sos.I",
                  tugas: "Hubungan lintas sektoral dan informasi publik",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  name: "Pengembangan SDM",
                  ketua: "Ibrohim Muchlis, S.Th.I., M.Ag",
                  tugas: "Pendidikan, pelatihan, dan pengembangan kompetensi",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  name: "Hukum & Etika Profesi",
                  ketua: "Abdul Nafik, S.H.",
                  tugas: "Advokasi, disiplin, dan etika profesi",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  name: "Pengembangan Profesi",
                  ketua: "Mukamat Khoirul Amirudin, S.Pd., M.Ag",
                  tugas: "Penilaian kinerja dan pengembangan profesi",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Sosial & Budaya",
                  ketua: "Mohammad Hanafi, S.Pd., M.Pd",
                  tugas: "Kegiatan sosial, seni, dan budaya Islami",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  name: "Moderasi Beragama",
                  ketua: "Idul Fitri, S.Pd.I",
                  tugas: "Implementasi moderasi beragama dalam masyarakat",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((bidang, index) => (
                <div key={index} className="group relative bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-500 border border-slate-200 hover:-translate-y-1">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${bidang.color} rounded-t-xl`}></div>
                  <h4 className="font-bold text-slate-900 mb-4 text-center text-lg">{bidang.name}</h4>
                  <div className="text-sm text-slate-700 mb-3">
                    <span className="font-semibold text-slate-900">Ketua:</span>
                    <br />
                    <span className="text-slate-600">{bidang.ketua}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{bidang.tugas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-slate-300 text-sm font-medium mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <TargetIcon />
            <span>Visi Bersama</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            Mari Bersinergi Membangun Bangkalan
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-slate-300">
            IPARI Bangkalan siap menjadi mitra dalam membangun masyarakat yang religius, 
            moderat, dan berakhlak mulia berdasarkan nilai-nilai Islam yang rahmatan lil &apos;alamin
          </p>
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg inline-block shadow-2xl">
            Masa Bakti 2025-2027
          </div>
        </div>
      </section>
    </div>
  );
}