export default function CadastroLoginBottomForm() {
  return (
    <div className="flex md:flex-row md:justify-center flex-col items-center">
      <p className="font-[Inter] text-[14px] mb-3 mt-5">Ou faça login com:</p>
      <div className="flex items-center space-x-4">
        {/* Ícone do Gmail */}
        <a href="API GMAIL">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/716/465/non_2x/gmail-icon-free-png.png"
            alt="Gmail"
            className="h-10 w-10 md:ml-2"
          />
        </a>
        {/* Ícone do Facebook */}
        <a href="API FACEBOOK">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536394.png"
            alt="Ícone Circle Facebook"
            className="h-8 w-8 rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
