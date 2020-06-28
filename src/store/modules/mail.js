import db  from '@/fire'

const state = {
    valor: null
}

const getters = {

}

const actions = {
    send_mail({commit}, info){
        {
            return new Promise((resolve, reject) => {
                db.collection('mail').add({
                    to: 'link@distribuidoraconchita.com',
                    message: {
                        subject: 'Correo desde la pagina web',
                        html: `
                            <h1>Esto es una prueba</h1>
                            El usuario "${info.nombre}", con el teléfono "${info.telefono}" y el correo "${info.correo}"
                            dejó el siguiente mensaje: ${info.mensaje}
                        `
                    }
                })
                .then((res) => {
                    commit('si', 'si')
                    resolve(res)
                })
                .catch((error => {
                    console.log(error)
                    reject(error)
                }))
            })
        }
    }
}

const mutations = {
    si(state, valor) {
        state.valor = valor
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}
