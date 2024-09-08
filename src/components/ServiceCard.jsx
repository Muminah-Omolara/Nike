export default function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-{350} sm:min-w-{350} rounded-{20px} w-full shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" width={24} height={24} />
      </div>
      <h3 clssName="mt-5 font-palanquin text-3xl leading-nnormal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-lg text-slate-gray">
        {subtext}
      </p>
    </div>
  );
}
