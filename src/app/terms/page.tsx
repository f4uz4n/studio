import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <MainAppLayout>
      <div className="max-w-3xl mx-auto py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Syarat & Ketentuan</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none font-body">
            <p>Selamat datang di QurbanKu!</p>
            <p>Syarat dan ketentuan ini menguraikan aturan dan regulasi untuk penggunaan Situs Web QurbanKu, yang terletak di [URL Situs Web Anda].</p>
            <p>Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini. Jangan lanjutkan menggunakan QurbanKu jika Anda tidak setuju untuk mengambil semua syarat dan ketentuan yang tercantum di halaman ini.</p>

            <h2 className="font-headline">Cookie:</h2>
            <p>Situs web ini menggunakan cookie untuk membantu mempersonalisasi pengalaman online Anda. Dengan mengakses QurbanKu, Anda setuju untuk menggunakan cookie yang diperlukan.</p>
            <p>Cookie adalah file teks yang ditempatkan di hard disk Anda oleh server halaman web. Cookie tidak dapat digunakan untuk menjalankan program atau mengirimkan virus ke komputer Anda. Cookie secara unik ditugaskan kepada Anda dan hanya dapat dibaca oleh server web di domain yang mengeluarkan cookie untuk Anda.</p>

            <h2 className="font-headline">Lisensi:</h2>
            <p>Kecuali dinyatakan lain, QurbanKu dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di QurbanKu. Semua hak kekayaan intelektual dilindungi undang-undang. Anda dapat mengakses ini dari QurbanKu untuk penggunaan pribadi Anda sendiri dengan tunduk pada batasan yang ditetapkan dalam syarat dan ketentuan ini.</p>
            <p>Anda tidak boleh:</p>
            <ul>
              <li>Menerbitkan ulang materi dari QurbanKu</li>
              <li>Menjual, menyewakan, atau mensublisensikan materi dari QurbanKu</li>
              <li>Mereproduksi, menggandakan, atau menyalin materi dari QurbanKu</li>
              <li>Mendistribusikan ulang konten dari QurbanKu</li>
            </ul>
            <p>Perjanjian ini akan dimulai pada tanggal perjanjian ini.</p>
            
            <h2 className="font-headline">Tanggung Jawab Konten:</h2>
            <p>Kami tidak akan bertanggung jawab atas konten apa pun yang muncul di Situs Web Anda. Anda setuju untuk melindungi dan membela kami terhadap semua klaim yang diajukan di Situs Web Anda. Tidak ada tautan yang boleh muncul di Situs Web mana pun yang dapat ditafsirkan sebagai fitnah, cabul, atau kriminal, atau yang melanggar, jika tidak melanggar, atau mendukung pelanggaran atau pelanggaran lain terhadap, hak pihak ketiga mana pun.</p>
            
            <h2 className="font-headline">Reservasi Hak:</h2>
            <p>Kami berhak meminta Anda menghapus semua tautan atau tautan tertentu ke Situs Web kami. Anda menyetujui untuk segera menghapus semua tautan ke Situs Web kami berdasarkan permintaan. Kami juga berhak mengubah syarat dan ketentuan ini dan kebijakan penautannya kapan saja. Dengan terus menautkan ke Situs Web kami, Anda setuju untuk terikat dan mengikuti syarat dan ketentuan penautan ini.</p>

            <p className="mt-6"><em>Dokumen ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}.</em></p>
          </CardContent>
        </Card>
      </div>
    </MainAppLayout>
  );
}
