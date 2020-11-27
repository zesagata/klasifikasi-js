import Klasifikasi from '../dist'

(async () => {

  try {
    await Klasifikasi.build({
      creds: [
        {
          clientId: 'e249df6c-a9ef-4cc3-9f97-bf7f51426f2c',
          clientSecret: 'e28c2b9c-ef77-4995-968c-285dae95ebab'
        }
      ]
    })
  
    const result = await Klasifikasi.classify('1j2318uakls', 'Menonton video ini membuat saya dan ibu saya menangis karena teringat akan jasa para pahlawan.')
    console.log(result)
  } catch (error) {
    console.log(error)
  }

})()