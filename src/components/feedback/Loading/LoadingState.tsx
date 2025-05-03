import { Loading } from "@components/CustomTypes/SharedTypes";

type LoadingType = {
  status: Loading;
  error : null | string;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
};

export default function LoadingState({status , error, children,skeleton} : LoadingType) {
  if(status == "pending"){
    return skeleton || <p>Loading please wait</p>; // fallback to text if no skeleton
  }

  if (status == "failed"){
    return <p className="mt-5 text-red-500 flex justify-center items-center text-5xl">{error}</p>;
  }
  
  return (
    <>{children}</>
  )
}


