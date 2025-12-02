import "./Architects.css";
import { motion } from "framer-motion";
import arch1 from '../assets/arch-1.JPG'
import arch3 from '../assets/arch-3.JPG'

const architects = [
{
  id: 1,
  name: "AZIZOV FARHOD",
  role: "Arxitektor",
  exp: "28+ yil ish tajribasi",
  bioLines: [
    "1998-yilda Toshkent arxitektura-qurilish oliygohining arxitektura fakultetini tamomlagan.",
    "1999-yildan 2005-yilgacha Tashgiprogor loyihalash institutida yetakchi arxitektor lavozimida faoliyat yuritgan.",
    "2005-yildan 'Millimeter ARCH Group' arxitektura va dizayn studiyasini tashkil etib, hozirgacha rahbarlik qilib kelmoqda.",
    "2022-yildan buyon 'Ihome Build' qurilish kompaniyasini boshqarib keladi.",
    "Dubaydagi Jumeirah Palm-da villa loyihasi, Shayx Zayd Shox ko'chasida joylashgan 7 qavatli mehmonxona majmuasi, Rossiya va Qozog'istondagi ko'plab jamoat hamda turar-joy binolari muallifi."
  ],
  photo: arch1,
},
{
  id: 3,
  name: "ORIFJONOV ISMOIL",
  role: "Qurilish konstruktori, GIP",
  exp: "10+ yil ish tajribasi",
  bioLines: [
    "9–16 qavatli turar-joy va ofis binolari, sanoat inshootlari va zilzilabardosh konstruksiyalarni loyihalash hamda ularni texnik ko‘rikdan o‘tkazish bo‘yicha 10+ yillik tajribaga ega.",
    "Loyihalash jarayonida Eurocode, SNIP va SP talablari asosida temir-beton va po‘lat konstruksiyalar bilan ishlaydi, LIRA-SAPR, Revit/BIM va AutoCAD dasturlarida modellashtirish va hisob-kitoblar bajaradi.",
    "Mehnat faoliyati davomida “Toshkent Expertiza loyiha”, “UZ Shaharsozlik LITI”, “Memorial architectural project”, “Nano Project” va “MAG” kompaniyalarida konstruktor hamda bosh muhandis-konstruktor (GIP) sifatida ishlagan; Benkov nomidagi rassomlik kollejini va Toshkent Arxitektura-Qurilish institutining qurilish muhandisligi yo‘nalishini tamomlagan."
  ],
  photo: arch3,
},
];



const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 },
  }),
};

export default function Architects() {
  return (
    <section className="architects" id="architects">
      <div className="architects-inner">
        <div className="architects-header">
          <h2 className="architects-title">
            Arxitektorlar va muhandislar haqida ma'lumot
          </h2>
          <p className="architects-subtitle">
            Kursimizda siz nafaqat nazariya, balki ko‘p yillik tajribamiz davomida orttirilgan 
            bilim va ko‘nikmalarni o‘rganish orqali muhandis kabi fikrlash hamda qaror qabul qilish uslublarini egallaysiz.
          </p>
        </div>

        <div className="architects-grid">
          {architects.map((arch, index) => (
            <motion.article
              key={arch.id}
              className="arch-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="arch-top">
                <div className="arch-avatar-wrap">
                  <div
                    className="arch-avatar"
                    style={{ backgroundImage: `url(${arch.photo})` }}
                  />
                </div>
                <div className="arch-meta">
                  <h3 className="arch-name">{arch.name}</h3>
                  <p className="arch-role">{arch.role}</p>
                  <p className="arch-exp">{arch.exp}</p>
                </div>
              </div>

              {arch.bioLines ? (
  <div className="arch-bio-multi">
    {arch.bioLines.map((line) => (
      <p key={line}>{line}</p>
    ))}
  </div>
) : (
  <p className="arch-bio">{arch.bio}</p>
)}

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
