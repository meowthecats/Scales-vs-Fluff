import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, Bone, Leaf, HeartPulse, Info, Stethoscope, Search, ShieldAlert, Carot, Brain, Puzzle, Box, Sprout } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function PageThree() {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
      <section className="bg-emerald-50/50 py-16 md:py-24 border-b border-emerald-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 p-32 opacity-5 pointer-events-none text-[20rem]">🐰</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-sm font-medium text-emerald-800 mb-8 tracking-wide">
              Oryctolagus cuniculus domesticus
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">The Rabbit Guide</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about setting up a safe free-roam environment, providing a specialized diet, and understanding their highly sensitive medical needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Habitat & Environment */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">Space, Exercise & Habitat Setup</h2>
            </div>
            <p className="text-gray-600 mb-12 max-w-3xl text-lg">Rabbits need space to binky, run full-speed, and explore safely. Cramped cages are detrimental to their physical and mental health.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm h-full relative overflow-hidden">
                <h3 className="text-2xl font-serif text-gray-900 mb-6">The Setup</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">X-Pens Instead of Cages</strong>
                      <p className="text-gray-600 mt-1">A large dog exercise pen (minimum 36-inches tall, 16+ sq ft) is the ideal home base. It gives them room to hop and stretch out fully while keeping them safe when you are away.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">Litter Box & Hay Station</strong>
                      <p className="text-gray-600 mt-1">Provide a large cat litter box (no lid). Use a safe, absorbent bedding like <strong>Kaytee Aspen Small Animal Pet Bedding</strong>, and place a large hay rack directly over or next to the box. Rabbits love to eat and poop simultaneously.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">Proper Flooring</strong>
                      <p className="text-gray-600 mt-1">Unlike cats and dogs, rabbits do not have pads on the bottom of their feet—only fur. Hardwood or tile floors offer no traction. Provide large area rugs or foam puzzle mats.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">Hiding Spots</strong>
                      <p className="text-gray-600 mt-1">As prey animals, they must always have enclosed spaces to retreat to if spooked. Cardboard castles or wooden hide houses are excellent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-200 h-full shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-6 h-6 text-yellow-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Bunny Proofing</h3>
                </div>
                <p className="text-gray-700 mb-6">If they have access to a room, you must protect your belongings and their lives.</p>
                
                <ul className="space-y-4">
                  <li className="bg-white p-4 rounded-xl border border-yellow-100">
                    <strong className="text-gray-900 block text-sm mb-1">Spicy Hay (Cords)</strong>
                    <p className="text-sm text-gray-600">They will effortlessly slice through phone chargers and lamp cords. Use hard plastic wire looms or keep cords entirely out of reach.</p>
                  </li>
                  <li className="bg-white p-4 rounded-xl border border-yellow-100">
                    <strong className="text-gray-900 block text-sm mb-1">Baseboards & Furniture</strong>
                    <p className="text-sm text-gray-600">Cover exposed baseboards with clear plastic guards or C&C grids if your rabbit is a chewer.</p>
                  </li>
                  <li className="bg-white p-4 rounded-xl border border-yellow-100">
                    <strong className="text-gray-900 block text-sm mb-1">Toxic Houseplants</strong>
                    <p className="text-sm text-gray-600">Assume most houseplants (like pothos, lilies, aloe) are highly toxic. Elevate them completely.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8 grid lg:grid-cols-1 gap-8">
            <FadeIn delay={0.3}>
              <div className="bg-emerald-50/50 rounded-3xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Mental Stimulation & Enrichment</h3>
                </div>
                <p className="text-gray-700 mb-8 text-lg max-w-4xl">
                  Rabbits are highly intelligent animals that spend a huge portion of their wild lives foraging and exploring. Exercise isn't just about running physically; it's about engaging their brains and natural instincts. Without mental stimulation, they can become depressed, lethargic, or highly destructive.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Puzzle className="w-5 h-5 text-emerald-500" />
                      <strong className="text-gray-900 text-lg">Puzzle Toys</strong>
                    </div>
                    <p className="text-sm text-gray-600">
                      Scatter feeding their daily pellets in adjustable puzzle toys (like dog logic boards or stacking cups) forces them to think and "hunt" for their food, massively reducing boredom.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Box className="w-5 h-5 text-emerald-500" />
                      <strong className="text-gray-900 text-lg">Digging Boxes</strong>
                    </div>
                    <p className="text-sm text-gray-600">
                      Rabbits love to dig, putting your carpets at risk! Fill a large cardboard box with shredded paper, safe soil, or old towels, and sprinkle herbs inside to simulate a burrowing spot.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Sprout className="w-5 h-5 text-emerald-500" />
                      <strong className="text-gray-900 text-lg">Chew Toys</strong>
                    </div>
                    <p className="text-sm text-gray-600">
                      A rabbit's teeth never stop growing. Provide safe apple wood sticks, woven willow balls, and untreated loofah. Constantly rotating these keeps their teeth filed and minds occupied.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Breed Spotlight */}
      <section className="py-16 md:py-24 border-b border-gray-100 bg-emerald-50/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl">
                <Info className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">Breed Spotlight & Space Needs</h2>
            </div>
            <p className="text-gray-600 mb-12 max-w-3xl text-lg">While all rabbits need significant out-of-cage time, different breeds bring completely different spatial logistics and unique temperaments.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">The Flemish Giant</h3>
                <p className="text-gray-600 mb-6">Weighing between 15 to 22+ lbs, these "gentle giants" are the size of medium dogs. They are widely loved for being incredibly docile, laid-back, and dog-like in personality.</p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <ShieldAlert className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700"><strong className="text-gray-900 block mb-1">Massive Space Needs:</strong> They absolutely cannot live in any standard pen. They essentially require their own bunny-proofed room or complete free-roam access of the house.</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700"><strong className="text-gray-900 block mb-1">Heavy Appetites:</strong> Be prepared to buy a lot of food. They consume a tremendous volume of hay, pellets, and fresh greens compared to average breeds.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">Best Breeds for Small Places</h3>
                <p className="text-gray-600 mb-6">If you live in an apartment, smaller breeds are easier to accommodate, though they <strong>still require</strong> a minimum 16 sq-ft X-pen base and daily free-roam exercise.</p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-sm">Holland Lop (3-4 lbs)</strong>
                      <p className="text-sm text-gray-700 mt-1">Sturdy, extremely sweet-tempered, and instantly recognizable with floppy ears. One of the best, friendliest house rabbits for smaller footprints.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gray-900 block text-sm">Netherland Dwarf (2-2.5 lbs)</strong>
                      <p className="text-sm text-gray-700 mt-1">The smallest commonly kept breed. They take up very little physical space, but note they can be highly energetic, skittish, and sometimes "spicy" with strangers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Diet & Nutrition */}
      <section className="py-16 md:py-24 border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-50 rounded-xl">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-serif text-gray-900">Diet & Nutrition</h2>
                </div>
                <p className="text-gray-600 max-w-2xl text-lg">A rabbit's digestive tract is constantly moving. Without high-fiber hay, it can shut down within hours, leading to a fatal condition known as GI Stasis.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-emerald-600 opacity-60" />
                  <h3 className="text-2xl font-serif text-gray-900">The 80% Rule</h3>
                </div>
                
                <p className="text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <strong className="text-gray-900 block mb-1">Unlimited Grass Hay:</strong> Hay is the absolute foundation of their life.
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Timothy Hay</strong>
                      <p className="text-sm text-gray-500">The standard for adult rabbits. High in fiber, low in calcium.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Orchard Grass</strong>
                      <p className="text-sm text-gray-500">A great alternative if you are allergic to Timothy hay. Softer texture.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Alfalfa Hay (Babies Only)</strong>
                      <p className="text-sm text-gray-500">Fed only to rabbits under 6 months old due to high calcium/protein.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Greens, Pellets & Treats</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Fresh Greens (10%)</strong>
                      <p className="text-sm text-gray-500">1-2 cups per day of Romaine, Cilantro, Parsley, Dill, or Spring Mix.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Pellets (5%)</strong>
                      <p className="text-sm text-gray-500">1/4 cup per day maximum for adults. Use plain, high-quality Timothy pellets with ZERO colorful bits or seeds.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 text-yellow-700">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <strong className="text-yellow-900">Treats (5%)</strong>
                      <p className="text-sm">Fruit is high in sugar and disrupts their gut flora. Limit to a thumb-sized piece of banana, apple, or carrot occasionally.</p>
                    </div>
                  </li>
                </ul>
                
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Daily Routine Schedule */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">A Day in the Life</h2>
              <p className="text-gray-600">Rabbits are crepuscular, meaning they are primarily active at dawn and dusk.</p>
            </div>
            
            <div className="relative border-l-2 border-emerald-200 ml-4 md:ml-0 md:space-y-12 space-y-8 pb-4">
              
              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%] md:text-right">
                  <span className="text-emerald-600 font-bold font-mono text-xl block mb-1">06:30 AM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Morning Zoomies & Breakfast</h3>
                  <p className="text-gray-600 text-sm">They wake up with high energy! Time for their morning pellet ration, fresh water, and a huge replenishment of their hay rack.</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="hidden md:block w-[45%]"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%]">
                  <span className="text-emerald-600 font-bold font-mono text-xl block mb-1">11:00 AM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">The Mid-Day Slump</h3>
                  <p className="text-gray-600 text-sm">Rabbits will find a cool, dark spot (like under a sofa or behind their castle) to take long, deep naps. Do not disturb them during these hours.</p>
                </div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%] md:text-right">
                  <span className="text-emerald-600 font-bold font-mono text-xl block mb-1">05:00 PM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Evening Activity & Bonding</h3>
                  <p className="text-gray-600 text-sm">They wake up ready to interact! This is prime time to sit on the floor, offer greens, do clicker training, and let them free-roam.</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="hidden md:block w-[45%]"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%]">
                  <span className="text-gray-500 font-bold font-mono text-xl block mb-1">10:00 PM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Safety Lock-Down</h3>
                  <p className="text-gray-600 text-sm">Provide overnight hay. If you are sleeping and cannot supervise, secure them in their spacious X-pen to prevent 2 AM chewing disasters.</p>
                </div>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* Health & Veterinary Care */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Stethoscope className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Health & Veterinary Care</h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Rabbits are considered "Exotic" mammals. Their anatomy and physiology are radically different from cats and dogs. Many standard antibiotics and anesthesias are fatal to rabbits.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Finding a Rabbit-Savvy Vet</h3>
                </div>
                <p className="text-gray-600 mb-6">Never assume a local vet knows rabbit medicine. You must find a specialist before an emergency strikes.</p>
                
                <h4 className="font-medium text-gray-900 mb-4">Trusted Directories:</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">House Rabbit Society (HRS)</strong>
                      <p className="text-sm text-gray-500 mt-1">The leading authority on rabbit welfare. They maintain a list of vetted veterinarians categorized by state and country on their website.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">AEMV Database</strong>
                      <p className="text-sm text-gray-500 mt-1">The Association of Exotic Mammal Veterinarians provides a search tool exclusively for exotic specialists.</p>
                    </div>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-5 rounded-2xl border border-emerald-200">
                  <h4 className="text-sm font-bold text-emerald-900 mb-2">Locate a Specialist</h4>
                  <p className="text-xs text-emerald-800 mb-4">Search the official AEMV or HRS directories to find an exotic veterinarian near your location.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => window.open('https://rabbit.org/veterinarians/', '_blank')}
                      className="flex-1 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm text-center"
                    >
                      Browse HRS
                    </button>
                    <button 
                      onClick={() => window.open('https://aemv.org/find-a-vet/', '_blank')}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm hover:shadow text-center"
                    >
                      Search AEMV
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Questions to Validate a Vet</h3>
                </div>
                <p className="text-gray-600 mb-6">When interviewing a clinic, ask these critical questions:</p>
                
                <ul className="space-y-4">
                  <li className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    <strong className="text-gray-900 block text-sm mb-1">"How many rabbits do you see a week?"</strong>
                    <p className="text-sm text-gray-600 border-t border-emerald-200/50 pt-2 mt-2">You want a vet that sees them daily, not once a month.</p>
                  </li>
                  <li className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    <strong className="text-gray-900 block text-sm mb-1">"Do I need to fast my rabbit before their spay/neuter surgery?"</strong>
                    <p className="text-sm text-gray-600 border-t border-emerald-200/50 pt-2 mt-2 font-bold text-red-600">TRICK QUESTION. Rabbits cannot vomit. If the vet says "yes, fast them," hang up immediately. Fasting causes fatal GI Stasis in rabbits.</p>
                  </li>
                  <li className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    <strong className="text-gray-900 block text-sm mb-1">"Which antibiotics do you use?"</strong>
                    <p className="text-sm text-gray-600 border-t border-emerald-200/50 pt-2 mt-2">A good vet will know that Amoxicillin and penicillin are deadly if given orally to a rabbit.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <FadeIn delay={0.3}>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-serif text-gray-900">The GI Stasis Emergency</h3>
                </div>
                <p className="text-gray-800 font-medium mb-4 text-lg">Gastrointestinal (GI) Stasis is a deadly condition where a rabbit's digestive tract slows or stops completely. It is a <strong>24-hour emergency</strong> requiring immediate veterinary intervention.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h4 className="font-bold text-red-900 mb-3 block">Critical Symptoms to Watch For:</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-red-900 text-sm"><strong>Lethargy & Hiding:</strong> Refusing to move, sitting in a hunched "meatloaf" position with half-closed eyes.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-red-900 text-sm"><strong>Refusal to Eat:</strong> Turning away from their absolute favorite treats or fresh greens.</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-red-900 text-sm"><strong>Small or No Droppings:</strong> Fecal pellets become tiny, strung together with hair, or stop appearing entirely.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/60 p-5 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2 block">What to Do?</h4>
                    <p className="text-red-800 text-sm mb-3">If you notice these symptoms, do not wait to see how they are in the morning. Rabbits can pass away from GI stasis within 12-24 hours.</p>
                    <div className="inline-block bg-white border-2 border-red-600 text-red-600 font-bold px-4 py-2 rounded-xl text-sm w-full text-center">Take them to the Exotics Vet IMMEDIATELY</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Montgomery County Local Resources */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="p-3 bg-emerald-50 rounded-full shadow-sm">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 text-center">Montgomery County, MD Resources</h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              A curated list of specialized exotic veterinarians and rabbit welfare organizations in and around the Montgomery County area (within a ~25-mile radius).
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vets */}
            <FadeIn delay={0.1}>
              <div className="bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Rabbit-Savvy Vets</h3>
                </div>
                <ul className="space-y-6">
                  <li>
                    <strong className="text-gray-900 block">Quince Orchard Veterinary Hospital</strong>
                    <span className="text-sm text-gray-500 block mb-1">Gaithersburg, MD</span>
                    <p className="text-sm text-gray-600">Well-known in the community for having exotic specialists who routinely perform rabbit dentals and spay/neuter surgeries.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Maryland Avian & Exotics Veterinary Care</strong>
                    <span className="text-sm text-gray-500 block mb-1">Rockville, MD</span>
                    <p className="text-sm text-gray-600">A board-certified practice located right in MoCo that caters directly to exotic mammals, birds, and reptiles.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Pender Exotics</strong>
                    <span className="text-sm text-gray-500 block mb-1">Fairfax, VA (~25 miles)</span>
                    <p className="text-sm text-gray-600">Connected to 24/7 emergency care. Their exotics department is staffed by highly trained small-exotic specialists.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Pet Stores & Purchasing */}
            <FadeIn delay={0.2}>
              <div className="bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Where to Buy</h3>
                </div>
                <ul className="space-y-6">
                  <li>
                    <strong className="text-emerald-700 block text-lg mb-1">Local ARBA Breeders</strong>
                    <span className="text-sm text-gray-500 block mb-1">Local MD/VA Area (e.g. Burriss Bunnies, Annie's Holland Lops)</span>
                    <p className="text-sm text-gray-600">The safest way to purchase a live rabbit is through an ethical breeder registered with the American Rabbit Breeders Association (ARBA), many of which operate farms within 30 miles of MoCo.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Tractor Supply Co & Local Feed Stores</strong>
                    <span className="text-sm text-gray-500 block mb-1">Mt. Airy / Damascus / Woodbine (~20-25 miles)</span>
                    <p className="text-sm text-gray-600">Agricultural stores bordering the county often sell live rabbits, especially during the spring "Chick & Bunny Days" seasons.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Independent Pet & Supply Shops</strong>
                    <span className="text-sm text-gray-500 block mb-1">Surrounding MD areas</span>
                    <p className="text-sm text-gray-600">While big chain pet stores no longer sell live rabbits, some smaller independent pet shops in Frederick or Howard County occasionally carry them, though adopting from local county shelters is always highly encouraged!</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p>© {new Date().getFullYear()} Rabbit Educational Guide. Designed with carefully curated information.</p>
      </footer>
    </div>
  );
}
