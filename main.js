import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCgSS-chZUH5T47nhRNeK6jYDnGZK_TQSA",
  authDomain: "insan-cemerlang-d6eb1.firebaseapp.com",
  projectId: "insan-cemerlang-d6eb1",
  storageBucket: "insan-cemerlang-d6eb1.appspot.com",
  messagingSenderId: "162904381844",
  appId: "1:162904381844:web:dd88782fdcc494c9ac1781",
  measurementId: "G-1RSX6TCWZ2"
};

//inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

// fungsi ambil daftar pelanggan
export async function ambilDaftarPelanggan() {
  const refDokumen = collection(basisdata, "pelanggan");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);
  let hasilKueri = [];

  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      alamat: dokumen.data().alamat,
      nohape: dokumen.data().nohape

    })
  })

  return hasilKueri;
}
export async function tambahInventory(nama, alamat, nohape) {
  try {
    // menyimpan data ke firebase
    const refDokumen = await addDoc(collection(basisdata, "pelanggan"), {
      nama: nama,
      alamat: alamat,
      nohape: nohape
    })

    // menampilkan pesan berhasil
    console.log('berhasil menyimpan data pelanggan')
  } catch (error) {
    // menampilkan pesan gagal 
    console.log('gagal menyimpan data pelanggan')
  }
}