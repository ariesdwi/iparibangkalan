import Image from "next/image";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tentang IPARI Bangkalan</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mengenal Lebih Dekat Visi, Misi, dan Perjalanan Ikatan Penyuluh Agama Republik Indonesia 
            Kabupaten Bangkalan Masa Bakti 2025-2027
          </p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Landasan Hukum</h2>
              <div className="space-y-4 text-green-800 leading-relaxed">
                <p>
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
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1587132135056-ba0a5650c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Landasan Hukum IPARI Bangkalan"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Visi dan Misi</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Pedoman dan Arah Perjuangan IPARI Bangkalan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">Visi</h3>
              </div>
              <p className="text-green-800 text-lg leading-relaxed text-center">
                &ldquo;Terwujudnya Penyuluh Agama yang Profesional, Berintegritas, dan Berakhlak Mulia 
                untuk Mewujudkan Masyarakat Bangkalan yang Madani dan Berkeadilan Berdasarkan Nilai-Nilai Islam&rdquo;
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">Misi</h3>
              </div>
              <ul className="space-y-4 text-green-800">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">1</span>
                  <span>Memfasilitasi pengembangan organisasi dan hubungan lintas sektoral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">2</span>
                  <span>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">3</span>
                  <span>Memperkuat aspek hukum, advokasi, disiplin dan etika profesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">4</span>
                  <span>Mengembangkan profesionalisme dan sistem penilaian kinerja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">5</span>
                  <span>Memajukan kegiatan sosial, seni dan budaya Islami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">6</span>
                  <span>Mengimplementasikan moderasi beragama dalam masyarakat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Struktur Organisasi</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Kepengurusan IPARI Kabupaten Bangkalan Periode 2025-2027
            </p>
          </div>

          {/* Pimpinan Utama */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Pimpinan Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              ].map((pengurus, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-lg">
                      {pengurus.name.split(' ').slice(0,2).map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2 leading-tight">{pengurus.name}</h3>
                  <div className="text-green-600 font-semibold mb-3">{pengurus.role}</div>
                  <p className="text-green-700 text-sm">{pengurus.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dewan Pembina */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Dewan Pembina</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kepala Kantor Kementerian Agama",
                  role: "Pelindung",
                  description: "Memberikan perlindungan dan pembinaan organisasi"
                },
                {
                  name: "Kepala Sub. Bag. Tata Usaha",
                  role: "Pengarah",
                  description: "Memberikan arahan strategis organisasi"
                },
                {
                  name: "Kepala Seksi Bimas Islam",
                  role: "Majelis Kehormatan Etik",
                  description: "Menjaga etika dan kehormatan profesi"
                }
              ].map((pembina, index) => (
                <div key={index} className="bg-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-green-800 font-bold">🏛️</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 mb-2">{pembina.role}</h3>
                  <div className="text-green-700 font-semibold mb-3 text-sm">{pembina.name}</div>
                  <p className="text-green-700 text-sm">{pembina.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bidang-Bidang */}
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Bidang-Bidang Khusus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Organisasi & Informasi Publik",
                  ketua: "Mohammad Tikno Mulyono, S.Sos.I",
                  tugas: "Hubungan lintas sektoral dan informasi publik"
                },
                {
                  name: "Pengembangan SDM",
                  ketua: "Ibrohim Muchlis, S.Th.I., M.Ag",
                  tugas: "Pendidikan, pelatihan, dan pengembangan kompetensi"
                },
                {
                  name: "Hukum & Etika Profesi",
                  ketua: "Abdul Nafik, S.H.",
                  tugas: "Advokasi, disiplin, dan etika profesi"
                },
                {
                  name: "Pengembangan Profesi",
                  ketua: "Mukamat Khoirul Amirudin, S.Pd., M.Ag",
                  tugas: "Penilaian kinerja dan pengembangan profesi"
                },
                {
                  name: "Sosial & Budaya",
                  ketua: "Mohammad Hanafi, S.Pd., M.Pd",
                  tugas: "Kegiatan sosial, seni, dan budaya Islami"
                },
                {
                  name: "Moderasi Beragama",
                  ketua: "Idul Fitri, S.Pd.I",
                  tugas: "Implementasi moderasi beragama dalam masyarakat"
                }
              ].map((bidang, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-900 mb-3 text-center">{bidang.name}</h4>
                  <div className="text-sm text-green-700 mb-2">
                    <span className="font-semibold">Ketua:</span> {bidang.ketua}
                  </div>
                  <p className="text-green-600 text-xs">{bidang.tugas}</p>
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
            Mari Bersinergi Membangun Bangkalan
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            IPARI Bangkalan siap menjadi mitra dalam membangun masyarakat yang religius, 
            moderat, dan berakhlak mulia berdasarkan nilai-nilai Islam
          </p>
          <div className="bg-green-500 inline-block px-6 py-3 rounded-lg font-semibold">
            Masa Bakti 2025-2027
          </div>
        </div>
      </section>
    </div>
  );
}