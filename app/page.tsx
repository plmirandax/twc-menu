"use client";

import { ChefHat, Clock, MapPin, Phone, Palmtree, Wifi, Coffee, Wine, Car, Space as Spa, Instagram, Facebook, Twitter, Linkedin, Mail, Check, Users, Bath, Tv, Utensils } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const presidentialImages = [
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2070&auto=format&fit=crop"
  ];

  const royalImages = [
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop"
  ];

  const executiveImages = [
    "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury resort exterior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Dolores Tropicana Resort</h1>
          <p className="text-xl md:text-2xl mb-8">Your Tropical Paradise in General Santos City</p>
          <div className="flex gap-4 justify-center">
            <a
              href="#rooms"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              View Rooms
            </a>
            <a
              href="#menu"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Restaurant Menu
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <Wifi className="w-8 h-8 text-primary" />
            <p className="text-sm">Free Wi-Fi</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Car className="w-8 h-8 text-primary" />
            <p className="text-sm">Free Parking</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Spa className="w-8 h-8 text-primary" />
            <p className="text-sm">Luxury Spa</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Coffee className="w-8 h-8 text-primary" />
            <p className="text-sm">24/7 Service</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Wine className="w-8 h-8 text-primary" />
            <p className="text-sm">Fine Dining</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <Palmtree className="w-8 h-8 text-primary" />
            <p className="text-sm">Beach Access</p>
          </div>
        </div>
      </section>

      {/* VIP Rooms Section */}
      <section id="rooms" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Luxury Accommodations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Experience unparalleled comfort and elegance in our meticulously designed suites, each offering a unique blend of tropical charm and modern luxury.</p>
          </div>

          {/* Presidential Suite */}
          <div className="mb-20">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-full">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {presidentialImages.map((image, index) => (
                        <CarouselItem key={index} className="relative h-[400px] lg:h-[600px]">
                          <Image
                            src={image}
                            alt={`Presidential Suite view ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Premium</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Ocean View</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Presidential Suite</h3>
                    <p className="text-muted-foreground mb-6">Our most exclusive 200m² suite offering panoramic views of the Sarangani Bay, perfect for those seeking the ultimate luxury experience.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Up to 4 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-5 h-5 text-primary" />
                        <span>Jacuzzi & Spa Bath</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tv className="w-5 h-5 text-primary" />
                        <span>65&quot; Smart TV</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-primary" />
                        <span>Private Dining</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Private terrace with infinity pool
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        24/7 personal butler service
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Complimentary spa treatments
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold">₱25,000<span className="text-sm text-muted-foreground">/night</span></p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Royal Suite */}
          <div className="mb-20">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-full">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {royalImages.map((image, index) => (
                        <CarouselItem key={index} className="relative h-[400px] lg:h-[600px]">
                          <Image
                            src={image}
                            alt={`Royal Suite view ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Luxury</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Pool Access</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Royal Suite</h3>
                    <p className="text-muted-foreground mb-6">A spacious 150m² haven featuring a private pool and modern amenities, perfect for families or small groups.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Up to 3 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-5 h-5 text-primary" />
                        <span>Luxury Bath</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tv className="w-5 h-5 text-primary" />
                        <span>55&quot; Smart TV</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-primary" />
                        <span>Mini Bar</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Private pool access
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Premium spa bathroom
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Ocean view balcony
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold">₱18,000<span className="text-sm text-muted-foreground">/night</span></p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Suite */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-full">
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {executiveImages.map((image, index) => (
                        <CarouselItem key={index} className="relative h-[400px] lg:h-[600px]">
                          <Image
                            src={image}
                            alt={`Executive Suite view ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Business</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Garden View</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Executive Suite</h3>
                    <p className="text-muted-foreground mb-6">A sophisticated 100m² retreat with garden views, perfect for business travelers or couples seeking comfort.</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Up to 2 guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="w-5 h-5 text-primary" />
                        <span>Rain Shower</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tv className="w-5 h-5 text-primary" />
                        <span>50&quot; Smart TV</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-primary" />
                        <span>Work Space</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Private balcony
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Executive lounge access
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary" />
                        Business center access
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold">₱12,000<span className="text-sm text-muted-foreground">/night</span></p>
                    </div>
                    <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <ChefHat className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Fine Dining</h2>
            <p className="text-muted-foreground">Exquisite culinary experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[600px] transition-transform hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
                alt="Menu page 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="relative h-[600px] transition-transform hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1515668236457-83c3b8764839?q=80&w=2070&auto=format&fit=crop"
                alt="Menu page 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dolores Tropicana Resort</h3>
              <p className="mb-4">Luxury resort offering world-class amenities and unforgettable experiences in General Santos City.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Cabu, Brgy. Tambler, General Santos City
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +63 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@dolorestropicana.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Rooms & Suites</a></li>
                <li><a href="#" className="hover:underline">Spa & Wellness</a></li>
                <li><a href="#" className="hover:underline">Dining</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-md text-black flex-1"
                />
                <button className="bg-white text-primary px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p>© {new Date().getFullYear()} Dolores Tropicana Resort. All rights reserved.</p>
              <div className="md:text-right space-x-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}