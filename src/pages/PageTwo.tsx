import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, CalendarDays, ShoppingBag } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function PageTwo() {
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6">Daily Life & Logistics</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A deeper look into your new daily routine, maintenance tasks, and the exact supplies you'll need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Daily Routine Comparison */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <Clock className="w-8 h-8 text-gray-700" />
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900">A Day in the Life</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Beardie Routine */}
            <FadeIn delay={0.1}>
              <div className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100">
                <h3 className="text-2xl font-serif text-orange-900 mb-6 border-b border-orange-200 pb-4">Bearded Dragon Routine</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-orange-600 font-mono font-bold mt-1">08:00 AM</span>
                    <div>
                      <strong className="block text-gray-900">Lights On & Warm Up</strong>
                      <p className="text-gray-600 text-sm mt-1">Timer automatically turns on UVB and heat lamps. Dragon spends 1-2 hours basking to reach optimal operating temperature.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600 font-mono font-bold mt-1">10:00 AM</span>
                    <div>
                      <strong className="block text-gray-900">Breakfast (Salad Time)</strong>
                      <p className="text-gray-600 text-sm mt-1">Prepare and offer a fresh salad (collard/mustard greens). Check and refill water bowl. Spot clean any feces from the day before.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600 font-mono font-bold mt-1">02:00 PM</span>
                    <div>
                      <strong className="block text-gray-900">Protein & Interaction</strong>
                      <p className="text-gray-600 text-sm mt-1">Dust insects with calcium/vitamins and hand-feed or tong-feed. Let them roam outside the tank in a safe room for 30-45 minutes.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-600 font-mono font-bold mt-1">08:00 PM</span>
                    <div>
                      <strong className="block text-gray-900">Lights Out</strong>
                      <p className="text-gray-600 text-sm mt-1">All lights turn off. Dragon finds a comfortable spot to sleep. Ceramic Heat Emitter kicks on ONLY if room temp drops below 65°F.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Bunny Routine */}
            <FadeIn delay={0.2}>
              <div className="bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100">
                <h3 className="text-2xl font-serif text-emerald-900 mb-6 border-b border-emerald-200 pb-4">Rabbit Routine</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-emerald-600 font-mono font-bold mt-1">06:30 AM</span>
                    <div>
                      <strong className="block text-gray-900">Morning Zoomies & Breakfast</strong>
                      <p className="text-gray-600 text-sm mt-1">Rabbits are most active at dawn. Serve small portion of pellets and fresh greens. Refill massive hay rack and change water dish (not bottle!).</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-emerald-600 font-mono font-bold mt-1">11:00 AM</span>
                    <div>
                      <strong className="block text-gray-900">The Mid-Day Slump</strong>
                      <p className="text-gray-600 text-sm mt-1">They will typically "flop" (throw themselves on their side) and nap for several hours in a cool, dark spot. Do not disturb.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-emerald-600 font-mono font-bold mt-1">05:00 PM</span>
                    <div>
                      <strong className="block text-gray-900">Evening Activity & Bonding</strong>
                      <p className="text-gray-600 text-sm mt-1">They wake up ready to play. Time for training, petting on the floor, and free-roaming. Serve second portion of greens.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-emerald-600 font-mono font-bold mt-1">09:00 PM</span>
                    <div>
                      <strong className="block text-gray-900">Litter Box Chores</strong>
                      <p className="text-gray-600 text-sm mt-1">Clean/top-off litter box with fresh Aspen bedding and hay. Lock them in their large X-pen for the night to prevent chewing accidents.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Shopping Checklist */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 justify-center">
              <ShoppingBag className="w-8 h-8 text-gray-700" />
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900">The Ultimate Shopping List</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Beardie List */}
            <FadeIn delay={0.1}>
              <div className="p-8 border border-gray-200 rounded-3xl hover:border-orange-200 transition-colors bg-white shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-orange-500 w-5 h-5"/> Essential Dragon Gear
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">120 Gallon Reptile Enclosure</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Front opening glass or PVC (4'x2'x2'). Minimum size for an adult.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Zoo Med ReptiSun 10.0 Mini Compact Fluorescent Lamp (13 Watts)</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Mandatory for UVB. *Note: A linear T5 tube is generally preferred over compact bulbs to cover more area, but this compact works for smaller setups or supplementary zones.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Ceramic Heat Emitter (CHE)</strong>
                      <p className="text-sm text-gray-500 mt-0.5">The absolute best bulb for nighttime heat drops because it does not emit any visible light, ensuring they sleep soundly.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Dimming Thermostat</strong>
                      <p className="text-sm text-gray-500 mt-0.5">To prevent the heat lamps from burning the dragon.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Calcium (with & without D3) & Multivitamins</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Required powders to dust their live insects.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Bunny List */}
            <FadeIn delay={0.2}>
              <div className="p-8 border border-gray-200 rounded-3xl hover:border-emerald-200 transition-colors bg-white shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5"/> Essential Bunny Gear
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Large X-Pen (Dog Playpen)</strong>
                      <p className="text-sm text-gray-500 mt-0.5">36-inch or taller. Minimum 16 sq-ft area for their home base.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Kaytee Aspen Small Animal Pet Bedding</strong>
                      <p className="text-sm text-gray-500 mt-0.5">The best bedding for their litter boxes. Highly absorbent, dust-free to protect their lungs, and safe to ingest in tiny amounts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Large Cat Litter Box & Hay Feeder</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Placed together. Rabbits eat hay while they use the bathroom.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Cord Protectors & Wire Looms</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Mandatory to protect your chargers, TV wires, and lamps from being chewed.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-gray-800">Bulk Timothy Hay</strong>
                      <p className="text-sm text-gray-500 mt-0.5">Buy it by the bale (20-50 lbs) from farm stores to save massive amounts of money.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 mt-12 bg-white">
        <p>© {new Date().getFullYear()} Beardie vs Bunny Educational Guide. Designed with carefully curated information.</p>
      </footer>
    </div>
  );
}
