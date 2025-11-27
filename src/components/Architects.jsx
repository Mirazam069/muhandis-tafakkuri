import "./Architects.css";
import { motion } from "framer-motion";
import arch1 from '../assets/arch-1.JPG'
import arch2 from '../assets/arch-2.JPG'
import arch3 from '../assets/arch-3.JPG'

const architects = [
  {
    id: 1,
    name: "AZIZOV FARHOD",
    role: "Arxitektor",
    exp: "28+ yil ish tajribasi",
    bioLines: [
      "1998 yil Toshkent arxitektura qurilish oligohining arxitektura fakultetini tamomlagan.",
      "1999 yildan 2005 yilga qadar ' Tashgiprogor' loyihalash institutida yetakchi arxitektor lavozimida ishlab kelgan.",
      "2005 yildan millimetr atch group arxitektura va dizayn studiyasini tashkil qilib hozirga davom rahbarlik qilib kelmoqda.",
      "2022 yildan hozirga kunga qadar Ihome build qurilish kompaniyasini boshqarib keladi.",
      "Dubayda Jumaira palm da villa loyihasi, dubayda shayx zeid shox ko'chasida 7 qavatlik mehmonhona majmuasi, rossiya, qozogiston hamda boshqa yutlarda kopgina jamoat hamda turar-joy binolari muallifi."
    ],
    photo: arch1,
  },
  {
    id: 3,
    name: "ISMOIL",
    role: "Construction Technology Expert",
    exp: "10+ years experience",
    bioLines: [
      "1998 yil Toshkent arxitektura qurilish oligohining arxitektura fakultetini tamomlagan.",
      "1999 yildan 2005 yilga qadar ' Tashgiprogor' loyihalash institutida yetakchi arxitektor lavozimida ishlab kelgan.",
      "2005 yildan millimetr atch group arxitektura va dizayn studiyasini tashkil qilib hozirga davom rahbarlik qilib kelmoqda.",
      "2022 yildan hozirga kunga qadar Ihome build qurilish kompaniyasini boshqarib keladi.",
      "Dubayda Jumaira palm da villa loyihasi, dubayda shayx zeid shox ko'chasida 7 qavatlik mehmonhona majmuasi, rossiya, qozogiston hamda boshqa yutlarda kopgina jamoat hamda turar-joy binolari muallifi."
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
            3 arxitektorning umumiy bilimlari
          </h2>
          <p className="architects-subtitle">
            Kursda siz nazariya emas, balki yillar davomida sinovdan o‘tgan real
            obyektlar va amaliy qarorlar ortida turgan fikrlash uslubini o‘rganasiz.
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
