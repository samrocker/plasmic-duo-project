'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import companyLogo1 from "../../../public/1.png";
import companyLogo2 from "../../../public/2.png";
import companyLogo3 from "../../../public/3.png";
import companyLogo4 from "../../../public/4.png";
import companyLogo5 from "../../../public/5.png";
import companyLogo6 from "../../../public/6.png";
import companyLogo7 from "../../../public/7.png";
import companyLogo8 from "../../../public/8.png";
import companyLogo9 from "../../../public/9.png";
import companyLogo10 from "../../../public/10.png";
import companyLogo11 from "../../../public/11.png";
import companyLogo12 from "../../../public/12.png";
import companyLogo13 from "../../../public/13.png";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-26 w-full">
      <CarouselItem>
                    <Image
                      src={companyLogo1}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo2}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo3}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo4}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo5}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo6}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo7}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo8}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo8}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo9}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo10}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo11}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={companyLogo12}
                      alt="company Logo"
                      className="h-full object-cover"
                    />
                  </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
