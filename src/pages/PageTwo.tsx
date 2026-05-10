import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, MapPin, Bone, ThermometerSun, Leaf, Bug, Info, ArrowRight, Stethoscope, Search } from 'lucide-react';

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
                
                <div className="mb-6 pb-6 border-b border-gray-100 space-y-4">
                  <p className="text-gray-600">
                    <strong className="text-gray-900 block mb-1">Rule of thumb:</strong> Never feed an insect larger than the space between your dragon's eyes to prevent fatal impaction.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <strong className="text-orange-900 block mb-1">Feeding Babies (0-6 months)</strong>
                    <p className="text-sm text-orange-800">Babies require massive amounts of protein to grow rapidly. Feed them live appropriately-sized insects <strong>2 to 3 times per day</strong>. Allow them to eat as many bugs as they want within a 10-15 minute window (this often ranges from 30 to 80 tiny bugs a day).</p>
                  </div>
                </div>

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
                <p className="text-gray-600 mb-2">A typical schedule for an adult bearded dragon.</p>
                <div className="inline-block bg-orange-100 text-orange-800 text-sm px-4 py-2 rounded-full font-medium shadow-sm">
                  Note: Babies (0-6 months) need live insects 2-3 times daily!
                </div>
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

      {/* Health & Veterinary Care */}
      <section className="py-16 md:py-24 border-t border-gray-100 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="p-3 bg-white rounded-full shadow-sm">
                <Stethoscope className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Health & Veterinary Care</h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Reptiles hide illness incredibly well as a survival instinct. By the time a bearded dragon looks sick, they are often critically ill. A specialized exotics veterinarian is essential.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Finding the Right Vet</h3>
                </div>
                <p className="text-gray-600 mb-6">Standard dog and cat veterinarians rarely have the training required to treat reptiles. You need an Exotics Vet, specifically one with herpetological experience.</p>
                
                <h4 className="font-medium text-gray-900 mb-4">Where to Look:</h4>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">ARAV Directory</strong>
                      <p className="text-sm text-gray-500 mt-1">The Association of Reptilian and Amphibian Veterinarians (ARAV) provides a "Find a Vet" tool on their website, which is the gold standard.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900 block">Local Herpetological Societies</strong>
                      <p className="text-sm text-gray-500 mt-1">Reach out to local reptile rescues or clubs; they often maintain lists of trusted local specialists.</p>
                    </div>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-5 rounded-2xl border border-orange-200">
                  <h4 className="text-sm font-bold text-orange-900 mb-2">Find a Reptile Vet Near You</h4>
                  <p className="text-xs text-orange-800 mb-4">Use the official ARAV locator to find board-certified or experienced herpetological veterinarians in your area.</p>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.open('https://arav.site-ym.com/search/custom.asp?id=3661', '_blank');
                    }}
                    className="flex gap-2"
                  >
                    <input 
                      type="text" 
                      placeholder="Enter Zip Code" 
                      required
                      className="flex-1 w-full px-3 py-2 rounded-xl border border-orange-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap shadow-sm hover:shadow">
                      Search ARAV
                    </button>
                  </form>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Questions to Ask</h3>
                </div>
                <p className="text-gray-600 mb-6">When calling a new clinic, ask these questions to gauge their expertise with bearded dragons:</p>
                
                <ul className="space-y-4">
                  <li className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <strong className="text-gray-900 block text-sm mb-1">"Which doctor specializes in reptiles, and what is their background?"</strong>
                    <p className="text-sm text-gray-600 border-t border-orange-200/50 pt-2 mt-2">Look for board certification (ABVP) in Reptile and Amphibian Practice, or extensive continuing education in herpetology.</p>
                  </li>
                  <li className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <strong className="text-gray-900 block text-sm mb-1">"Do you perform routine reptile bloodwork and fecal parasite screenings in-house?"</strong>
                    <p className="text-sm text-gray-600 border-t border-orange-200/50 pt-2 mt-2">These are critical diagnostic tools for dragons, and sending them out delays treatment.</p>
                  </li>
                  <li className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                    <strong className="text-gray-900 block text-sm mb-1">"Do you have the equipment to safely anesthetize reptiles?"</strong>
                    <p className="text-sm text-gray-600 border-t border-orange-200/50 pt-2 mt-2">Reptile physiology is completely different. They require specialized intubation and ventilation.</p>
                  </li>
                </ul>
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
              <div className="p-3 bg-orange-50 rounded-full shadow-sm">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 text-center">Montgomery County, MD Resources</h2>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              A curated list of specialized exotic veterinarians and reputable reptile supply stores in and around the Montgomery County area (within a ~25-mile radius).
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vets */}
            <FadeIn delay={0.1}>
              <div className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Specialized Exotics Vets</h3>
                </div>
                <ul className="space-y-6">
                  <li>
                    <strong className="text-gray-900 block">Quince Orchard Veterinary Hospital</strong>
                    <span className="text-sm text-gray-500 block mb-1">Gaithersburg, MD</span>
                    <p className="text-sm text-gray-600">Highly regarded in Montgomery County for their dedicated exotic animal care team, treating reptiles of all sizes.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Maryland Avian & Exotics Veterinary Care</strong>
                    <span className="text-sm text-gray-500 block mb-1">Rockville, MD</span>
                    <p className="text-sm text-gray-600">Located right in the heart of MoCo, offering dedicated board-certified care for companion exotics including reptiles.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Stahl Exotic Animal Veterinary Services (SEAVS)</strong>
                    <span className="text-sm text-gray-500 block mb-1">Fairfax, VA (~25 miles)</span>
                    <p className="text-sm text-gray-600">One of the premier exclusive exotics-only animal hospitals in the Mid-Atlantic. Worth the drive for specialized surgeries.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Pet Stores */}
            <FadeIn delay={0.2}>
              <div className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-serif text-gray-900">Reptile Stores & Supplies</h3>
                </div>
                <ul className="space-y-6">
                  <li>
                    <strong className="text-gray-900 block">Mid-Atlantic Reptile Rescue</strong>
                    <span className="text-sm text-gray-500 block mb-1">Fosters throughout MD</span>
                    <p className="text-sm text-gray-600 block mb-2">Instead of buying from a big-box store, consider adopting! They frequently rescue bearded dragons in the DMV area that need loving homes.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">House of Tropicals</strong>
                    <span className="text-sm text-gray-500 block mb-1">Glen Burnie, MD (~25 miles)</span>
                    <p className="text-sm text-gray-600">A massive legacy store with dedicated reptile staff. Excellent for picking up custom tanks, cork bark, and live feeders.</p>
                  </li>
                  <li>
                    <strong className="text-gray-900 block">Wild Exotics Pet Store</strong>
                    <span className="text-sm text-gray-500 block mb-1">Local Delivery & Expos</span>
                    <p className="text-sm text-gray-600">A local favorite for sourcing healthy insects, specialized lighting, and captive-bred reptiles near the Maryland area.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p>© {new Date().getFullYear()} Bearded Dragon Educational Guide. Designed with carefully curated information.</p>
      </footer>
    </div>
  );
}
