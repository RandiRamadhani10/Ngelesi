const api = '192.168.43.249';
const Models = {
  async login(data) {
    const fetchItem = await fetch(`http://${api}:8080/ngelesi/Api/login`, {
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
      const fetchItem = await fetch(
        `http://${api}:8080/ngelesi/Api/registration_Murid`,
        {
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
        },
      );
      const res = await fetchItem.json();
      return res;
    } else {
      const fetchItem = await fetch(
        `http://${api}:8080/ngelesi/Api/registration_Guru`,
        {
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
        },
      );
      const res = await fetchItem.json();
      return res;
    }
  },
  async getKelas() {
    const fetchItem = await fetch(`http://${api}:8080/ngelesi/Api/getKelas`);
    const res = await fetchItem.json();
    return res;
  },
  async getRating() {
    const fetchItem = await fetch(`http://${api}:8080/ngelesi/Api/getRating`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasMin() {
    const fetchItem = await fetch(`http://${api}:8080/ngelesi/Api/getKelasMin`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasbyIdUser(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/getKelasbyIdUser`,
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
  async getAdminbyId(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/getAdminbyId`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id_admin: data,
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async getProfilebyIdUser(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/getProfilebyIdUser`,
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
  async getSemuaKelasTersedia() {
    const fetchItem = await fetch(`http://${api}:8080/ngelesi/Api/getKelasMin`);
    const res = await fetchItem.json();
    return res;
  },
  async getKelasTersediabyIdadmin(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/getKelasTersediabyIdadmin`,
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
  async ubahPassMurid(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/ubahPassMurid`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id_user: data.id_user,
          password: data.password,
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async uploadFotoProfilMurid(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/uploadFotoProfilMurid`,
      {
        method: 'POST',
        body: data,
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async updateProfilMurid(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/updateProfilMurid`,
      {
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
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
  async getKelasByIdAdmin(data) {
    const fetchItem = await fetch(
      `http://${api}:8080/ngelesi/Api/getKelasByIdAdmin`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          id_kelas: data.id,
        }),
      },
    );
    const res = await fetchItem.json();
    return res;
  },
};
export default Models;
