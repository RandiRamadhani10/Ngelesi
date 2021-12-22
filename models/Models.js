import env from './env';
const Models = {
  async login(data) {
    const fetchItem = await fetch(`${env.base}/Api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
        pilihan: data.pilihan,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async register(data) {
    if (data.pilihan === 'murid') {
      const fetchItem = await fetch(`${env.base}/Api/registration_Murid`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          nama: data.nama,
          email: data.email,
        }),
      });
      const res = await fetchItem.json();
      return res;
    } else {
      const fetchItem = await fetch(`${env.base}/Api/registration_Guru`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          nama: data.nama,
          password: data.password,
          email: data.email,
        }),
      });
      const res = await fetchItem.json();
      return res;
    }
  },
  async getKelas() {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getKelas`);
    const res = await fetchItem.json();
    return res;
  },
  async getRating() {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getRating`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasMin() {
    const fetchItem = await fetch(`${env.base}ngelesi/Api/getKelasMin`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasbyIdUser(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getKelasbyIdUser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_user: data.id,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async getAdminbyId(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getAdminbyId`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_admin: data.id,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async getProfilebyIdUser(data) {
    const fetchItem = await fetch(
      `${env.base}/ngelesi/Api/getProfilebyIdUser`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id_user: data.id,
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async getTugas(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getTugas`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_kelas: data.id_kelas,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async getPendaftar(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getPendaftar`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_kelas: data.id_kelas,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async getSemuaKelasTersedia() {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getKelasMin`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasTersediabyIdadmin(data) {
    const fetchItem = await fetch(
      `${env.base}/ngelesi/Api/getKelasTersediabyIdadmin`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id_admin: data.id,
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async ubahPassGuru(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/ubahPassGuru`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_admin: data.id,
        password: data.password,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async ubahPassMurid(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/ubahPassMurid`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_user: data.id,
        password: data.password,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async uploadFotoProfilMurid(data) {
    const fetchItem = await fetch(
      `${env.base}/ngelesi/Api/uploadFotoProfilMurid`,
      {
        method: 'POST',
        body: data,
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async updateProfilMurid(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/updateProfilMurid`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_user: data.id_user,
        nama: data.nama,
        no_hp: data.no_hp,
        tempat_lahir: data.tempat_lahir,
        tanggal_lahir: data.tanggal_lahir,
        umur: data.umur,
        pendidikan: data.pendidikan,
        jenis_kelamin: data.jenis_kelamin,
        alamat: data.alamat,
        foto: data.foto,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async uploadFotoProfilGuru(data) {
    const fetchItem = await fetch(
      `${env.base}/ngelesi/Api/uploadFotoProfilGuru`,
      {
        method: 'POST',
        body: data,
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async updateProfilGuru(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/updateProfilGuru`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_admin: data.id_admin,
        nama: data.nama,
        username: data.username,
        email: data.email,
        no_hp: data.no_hp,
        tmpt_lahir: data.tempat_lahir,
        tgl_lahir: data.tanggal_lahir,
        bidang: data.pendidikan,
        alamat: data.alamat,
        foto: data.foto,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
  async getKelasByIdAdmin(data) {
    const fetchItem = await fetch(`${env.base}/ngelesi/Api/getKelasByIdAdmin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id_admin: data.id,
      }),
    });
    const res = await fetchItem.json();
    return res;
  },
};
export default Models;
