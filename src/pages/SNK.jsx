import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Snk() {
  return (
    <>
        <Header />
        <section className='xl:w-[1200px] m-auto mt-[20px] mb-[130px] pr-1 pl-1 md:pr-0 md:pl-0'>
            <div className='bg-[#1B2538] rounded-xl p-10'>
                <h1 className='md:text-[60px] text-[300%] font-bold mb-2 text-[#6C9BFF] md:w-[430px] bg-red leading-[75px]'>
                    <span className='text-white'>Terms &</span>
                    <span className='text-[#6C9BFF]'> Conditions</span>
                </h1>
            </div>

            <div className='pl-10 pr-10'>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Layanan</h3>
                    <li>Lumosites penyedia layanan pembuatan website dengan kelengkapan fitur yang disediakan.</li>
                    <li>Situs website yang kami buat akan dioptimalkan agar dapat tampil pada beberapa perangkat.</li>
                    <li>Terkait dengan biaya, Lumosites memberikan layanan custom yang disesuaikan dengan kebutuhan. Maka dari itu, harga akan dapat ditentukan secara akurat setelah proses konsultasi.</li>
                    <li>PIhak Lumosites akan memberikan tutorial cara pengelolaan website kepada pelanggan.</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Kebijakan privasi</h3>
                    <li>Kami berkomitmen untuk menjaga informasi pribadi pelanggan dan tidak akan menyebarluaskan.</li>
                    <li>Pelanggan berhak untuk mengakses, memperbaiki, atau menghapus informasi pribadi mereka yang dimiliki oleh pihak Lumosites.</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Penghentian layanan, apabila:</h3>
                    <li>Pelanggaran kebijakan penggunaan</li>
                    <li>Melanggar perjanjian yang sudah disepakati</li>
                    <li>Melanggar peraturan perundang - undangan</li>
                    <li>Adanya tindakan kriminal</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Kewajiban pelanggan</h3>
                    <p>Pihak kami berhak menolak pelanggan, apabila ini tidak terpenuhi.</p>
                    <li>Bersedia untuk membaca dan memahami syarat beserta ketentuan jasa pembuatan website secara keseluruhan sebelum mendaftarkan diri dan menaatinya setelah mendaftarkan diri di Lumosites.</li>
                    <li>Bersedia mambaca dan mematuhi peraturan umum pada Lumosites.</li>
                    <li>Bersedia meberikan informasi lengkap dengan disertai data yang valid, termasuk alamat email dan nomor telepon yang berfungsi dengan baik saat melakukan pendaftaran.</li>
                    <li>Bersedia membayar tagihan tepat sesuai tenggat jatuh tempo</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Materi</h3>
                    <li>Materi website harus disediakan oleh pelanggan, apabila tidak ada maka kami akan mengisi sesuai dengan jenis dan kebutuhan konten pada website.</li>
                    <li>Materi website tidak boleh mengandung unsur pornografi, perjudian, ataupun unsur yang melanggar hukum di Indonesia. Segala bentuk materi yang berkaitan dengan tulisan, audio, dan file yang akan ditampilkan pada website merupakan tanggung jawab pelanggan sehingga Lumosites terbebas dari tuduhan dan tuntutan atas pelanggaran hak cipta secara hukum.</li>
                    <li>Pelanggan harus berkomunikasi dengan pihak Lumosites dalam proses pengerjaan ataupun adanya revisi dari konten yang dibuat.</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Pengerjaan</h3>
                    <li>Pengerjaan website akan dilakukan dengan uang muka minimal 50% dari biaya keseluruhan.</li>
                    <li>Pengerjaan website sesuai dengan perjanjian dan kesepakatan awal, aapabila ada penambahan fitur saat pengerjaan sedang dilakukan maka akan dikenakan biaya. Website akan selesai dalam (jumlah hari), kecuali website custom dengan masa perbaikan selama (jumlah hari)</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Revisi dan penambahan fitur</h3>
                    <li>Revisi website berkaitan dengan layout konten, perbaikan, dan ataupun kesalahan input pada data yang berupa teks atau gambar dan apabila ada penambahan fitur, maka akan   biaya tambahan tergantung dari segi fitur.</li>
                    <li>Revisi tidak termasuk adanya penambahan fitur halaman luar paket, dan logo yang disetujui. Revisi desain logo dapat dilakukan hanya 3 (tiga) kali.</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Garansi</h3>
                    <li>Pihak Lumosites akan memberikan garansi selama (lama garansi).</li>
                    <li>Garansi yang akan diberikan berupa website yang dapat diakses dengan baik, fitur yang dapat digunakan dengan baik, dan akan diberikan data backup sesuai dengan data backup terakhir.</li>
                    <li>Garansi akan gugur jika akun diberikan kepada pihak lain tanpa adanya sepengetahuan pihak Lumosites.</li>
                </ul>
                <ul className='list-decimal mt-10 flex flex-col gap-3'>
                    <h3 className='font-bold text-[18px]'>Ketentuan pembayaran</h3>
                    <li>Terkait dengan pembayaran yang akan dilakkukan, pelanggan harus menyetujui harga yang sebelumnya sudah disepakati.</li>
                    <li>Pelanggan harus memberikan konfirmasi setelah melakukan pembayaran baik melalui via WhatsApp, Email ataupun media lainnya yang sudah tersedia untuk melakukan kontak dengan pihak Lumosites.</li>
                    <li>Apabila terjadinya penambahan biaya karena adanya penambahan fitur disaat pengerjaan website maka pihak pelanggan harus membayar sesuai bayaran yang sudah ditentukan oleh pihak Lumosites.</li>
                    <li>Pembayaran yang sudah dilakukan terhadap pihak Lumosites tidak dapat diminta kembali dengan alasan apapun jika pihak pelanggan membatalkan kontran secara sepihak.</li>
                    <li>Biaya yang sudah ditentukan dari pihak Lumosites harus dibayar sepenuhnya oleh pelanggan.</li>
                </ul>
            </div>
        </section>
        <Footer />
    </>
  )
}
