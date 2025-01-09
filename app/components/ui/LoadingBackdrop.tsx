"use client";
import { useLoaderStore } from "@/app/store/loaderStore";
import { Loader } from "@mantine/core";

const LoadingBackdrop = () => {
  const isLoading = useLoaderStore((state) => state.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`h-screen w-screen fixed top-0 left-0 z-[1300] flex justify-center items-center bg-white`}
    >
      <Loader color="#2A85FF" size="lg" type="dots" />
    </div>
  );
};

export default LoadingBackdrop;
