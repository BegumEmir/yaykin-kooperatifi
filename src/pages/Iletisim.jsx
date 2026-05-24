import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

export default function Iletisim() {
  const [ayarlar, setAyarlar] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "ayarlar"][0]').then(setAyarlar)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary-dark)' }}>
        İletişim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>
            İletişim Bilgileri
          </h2>
          <div className="flex flex-col gap-4 text-gray-600">
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">Adres</p>
              <p>{ayarlar?.adres || 'Yaykın Köyü, Çan / Çanakkale'}</p>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">Telefon</p>
              <a
                href={`tel:${ayarlar?.telefon || ''}`}
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                {ayarlar?.telefon || '-'}
              </a>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-400 mb-1">E-posta</p>
              <a
                href={`mailto:${ayarlar?.eposta || ''}`}
                className="hover:underline"
                style={{ color: 'var(--color-primary)' }}
              >
                {ayarlar?.eposta || '-'}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 overflow-hidden">
          <iframe
            title="Konum"
            className="w-full h-full min-h-64 rounded-xl"
            src="https://maps.google.com/maps?q=Yaykın+Köyü,+Çan,+Çanakkale&output=embed"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}