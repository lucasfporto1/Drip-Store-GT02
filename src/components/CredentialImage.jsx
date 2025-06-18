import tenisCredential from "../assets/tenisCredential.png";

export default function CredentialImage() {
  return (
    <div>
      {
        <img
          src={tenisCredential}
          alt="Produto"
          className="ml-8 w-[500px] h-[500px] hidden md:ml-4 lg:block lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:h-[600px] 2xl:w-[600px] 2xl:ml-10"
        />
      }
    </div>
  );
}
