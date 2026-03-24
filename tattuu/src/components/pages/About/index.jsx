import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center gap-8 py-8">
        <h3 className="text-4xl text-custom-light-purple">Sobre nós</h3>
        <div className="flex justify-around">
          <p className="w-1/3 text-2xl">
            No Tattuu, cada traço conta uma história. Acreditamos que uma
            tatuagem é mais do que arte na pele — é identidade, memória e
            expressão.
          </p>
          <p className="w-1/3 text-2xl">
            Localizado na R. Antônio Vargas, 853, Porto Alegre - RS, nosso
            espaço foi pensado para que você se sinta confortábel no primeiro
            esboço ao toque final.
          </p>
        </div>
      </section>
  )
}

export default About