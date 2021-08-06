

const coockies = () =>{

    const urlCoockies = ['https://analytics.google.com', 'https://facebook.com']

    function contenidoCookies(){

    }


    /* variables */
    const secctionCookies = document.querySelector('section.cookies')
    const cookieSi = document.querySelector('.cookies__boton--si')
    const cookieNo = document.querySelector('.cookies__boton--no')
    const nuevoScripts = document.querySelector('#nuevosScripts')

    function acultaCookies(){
        secctionCookies.remove()
    }

    function aceptaCookies(){
        acultaCookies()
        localStorage.setItem('cookie', true)
        ejecutaSiAcepta()
    }

    function denegarCookies(){
        acultaCookies()
        localStorage.setItem('cookie', false)
    }

    function ejecutaSiAcepta(){
        urlCoockies.forEach(url =>{
            const nuevoScript = document.createElement('script')
            nuevoScript.setAttribute('src', url)
            nuevoScripts.appendChild(nuevoScript)
        })
        contenidoCookies()
    }

    function iniciar(){
        if(localStorage.getItem('cookie') !== null){
            if(localStorage.getItem('cookie') === 'true'){
                aceptaCookies()
            }else{
                denegarCookies()
            }
        }
    }

cookieSi.addEventListener('click', aceptaCookies, false)
cookieNo.addEventListener('click', denegarCookies, false)

return {
    iniciar: iniciar
}


}

coockies().iniciar()