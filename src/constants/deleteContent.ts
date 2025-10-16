export type Lang = 'en' | 'id'

export const deleteContent = {
  en: {
    policyTitle: 'Bookost – Data Deletion Policy',
    policyBody:
      'This page explains how users can request the deletion of their personal data and/or account associated with the Bookost app, published by Modbis Properti Internasional.',
    howTitle: 'How to Request Data or Account Deletion',
    howList: [
      {
        title: 'By email',
        body: 'Send a request to modbispropertiofficial@gmail.com with your registered email address and name.',
      },
      {
        title: 'Via our website',
        body:
          "Visit the Q&A Section at the bottom of the Modbis Property homepage (https://www.modbisproperty.com/), fill out the form with your email and name, and mention Account Deletion Request in your message. We will verify your request before processing.",
      },
    ],
    deletedTitle: 'Data Deleted',
    deletedList: [
      'Profile and account information',
      'Booking history',
      'Stored payment or voucher data',
      'Analytics data linked to your user ID',
    ],
    retainedTitle: 'Data Retained',
    retainedList: [
      'Security or fraud prevention',
      'Legal compliance (e.g., transaction logs retained for up to 90 days)',
    ],
    retainedNote:
      'After the applicable retention periods, this data will also be permanently deleted.',
    contactTitle: 'Contact',
    contactBody: 'For any questions or concerns regarding this policy, please contact us at: modbispropertiofficial@gmail.com',
  },
  id: {
    policyTitle: 'Kebijakan Penghapusan Data Bookost',
    policyBody:
      'Halaman ini menjelaskan bagaimana pengguna dapat meminta penghapusan data pribadi dan/atau akun yang terkait dengan aplikasi Bookost, yang diterbitkan oleh Modbis Properti Internasional.',
    howTitle: 'Cara Meminta Penghapusan Data atau Akun',
    howList: [
      {
        title: 'Melalui email',
        body: 'Kirim permintaan ke modbispropertiofficial@gmail.com dengan alamat email terdaftar dan nama Anda.',
      },
      {
        title: 'Melalui situs web kami',
        body:
          'Kunjungi bagian Tanya & Jawab (Q&A) di bagian bawah halaman utama Modbis Property (https://www.modbisproperty.com/), isi formulir dengan email dan nama Anda, dan cantumkan permintaan "Account Deletion Request" pada pesan Anda. Kami akan memverifikasi permintaan Anda sebelum memprosesnya.',
      },
    ],
    deletedTitle: 'Data yang Dihapus',
    deletedList: [
      'Informasi profil dan akun',
      'Riwayat pemesanan',
      'Data pembayaran atau voucher yang tersimpan',
      'Data analitik yang terkait dengan ID pengguna Anda',
    ],
    retainedTitle: 'Data yang Disimpan',
    retainedList: [
      'Keamanan atau pencegahan penipuan',
      'Kepatuhan hukum (mis. catatan transaksi disimpan hingga 90 hari)',
    ],
    retainedNote:
      'Setelah periode retensi yang berlaku, data ini juga akan dihapus secara permanen.',
    contactTitle: 'Kontak',
    contactBody: 'Untuk pertanyaan atau kekhawatiran mengenai kebijakan ini, silakan hubungi kami di: modbispropertiofficial@gmail.com',
  },
}

export const defaultLang: Lang = 'id'
