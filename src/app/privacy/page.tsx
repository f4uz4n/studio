import MainAppLayout from '@/components/layout/MainAppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <MainAppLayout>
      <div className="max-w-3xl mx-auto py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-center">Kebijakan Privasi</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none font-body">
            <p>Kebijakan Privasi ini menjelaskan bagaimana informasi pribadi Anda dikumpulkan, digunakan, dan dibagikan saat Anda mengunjungi atau melakukan pembelian dari [URL Situs Web Anda] ("Situs").</p>

            <h2 className="font-headline">Informasi Pribadi yang Kami Kumpulkan</h2>
            <p>Saat Anda mengunjungi Situs, kami secara otomatis mengumpulkan informasi tertentu tentang perangkat Anda, termasuk informasi tentang browser web Anda, alamat IP, zona waktu, dan beberapa cookie yang dipasang di perangkat Anda. Selain itu, saat Anda menjelajahi Situs, kami mengumpulkan informasi tentang halaman web atau produk individual yang Anda lihat, situs web atau istilah pencarian apa yang merujuk Anda ke Situs, dan informasi tentang bagaimana Anda berinteraksi dengan Situs. Kami menyebut informasi yang dikumpulkan secara otomatis ini sebagai "Informasi Perangkat".</p>
            <p>Kami mengumpulkan Informasi Perangkat menggunakan teknologi berikut:</p>
            <ul>
                <li><strong>"Cookie"</strong> adalah file data yang ditempatkan di perangkat atau komputer Anda dan sering kali menyertakan pengidentifikasi unik anonim. Untuk informasi lebih lanjut tentang cookie, dan cara menonaktifkan cookie, kunjungi http://www.allaboutcookies.org.</li>
                <li><strong>"File log"</strong> melacak tindakan yang terjadi di Situs, dan mengumpulkan data termasuk alamat IP Anda, jenis browser, penyedia layanan Internet, halaman rujukan/keluar, dan stempel tanggal/waktu.</li>
                <li><strong>"Web beacon", "tag", dan "piksel"</strong> adalah file elektronik yang digunakan untuk merekam informasi tentang bagaimana Anda menjelajahi Situs.</li>
            </ul>
            <p>Selain itu, saat Anda melakukan pembelian atau mencoba melakukan pembelian melalui Situs, kami mengumpulkan informasi tertentu dari Anda, termasuk nama, alamat penagihan, alamat pengiriman, informasi pembayaran (termasuk nomor kartu kredit), alamat email, dan nomor telepon. Kami menyebut informasi ini sebagai "Informasi Pesanan".</p>
            <p>Saat kami berbicara tentang "Informasi Pribadi" dalam Kebijakan Privasi ini, kami berbicara tentang Informasi Perangkat dan Informasi Pesanan.</p>

            <h2 className="font-headline">Bagaimana Kami Menggunakan Informasi Pribadi Anda?</h2>
            <p>Kami menggunakan Informasi Pesanan yang kami kumpulkan secara umum untuk memenuhi setiap pesanan yang ditempatkan melalui Situs (termasuk memproses informasi pembayaran Anda, mengatur pengiriman, dan memberi Anda faktur dan/atau konfirmasi pesanan). Selain itu, kami menggunakan Informasi Pesanan ini untuk:</p>
            <ul>
                <li>Berkomunikasi dengan Anda;</li>
                <li>Menyaring pesanan kami untuk potensi risiko atau penipuan; dan</li>
                <li>Saat sejalan dengan preferensi yang telah Anda bagikan kepada kami, memberi Anda informasi atau iklan yang berkaitan dengan produk atau layanan kami.</li>
            </ul>
            <p>Kami menggunakan Informasi Perangkat yang kami kumpulkan untuk membantu kami menyaring potensi risiko dan penipuan (khususnya, alamat IP Anda), dan lebih umum untuk meningkatkan dan mengoptimalkan Situs kami (misalnya, dengan menghasilkan analitik tentang bagaimana pelanggan kami menjelajah dan berinteraksi dengan Situs, dan untuk menilai keberhasilan kampanye pemasaran dan periklanan kami).</p>

            <h2 className="font-headline">Perubahan</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan, misalnya, perubahan pada praktik kami atau karena alasan operasional, hukum, atau peraturan lainnya.</p>
            
            <h2 className="font-headline">Hubungi Kami</h2>
            <p>Untuk informasi lebih lanjut tentang praktik privasi kami, jika Anda memiliki pertanyaan, atau jika Anda ingin mengajukan keluhan, silakan hubungi kami melalui email di [Alamat Email Kontak Anda] atau melalui surat menggunakan detail yang disediakan di bawah ini:</p>
            <p>[Alamat Fisik Anda]</p>

            <p className="mt-6"><em>Dokumen ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}.</em></p>
          </CardContent>
        </Card>
      </div>
    </MainAppLayout>
  );
}
