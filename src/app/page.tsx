'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {

      setLoading(false);
      router.push('/start');
    }, 15000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="h-dvh flex items-center justify-center w-full text-white-700 font-medium text-3xl bg-dark-200 ">
      AI.bot
    </div>
  );
}
