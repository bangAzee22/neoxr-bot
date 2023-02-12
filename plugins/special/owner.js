exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.6282169638085,
         about: 'Owner & Creator'
      }], m)
   },
   error: false,
   cache: true,
   location: __filename
}
