const Klasifikasi = require('../dist')

Klasifikasi.build({
  creds: [
    {
      clientId: 'e249df6c-a9ef-4cc3-9f97-bf7f51426f2c',
      clientSecret: 'e28c2b9c-ef77-4995-968c-285dae95ebab'
    }
  ]
}).then((data) => {
  console.log(data)
}).catch(err => {
  console.log(err)
})