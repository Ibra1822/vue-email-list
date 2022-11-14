/**
 **Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
Creare un loading e far comparire gli indirizzi email solamente quando sono stati TUTTI generati.
 */

const {createApp} = Vue;

createApp({
data(){
return{

apiMail:'https://flynn.boolean.careers/exercises/api/random/mail',
limit:10,
list:[],
isReady: false
 
}},
methods:{

getApi(){

axios.get(this.apiMail).then(result => {
  this.list.push(result.data.response)


})
}
// ---------------
},
mounted(){
  for(let i = 0; i < this.limit; i++ ){
      this.getApi();
  }

}


}).mount('#app')