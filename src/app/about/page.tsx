import Image from "next/image";

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tentang IPAI Bangkalan</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Mengenal Lebih Dekat Visi, Misi, dan Perjalanan Ikatan Penyuluh Agama Islam Kabupaten Bangkalan
          </p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6">Sejarah Berdiri</h2>
              <div className="space-y-4 text-green-800 leading-relaxed">
                <p>
                  Ikatan Penyuluh Agama Islam (IPAI) Bangkalan didirikan pada tahun 1995 sebagai wadah 
                  resmi bagi para Penyuluh Agama Islam di Kabupaten Bangkalan. Organisasi ini lahir 
                  dari kebutuhan akan adanya sebuah lembaga yang dapat mempersatukan, membina, dan 
                  meningkatkan kapasitas para penyuluh agama dalam menjalankan tugas-tugasnya.
                </p>
                <p>
                  Sejak berdiri, IPAI Bangkalan telah menjadi mitra strategis Pemerintah Daerah 
                  dalam membina mental spiritual masyarakat. Organisasi ini terus berkembang dan 
                  beradaptasi dengan tantangan zaman, selalu berkomitmen untuk memberikan pelayanan 
                  terbaik bagi masyarakat Bangkalan.
                </p>
                <p>
                  Dengan semangat ukhuwah islamiyah, IPAI Bangkalan telah melahirkan berbagai program 
                  unggulan yang berkontribusi signifikan terhadap pembangunan karakter dan moral 
                  masyarakat berdasarkan nilai-nilai Islam.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1587132135056-ba0a5650c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Sejarah IPAI Bangkalan"
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
              Pedoman dan Arah Perjuangan IPAI Bangkalan
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
                &ldquo;Terwujudnya Penyuluh Agama Islam yang Profesional, Berintegritas, dan Berakhlak Mulia 
                untuk Mewujudkan Masyarakat Bangkalan yang Madani dan Berkeadilan&rdquo;
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
                  <span>Meningkatkan kualitas profesionalisme dan kompetensi penyuluh agama Islam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">2</span>
                  <span>Memperkuat peran penyuluh agama dalam pembinaan mental spiritual masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">3</span>
                  <span>Mengembangkan jaringan kerjasama dengan berbagai pihak untuk pemberdayaan umat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">4</span>
                  <span>Mendorong terwujudnya penyuluh agama yang berintegritas dan berakhlak mulia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3 mt-1">5</span>
                  <span>Menguatkan peran penyuluh agama dalam menjaga kerukunan umat beragama</span>
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
              Kepengurusan IPAI Bangkalan Periode 2023-2028
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. H. Ahmad Fauzi, M.Pd.I",
                role: "Ketua Umum",
                image: "/api/placeholder/300/300",
                description: "Memimpin organisasi dan bertanggung jawab atas seluruh kegiatan IPAI Bangkalan"
              },
              {
                name: "Hj. Siti Aminah, S.Ag.",
                role: "Sekretaris",
                image: "/api/placeholder/300/300",
                description: "Mengelola administrasi dan dokumentasi organisasi"
              },
              {
                name: "H. Muhammad Rizki, S.E.",
                role: "Bendahara",
                image: "/api/placeholder/300/300",
                description: "Mengelola keuangan dan aset organisasi"
              },
              {
                name: "Drs. H. Bambang Sutrisno",
                role: "Ketua Bidang Dakwah",
                image: "/api/placeholder/300/300",
                description: "Menangani program-program dakwah dan penyuluhan"
              },
              {
                name: "Hj. Fatimah Az-Zahra, M.Pd.",
                role: "Ketua Bidang Pendidikan",
                image: "/api/placeholder/300/300",
                description: "Mengkoordinir program pendidikan dan pelatihan"
              },
              {
                name: "H. Abdul Rahman, S.Sos.",
                role: "Ketua Bidang Sosial",
                image: "/api/placeholder/300/300",
                description: "Menangani kegiatan sosial dan pemberdayaan masyarakat"
              }
            ].map((pengurus, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-800 font-bold text-xl">
                    {pengurus.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{pengurus.name}</h3>
                <div className="text-green-600 font-semibold mb-3">{pengurus.role}</div>
                <p className="text-green-700 text-sm">{pengurus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari perjuangan menebar kebaikan dan membangun masyarakat Bangkalan yang lebih baik
          </p>
         
        </div>
      </section>
    </div>
  );
}