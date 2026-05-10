import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, Bone, ThermometerSun, Leaf, Bug, Info, ArrowRight } from 'lucide-react';

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

export default function PageTwo() {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
      <section className="bg-orange-50/50 py-16 md:py-24 border-b border-orange-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none text-[20rem]">🦎</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 text-sm font-medium text-orange-800 mb-8 tracking-wide">
              Pogona vitticeps
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">The Bearded Dragon Guide</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about setting up the perfect habitat, crafting a nutritious diet, and establishing a daily routine for your reptilian companion.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Habitat & Environment */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-50 rounded-xl">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-serif text-gray-900">Habitat Setup</h2>
            </div>
            <p className="text-gray-600 mb-12 max-w-3xl text-lg">Replicating the arid, rocky woodlands of central Australia is key to a thriving dragon. Here is the blueprint for their personal oasis.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm h-full relative overflow-hidden">
                <h3 className="text-2xl font-serif text-gray-900 mb-6">The Enclosure & Lighting</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">120 Gallon Minimum Size</strong>
                      <p className="text-gray-600 mt-1">Adults require a 4'x2'x2' enclosure at a minimum. Front-opening doors are essential to avoid triggering their predator response.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <ThermometerSun className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">The Heat Gradient (Basking Zone)</strong>
                      <p className="text-gray-600 mt-1">Create a hot side with a basking surface of 100°F–105°F and an ambient cool side around 75°F–80°F. A Halogen Flood bulb often works best for daytime heat.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">Linear T5 UVB Tube</strong>
                      <p className="text-gray-600 mt-1">Do not use compact coil bulbs. You need a linear T5 HO UVB tube spanning 1/2 to 2/3 the length of the tank to synthesize vitamin D3.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-900 text-lg">Substrate Considerations</strong>
                      <p className="text-gray-600 mt-1">Paper towels or slate tile are best for juveniles. Adults can thrive on a safe 50/50 mix of organic topsoil and playsand, provided husbandry is perfect.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-orange-600 rounded-3xl p-8 text-white h-full shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                  <ThermometerSun className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Temperature Cheat Sheet</h3>
                <ul className="space-y-6 relative z-10">
                  <li>
                    <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider block mb-1">Basking Surface</span>
                    <span className="text-3xl font-light">100° - 105°<span className="text-xl opacity-70">F</span></span>
                  </li>
                  <li>
                    <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider block mb-1">Hot Side Ambient</span>
                    <span className="text-3xl font-light">85° - 90°<span className="text-xl opacity-70">F</span></span>
                  </li>
                  <li>
                    <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider block mb-1">Cool Side Ambient</span>
                    <span className="text-3xl font-light">75° - 80°<span className="text-xl opacity-70">F</span></span>
                  </li>
                  <li>
                    <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider block mb-1">Nighttime Drop</span>
                    <span className="text-xl font-light opacity-90">Safe down to 65°F (No visible lights at night!)</span>
                  </li>
                </ul>
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
                <p className="text-gray-600 max-w-2xl text-lg">As opportunistic omnivores, their dietary needs drastically "flip" as they mature from hungry bug-hunters to salad-loving adults.</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Bug className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Live Feeder Insects</h3>
                </div>
                
                <p className="text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <strong className="text-gray-900 block mb-1">Rule of thumb:</strong> Never feed an insect larger than the space between your dragon's eyes to prevent fatal impaction.
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Dubia Roaches</strong>
                      <p className="text-sm text-gray-500">The absolute best staple feeder. High protein, low chitin (shell), and they don't jump or smell.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Black Soldier Fly Larvae (BSFL)</strong>
                      <p className="text-sm text-gray-500">Excellent calcium content, wriggly movement triggers their hunting instinct.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Crickets</strong>
                      <p className="text-sm text-gray-500">A classic staple, though they can be noisy and carry parasites if bought from poor sources.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Treat Insects (Max 1-2x per week)</strong>
                      <p className="text-sm text-gray-500">Hornworms (hydration), Superworms (high fat), Waxworms (reptile candy).</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-2xl font-serif text-gray-900">The Daily Salad</h3>
                </div>

                <p className="text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  Fresh greens should be offered daily in a shallow dish, even to babies who might ignore it initially.
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Excellent Staple Greens</strong>
                      <p className="text-sm text-gray-500">Collard Greens, Mustard Greens, Turnip Greens, Dandelion Greens, Arugula.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <div>
                      <strong className="text-gray-900">Occasional Veggies</strong>
                      <p className="text-sm text-gray-500">Squash (Butternut, Acorn, Spaghetti), Bell Peppers, Carrots.</p>
                    </div>
                  </li>
                  <li className="flex gap-3 text-red-700">
                    <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <strong className="text-red-900">Strictly Avoid</strong>
                      <p className="text-sm">Spinach (binds calcium), Iceberg Lettuce (zero nutrition), Avocado, Onion, Garlic, Citrus fruits.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="flex items-center gap-2 font-medium text-gray-900 mb-2">
                    <Bone className="w-5 h-5 text-gray-400" /> Supplementation Schedule
                  </h4>
                  <p className="text-sm text-gray-600">Foods must be lightly "dusted" with powdered supplements.<br/><br/>
                  <strong>Babies:</strong> Calcium 5x a week, Multivitamin 2x a week.<br/>
                  <strong>Adults:</strong> Calcium 2x a week, Multivitamin 1x a week.
                  </p>
                </div>
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
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4">A Day in the Life</h2>
              <p className="text-gray-600">A typical schedule for an adult bearded dragon.</p>
            </div>
            
            <div className="relative border-l-2 border-orange-200 ml-4 md:ml-0 md:space-y-12 space-y-8 pb-4">
              
              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%] md:text-right">
                  <span className="text-orange-600 font-bold font-mono text-xl block mb-1">08:00 AM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Lights On & Warm Up</h3>
                  <p className="text-gray-600 text-sm">Timers turn on the heat and UVB lamps. The dragon climbs to the basking spot to "charge up" their metabolism for 1-2 hours. They won't eat until they are toasty.</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="hidden md:block w-[45%]"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%]">
                  <span className="text-orange-600 font-bold font-mono text-xl block mb-1">10:30 AM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Salad Delivery & Maintenance</h3>
                  <p className="text-gray-600 text-sm">Provide a fresh bowl of chopped greens. Refresh the water dish. Spot-clean the enclosure to remove any feces or uneaten food from the previous day.</p>
                </div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%] md:text-right">
                  <span className="text-orange-600 font-bold font-mono text-xl block mb-1">02:00 PM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Enrichment & Roaming</h3>
                  <p className="text-gray-600 text-sm">Let them out of the enclosure to explore a warm, reptile-proofed room. This is a great time for handling and bonding on the sofa while watching TV.</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="hidden md:block w-[45%]"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%]">
                  <span className="text-orange-600 font-bold font-mono text-xl block mb-1">04:00 PM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Protein Feast (If Scheduled)</h3>
                  <p className="text-gray-600 text-sm">Feed dusted live insects (e.g., 5-6 dubia roaches for an adult) according to their feeding schedule. They need several hours of heat after eating to digest.</p>
                </div>
              </div>

              <div className="relative md:flex items-center md:justify-between">
                <div className="absolute w-4 h-4 rounded-full bg-orange-500 -left-[9px] md:left-1/2 md:-ml-2 top-0 md:top-auto border-4 border-white shadow-sm"></div>
                <div className="pl-6 md:pl-0 w-full md:w-[45%] md:text-right">
                  <span className="text-gray-500 font-bold font-mono text-xl block mb-1">08:00 PM</span>
                  <h3 className="text-xl font-serif text-gray-900 mb-2">Lights Out</h3>
                  <p className="text-gray-600 text-sm">All lights switch off. They find a spot to sleep, experiencing a natural temperature drop that mimics the desert night.</p>
                </div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            </div>

          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p>© {new Date().getFullYear()} Bearded Dragon Educational Guide. Designed with carefully curated information.</p>
      </footer>
    </div>
  );
}
