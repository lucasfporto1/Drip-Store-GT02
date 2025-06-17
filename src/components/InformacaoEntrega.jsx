export default function InformacoesEntrega() {
  return (
    <section className="bg-white flex flex-col gap-3 py-8 px-8">
      <h2 className="text-[#474747] font-bold text-lg tracking-[0.75px]">Informações de Entrega</h2>
      <hr className="bg-[#CCCCCC] h-[0.1rem] border-0" />
      {['endereco', 'bairro', 'cidade', 'cep', 'complemento'].map((campo) => (
        <label
          key={campo}
          htmlFor={campo}
          className="flex flex-col gap-2 text-[#474747] font-bold tracking-[0.75px] text-sm md:text-lg"
        >
          {campo.charAt(0).toUpperCase() + campo.slice(1)}{campo !== 'complemento' ? ' *' : ''}
          <input
            className="bg-zinc-100 h-12 placeholder-[#666666] p-3 outline-none font-normal"
            type="text"
            name={campo}
            id={campo}
            placeholder={`Insira seu ${campo}`}
            {...(campo !== 'complemento' && { required: true })}
          />
        </label>
      ))}
    </section>
  );
}
