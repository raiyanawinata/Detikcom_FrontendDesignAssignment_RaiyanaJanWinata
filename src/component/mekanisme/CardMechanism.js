import React from "react";
import './cardmechanisme.css';

export default function CardMechanism() {
  const posts = [
    {
      title: "Registrasi",
      time: "1 - 30 Januari 2023",
      img: require("../../assets/img/Card Icon.png"),
      content: "1. Calon peserta diminta untuk mengisi formulir pendaftaran online yang berisi informasi pribadi,<br/> kontak, dan rincian tim pada link berikut. <br />2. Selain itu, peserta juga diharapkan mengunggah ringkasan rencana bisnis mereka yang mencakup visi, misi, strategi, dan analisis pasar",
    },
    {
      time: "1 - 7 Februari 2023",
      title: "Seleksi Peserta",
      img: require("../../assets/img/Card Icon.png"),
      content: "1. Tim seleksi akan meninjau setiap pendaftaran dan mengevaluasi kualitas dan kelayakan bisnis plan yang diajukan. <br />2. Kriteria evaluasi dapat mencakup inovasi, potensi pertumbuhan, kelayakan keuangan, dan kejelasan presentasi. <br />3. Peserta yang memenuhi persyaratan seleksi akan dipilih sebagai finalis dan berhak melanjutkan ke tahap berikutnya",
    },
    {
      time: "8 Februari 2023",
      title: "Pengumuman Peserta Terpilih",
      img: require("../../assets/img/Card Icon.png"),
      content: "1. Pengumuman finalis akan dilakukan melalui email. <br />2. Finalis akan diinformasikan tentang jadwal presentasi dan persiapan yang diperlukan. <br />3. Pada acara pengumuman pemenang, setiap finalis akan mempresentasikan rencana bisnis mereka di hadapan panel juri. <br />4. Setelah presentasi, panel juri akan melakukan evaluasi dan mengumumkan pemenang kompetisi business plan",
    },
  ];

  return (
    <>
  
    <div className="grid gap-4">
      {posts.map((item, key) => (
        <div className="mechanism-card" key={key}>
          <div className="flex">
            <img
              className="object-cover w-55 h-54"
              src={item.img}
              alt="image"
            />
            <div className="ml-4">
              <h4 className="title">
                {item.title} <span className="time">{item.time}</span>
              </h4>
              <p className="content" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
