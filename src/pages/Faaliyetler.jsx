export default function Faaliyetler() {
  const faaliyetler = [
    {
      emoji: '🥛',
      baslik: 'Süt Toplama ve Soğutma Hizmeti',
      icerik: 'Kooperatifimiz, üyelerimizden düzenli olarak süt toplamakta ve modern süt tanklarında hijyenik koşullarda soğutarak muhafaza etmektedir. Soğutulan sütler, kalite standartlarına uygun şekilde satışa sunularak üyelerimizin emeğinin değer kazanması sağlanmaktadır.',
      foto: "süt-toblama-soğutma.jpeg",
    },
    {
      emoji: '🌾',
      baslik: 'Yem Temini ve Satışı',
      icerik: 'Hayvancılıkla uğraşan üyelerimizin yem ihtiyacını karşılamak amacıyla kooperatifimiz tarafından toplu yem alımı yapılmaktadır. Temin edilen yemler, uygun fiyatlarla üyelerimize sunularak üretim maliyetlerinin düşürülmesine katkı sağlanmaktadır.',
      foto: null,
    },
    {
      emoji: '🌾',
      baslik: 'Un Temini',
      icerik: 'Kooperatifimiz tarafından her pazar günü müstahsillerimizin evlerine un dağıtımı ücretsiz olarak yapılmaktadır.',
      foto: null,
    },
    {
      emoji: '⚙️',
      baslik: 'Değirmen ve Arpa Ezmesi Hizmeti',
      icerik: 'Kooperatif bünyesinde bulunan değirmende, üyelerimiz arpalarını getirerek arpa ezmesi haline dönüştürebilmektedir.',
      foto: null,
    },
    {
      emoji: '🚜',
      baslik: 'Tarımsal Makine Hizmetleri',
      icerik: 'Kooperatifimizin sahip olduğu tarımsal makineler ile üyelerimizin tarımsal faaliyetlerinde ihtiyaç duydukları makine hizmetleri karşılanmaktadır.',
      foto: null,
    },
    {
      emoji: '🌿',
      baslik: 'Balya Bağlama Hizmeti',
      icerik: 'Kooperatifimizin balya makinesi ile yaz döneminde üyelerimizin balya bağlama ihtiyaçları karşılanmaktadır.',
      foto: null,
    },
    {
      emoji: '🌾',
      baslik: 'Arpa Alımı',
      icerik: 'Kooperatifimiz, üyelerimizin ihtiyacı doğrultusunda TEMA iş birliğiyle toplu arpa alımı gerçekleştirmektedir. Bu sayede üyelerimiz daha uygun fiyatlarla kaliteli arpa temin edebilmektedir.',
      foto: null,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
        Faaliyetlerimiz
      </h1>
      <p className="text-gray-600 leading-relaxed mb-10">
        Kooperatifimiz, üyelerimizin üretim süreçlerini kolaylaştırmak ve maliyetlerini azaltmak amacıyla tarım ve hayvancılığın farklı alanlarında hizmet vermektedir. Temel hedefimiz; ortaklarımızın ihtiyaçlarını zamanında, güvenilir ve uygun koşullarla karşılamaktır.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {faaliyetler.map((f) => (
          <div key={f.baslik} className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {f.foto ? (
              <img
                src={f.foto}
                alt={f.baslik}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <img src="/logo.png" alt="Logo" className="h-16 opacity-40" />
              </div>
            )}
            <div className="p-6">
              <h2 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                {f.emoji} {f.baslik}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">{f.icerik}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Seminerler ve Eğitimler */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-dark)' }}>
          🎓 Seminerler, Eğitimler ve Geziler
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Kooperatifimiz, üyelerimizin mesleki gelişimine katkı sağlamak amacıyla düzenli olarak seminerler, eğitimler ve geziler organize etmektedir.
        </p>
        <ul className="flex flex-col gap-3 text-gray-600 text-sm">
          <li className="flex gap-2">
            <span>📍</span>
            <span>Süt kalitesi, yağ ve protein konularında uzman konuşmacılarla bilgilendirme seminerleri</span>
          </li>
          <li className="flex gap-2">
            <span>📍</span>
            <span>Bakanlık uzmanları tarafından buzağı sağlığı ve hayvan bakımı eğitimleri</span>
          </li>
          <li className="flex gap-2">
            <span>📍</span>
            <span>Kadın ve genç girişimcilere yönelik girişimcilik seminerleri</span>
          </li>
          <li className="flex gap-2">
            <span>📍</span>
            <span>Üreticilerimizin mesleki deneyim kazanmasına yönelik yurt içi geziler</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>
          Birlikte Daha Güçlüyüz
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Kooperatifimiz, sahip olduğu imkanlar ve sunduğu hizmetlerle üyelerimizin yanında olmaya, üretimi desteklemeye ve kırsal kalkınmaya katkı sağlamaya devam etmektedir.
        </p>
      </div>
    </div>
  )
}