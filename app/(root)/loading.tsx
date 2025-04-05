import Image from "next/image";

export default function Loading() {
  // Define the Loading UI here
  return (
    <div className="flex-center h-full flex-col gap-4">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        width={50}
        height={50}
        className="animate-spin"
      />{" "}
      <p>Loading...</p>
    </div>
  );
}
