import { type NextPage } from "next";

import React from "react";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, Check } from "lucide-react";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Icons } from "@/components/icons";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="m-5 flex flex-row">
        <div className="basis-2/3">
          <Card>
            <CardHeader>
              <Image
                width={500}
                height={500}
                style={{ objectFit: "contain", width: "100%" }}
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1661625787987/ddn44eRId.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt="card image"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>Deno 1.25, Yol Haritası ve Rakipleri</CardTitle>
              <CardDescription>{`Yeni bir "JavaScript Runtime"ını değerlendirirken, elbette ilk yaptığımız değerlendirme çoğunlukla bu runtime'ı Node.js ile karşılaştırıp farkları anlamaya çalışmak üzerinden ilerliyor. Ancak Deno projesi oldukça sakin ve uzun vadeye yayılmış bir oy...`}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex flex-row gap-5">
                <Image
                  width={50}
                  height={50}
                  className="rounded-full"
                  src={
                    "https://cdn.hashnode.com/res/hashnode/image/upload/v1657742824655/Q3MIy9QUD.png?w=72&h=72&fit=crop&crop=faces&auto=compress,format&format=webp"
                  }
                  alt="Eser Ozvataf"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold">Eser Ozvataf</h3>
                  <span className="flex flex-row items-center align-middle">
                    <Icons.book className="me-1 h-4 w-4" />{" "}
                    <span>3 min read</span>
                    <span className="mx-2"> · </span>
                    <Icons.lineChart className="me-1 h-4 w-4" />
                    <span>3 min read</span>
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="basis-1/3"></div>
      </div>
    </>
  );
};

export default Home;
