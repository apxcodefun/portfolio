const Biodata = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="grid grid-cols-2 gap-4 items-center max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <img
          src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1735694995~exp=1735698595~hmac=e72ccba4ca29dbc9b0d9ccfccd5bc585d31b35c254924e2171671a2c8efdf12a&w=740"
          alt="Gambar seorang pangeran muda"
          className="w-[250px] rounded-md shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">Halo 👋</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Perkenalkan Nama Saya <strong>Ardiansyah Putra</strong>. Saya adalah
            seorang programmer yang berpengalaman di bidang web development.
            Saya sangat senang mengembangkan ilmu dan berfokus pada meningkatkan
            kinerja dan kenyamanan pengguna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
