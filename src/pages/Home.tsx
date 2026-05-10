import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartPulse, 
  Utensils, 
  Activity, 
  Scale, 
  Syringe, 
  ThermometerSun, 
  Rabbit, 
  AlertTriangle,
  Info,
  BarChart3,
  Heart
} from 'lucide-react';

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

const ComparisonSection = ({ 
  title, 
  icon: Icon, 
  beardieContent, 
  bunnyContent,
}: { 
  title: string, 
  icon: any, 
  beardieContent: React.ReactNode, 
  bunnyContent: React.ReactNode,
}) => {
  return (
    <section className="py-20 md:py-32 border-b border-gray-100 last:border-0 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-5 mb-16 md:mb-20 text-center">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-gray-500">
              <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">{title}</h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bearded Dragon Column */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-orange-50/40 rounded-[2.5rem] p-8 md:p-12 h-full border border-orange-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-orange-200/50">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-orange-100 text-orange-600">
                  <ThermometerSun className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif text-orange-950">Bearded Dragon</h3>
              </div>
              <div className="prose prose-orange text-gray-600 prose-headings:font-serif prose-headings:text-orange-950 prose-strong:text-orange-900 leading-relaxed text-lg">
                {beardieContent}
              </div>
            </div>
          </FadeIn>
          
          {/* Rabbit Column */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-emerald-50/40 rounded-[2.5rem] p-8 md:p-12 h-full border border-emerald-100/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-emerald-200/50">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-emerald-100 text-emerald-600">
                  <Rabbit className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-serif text-emerald-950">Rabbit</h3>
              </div>
              <div className="prose prose-emerald text-gray-600 prose-headings:font-serif prose-headings:text-emerald-950 prose-strong:text-emerald-900 leading-relaxed text-lg">
                {bunnyContent}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const VisualComparisonBar = ({ 
  title, 
  beardieValue, 
  bunnyValue, 
  beardieLabel, 
  bunnyLabel, 
  max 
}: { 
  title: string, 
  beardieValue: number, 
  bunnyValue: number, 
  beardieLabel: string, 
  bunnyLabel: string, 
  max: number 
}) => {
  const beardiePercent = Math.min((beardieValue / max) * 100, 100);
  const bunnyPercent = Math.min((bunnyValue / max) * 100, 100);
  
  return (
    <div className="mb-12 last:mb-0">
      <h4 className="text-lg font-serif font-medium text-gray-900 mb-5">{title}</h4>
      
      <div className="space-y-4">
        {/* Beardie Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="w-full sm:w-32 text-sm font-medium text-orange-950 flex items-center gap-2">
            <ThermometerSun className="w-4 h-4 text-orange-500" /> Beardie
          </div>
          <div className="flex-1 h-6 bg-orange-100/50 rounded-full overflow-hidden relative border border-orange-100">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${beardiePercent}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <div className="w-full sm:w-40 text-left sm:text-right text-sm text-gray-600 font-medium">
            {beardieLabel}
          </div>
        </div>
        
        {/* Bunny Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="w-full sm:w-32 text-sm font-medium text-emerald-950 flex items-center gap-2">
            <Rabbit className="w-4 h-4 text-emerald-500" /> Bunny
          </div>
          <div className="flex-1 h-6 bg-emerald-100/50 rounded-full overflow-hidden relative border border-emerald-100">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${bunnyPercent}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="w-full sm:w-40 text-left sm:text-right text-sm text-gray-600 font-medium">
            {bunnyLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-emerald-50 opacity-70" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-8 tracking-wide">
              <Scale className="w-4 h-4" /> Comprehensive Pet Guide
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 tracking-tight leading-tight mb-8">
              Scales <span className="font-sans font-light italic text-gray-400 mx-2 text-4xl md:text-6xl">vs</span> Fluff
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
              Choosing between a Bearded Dragon and a Rabbit is a 10+ year commitment. While both make incredible companions, their daily needs, veterinary requirements, and home setups are worlds apart.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Lifespan & Basics */}
      <ComparisonSection
        title="The Commitment"
        icon={Info}
        beardieContent={
          <>
            <h4 className="text-xl font-medium text-gray-900 mt-0 mb-4">The Desert Native</h4>
            <p>
              Bearded dragons (<em>Pogona vitticeps</em>) are solitary reptiles native to Australia. They are generally celebrated as one of the best beginner reptiles due to their docile nature and hardiness, though their environmental needs are strict.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Lifespan:</strong>
                <span>10 to 15 years with proper care.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Social:</strong>
                <span>Strictly solitary. Adding a second dragon often leads to territorial fights or stress.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Nature:</strong>
                <span>Diurnal (awake during the day). Often content to bask for hours, but enjoy watching household activity.</span>
              </li>
            </ul>
          </>
        }
        bunnyContent={
          <>
            <h4 className="text-xl font-medium text-gray-900 mt-0 mb-4">The Fluffy Prey Animal</h4>
            <p>
              Domestic rabbits (<em>Oryctolagus cuniculus domesticus</em>) are crepuscular lagomorphs. They are highly intelligent, deeply emotional, and surprisingly fragile. They are not starter pets and require care comparable to a dog or cat.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Lifespan:</strong>
                <span>8 to 12+ years. Indoor, properly cared-for bunnies live long lives.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Social:</strong>
                <span>Highly social. Rabbits bond deeply and generally thrive best in bonded pairs to prevent depression.</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-gray-900 min-w-24">Nature:</strong>
                <span>Crepuscular (most active at dawn and dusk). Require significant social interaction and mental stimulation.</span>
              </li>
            </ul>
          </>
        }
      />

      {/* Diet */}
      <ComparisonSection
        title="Dietary Needs"
        icon={Utensils}
        beardieContent={
          <>
            <p>
              Bearded dragons are omnivores whose diet completely shifts as they age. Preparing their food requires handling live insects and maintaining a schedule for vitamin dusting.
            </p>
            <div className="bg-orange-100/50 p-6 rounded-xl my-6">
              <h5 className="font-semibold text-orange-900 mb-3 text-lg">The Age Shift</h5>
              <ul className="space-y-2 text-orange-800 list-disc pl-4 italic">
                <li><strong>Babies/Juveniles:</strong> 80% live insects / 20% vegetables. (Need vast amounts of protein for rapid growth).</li>
                <li><strong>Adults:</strong> 20% live insects / 80% vegetables. (Too much protein causes obesity and organ failure).</li>
              </ul>
            </div>
            <h5 className="font-semibold text-lg text-gray-900 mt-6 relative pl-4 border-l-2 border-orange-300">Staple Insects</h5>
            <p>Dubia roaches, crickets, and black soldier fly larvae. Insects must be "gut-loaded" (fed nutritious food before being fed to the dragon) and dusted with Calcium (with & without D3) and Multivitamins on a strict weekly schedule.</p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 relative pl-4 border-l-2 border-orange-300">Daily Salads</h5>
            <p>Collard greens, mustard greens, turnip greens, and dandelion greens are staples. <strong>Avoid</strong> spinach (binds calcium) and iceberg lettuce (zero nutrition, causes diarrhea).</p>
          </>
        }
        bunnyContent={
          <>
            <p>
              Rabbits are strict herbivores with a highly specialized, constantly moving digestive tract. Their diet is simple in theory, but deviations can be instantly fatal.
            </p>
            <div className="bg-emerald-100/50 p-6 rounded-xl my-6">
              <h5 className="font-semibold text-emerald-900 mb-3 text-lg">The Golden Ratio</h5>
              <ul className="space-y-2 text-emerald-800 list-disc pl-4 italic">
                <li><strong>80% Grass Hay:</strong> Unlimited access. (Timothy or Orchard grass).</li>
                <li><strong>10% Fresh Greens:</strong> Romaine, cilantro, parsley, spring mix.</li>
                <li><strong>5% High-Quality Pellets:</strong> Timothy-based, plain pellets (no seeds or colorful bits).</li>
                <li><strong>5% Treats (Infrequent):</strong> Tiny pieces of fruit or carrot.</li>
              </ul>
            </div>
            <h5 className="font-semibold text-lg text-gray-900 mt-6 relative pl-4 border-l-2 border-emerald-300">The Power of Hay</h5>
            <p>Hay isn't just food; it's the engine of their survival. Long, fibrous strands push hair and food through their complex gut, preventing life-threatening blockages. It also acts as sandpaper to grind down their teeth, which never stop growing.</p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 relative pl-4 border-l-2 border-emerald-300">Cecotropes</h5>
            <p>Rabbits produce and eat special, nutrient-rich droppings called cecotropes directly from their rear. This is a normal, vital part of their digestion to extract B vitamins and proteins.</p>
          </>
        }
      />

      {/* Exercise and Space */}
      <ComparisonSection
        title="Space & Exercise"
        icon={Activity}
        beardieContent={
          <>
            <p>
              While heavily dependent on their enclosure for survival, a bearded dragon's spatial needs are still significant, mainly focused on creating a perfect micro-climate.
            </p>
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">The Enclosure Minimum</h5>
            <p>An adult needs an absolute minimum enclosure size of <strong>120 gallons (4ft x 2ft x 2ft)</strong>. They are semi-arboreal, meaning they need robust branches to climb and a dedicated, hot basking zone.</p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Environmental Controls & Gear (Crucial)</h5>
            <ul className="list-disc pl-4 space-y-2">
              <li><strong>Basking Spot:</strong> For heat, a <strong>Ceramic Heat Emitter (CHE)</strong> is often recommended as the best heat bulb when paired with a dimming thermostat, especially because it doesn't emit light (perfect for nighttime drops) while keeping the ambient temp correct.</li>
              <li><strong>Cool Side:</strong> 75°F - 80°F for thermoregulation.</li>
              <li><strong>UVB Lighting:</strong> A <strong>Zoo Med ReptiSun 10.0 Mini Compact Fluorescent Lamp (13 Watts)</strong> is frequently requested and widely accessible for UVB provision, though placement is critical to ensure your dragon receives proper exposure safely to metabolize calcium.</li>
            </ul>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Out-of-Tank Exercise</h5>
            <p>They enjoy exploring a supervised, warm room. However, without their heat and UVB lamps, they will "cool down" and become lethargic. An hour of safe roaming is excellent enrichment.</p>
          </>
        }
        bunnyContent={
          <>
            <p>
              The biggest myth about rabbits is that they belong in cages. <strong>Rabbits are not cage animals.</strong> Their space and physical needs rival those of a medium-sized dog.
            </p>
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Free-Roaming, X-Pens & Bedding</h5>
            <p>Instead of cages, indoor rabbits should live in large exercise pens (dog playpens) or be completely free-roam in bunny-proofed rooms. They need enough space to perform a "binky" (a joyful leap and twist in the air) and run at full speed.</p>
            <p className="mt-2">For their litter boxes or designated digging areas, <strong>Kaytee Aspen Small Animal Pet Bedding</strong> is widely regarded as the best bed for rabbits because it is safe, highly absorbent, and unlike pine or cedar, does not contain harmful aromatic oils that can damage a rabbit's respiratory system.</p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Bunny Proofing</h5>
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 p-4 rounded-lg my-4 flex gap-3 text-sm">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p>Rabbits chew natively to explore and wear down teeth. You MUST protect baseboards, hide all electrical cords (which they view as spicy tree roots), and protect house plants.</p>
            </div>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Enrichment Needs</h5>
            <p>Minimum <strong>4 hours</strong> of active out-of-pen exercise per day. They need digging boxes, untreated wood to destroy, tunnels to hide in, and puzzle toys to mimic foraging.</p>
          </>
        }
      />

      {/* Health & Vet Care */}
      <ComparisonSection
        title="Health & Veterinary Care"
        icon={Syringe}
        beardieContent={
          <>
            <p>
              Reptiles hide illness phenomenally well as a survival instinct. By the time a bearded dragon looks sick, they are often critically ill. Both pets require an <strong>Exotics Veterinarian</strong>, which is more expensive than standard dog/cat vets.
            </p>
            
            <h5 className="text-xl font-serif text-gray-900 mt-8 mb-4 border-b pb-2">Common Health Issues</h5>
            
            <div className="space-y-6">
              <div>
                <strong className="block text-gray-900 mb-1">Metabolic Bone Disease (MBD)</strong>
                <p>The most common and preventable tragedy. Caused by a lack of UVB lighting, calcium, or incorrect temperatures. The dragon's body leaches calcium from its own bones to survive, leading to permanent deformities, rubber jaw, paralysis, and death. <em className="text-sm block mt-1 text-gray-500">*UVB bulbs must be replaced every 6 months, even if they still emit visible light, as the invisible UV output decays!</em></p>
              </div>
              
              <div>
                <strong className="block text-gray-900 mb-1">Impaction</strong>
                <p>A fatal blockage in the digestive tract. Often caused by feeding insects larger than the space between the dragon's eyes, low basking temperatures (preventing digestion), or eating loose substrate (like calcisand or walnut shells).</p>
              </div>

              <div>
                <strong className="block text-gray-900 mb-1">Atadenovirus (ADV)</strong>
                <p>Also known as "stargazing" or wasting disease. A highly contagious, incurable virus that affects the liver and nervous system, leading to failure to thrive.</p>
              </div>
            </div>
            
            <p className="mt-8 text-sm italic text-gray-500">
              * Fecal exams should be done annually to check for parasitic blooms like Coccidia or Pinworms.
            </p>
          </>
        }
        bunnyContent={
          <>
            <p>
              Rabbits are incredibly delicate physically and gastrointestinally. They possess skeletons so light compared to their muscle mass that a panicked kick can easily break their own spine if held incorrectly.
            </p>

            <h5 className="text-xl font-serif text-gray-900 mt-8 mb-4 border-b pb-2">Common Health Issues</h5>
            
            <div className="space-y-6">
              <div>
                <strong className="block text-red-700 mb-1 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" /> GI Stasis (The Silent Killer)
                </strong>
                <p>If a rabbit stops eating or pooping for even <strong>12 hours</strong>, it is a medical emergency. The gut shuts down, gas builds up agonizingly, and they can die quickly. Requires immediate veterinary intervention, gut motility drugs, and syringe feeding.</p>
              </div>
              
              <div>
                <strong className="block text-gray-900 mb-1">Dental Malocclusion</strong>
                <p>Because their teeth grow continuously, lack of hay or genetic defects can cause teeth to grow into the cheeks, tongue, or up into the eye sockets. Requires surgical filing under anesthesia.</p>
              </div>

              <div>
                <strong className="block text-gray-900 mb-1">Uterine Adenocarcinoma</strong>
                <p>Up to <strong>80% of unspayed female rabbits</strong> will develop fatal uterine cancer by age 3-4. <em>Spaying and neutering are absolutely mandatory</em> for their health, longevity, and to prevent aggressive hormonal behaviors.</p>
              </div>

              <div>
                <strong className="block text-gray-900 mb-1">RHDV2 Virus</strong>
                <p>A highly contagious, fatal hemorrhagic virus. In many regions, annual vaccination is strictly required to keep your rabbit safe.</p>
              </div>
            </div>
          </>
        }
      />

      {/* Beginner Friendliness & Affection */}
      <ComparisonSection
        title="Bonding & Beginner Friendliness"
        icon={Heart}
        beardieContent={
          <>
            <p>
              Bearded dragons are almost universally considered one of the <strong>best reptiles for beginners</strong>. 
            </p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Beginner Suitability: High</h5>
            <p>Once their upfront enclosure (lights, heat, tank) is set up correctly, they are incredibly hardy. They don't require the constant attention, exercise, or house-proofing that mammals do. For a beginner willing to learn about lighting and handle bugs, they are very forgiving.</p>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Capacity for Affection</h5>
            <p>While reptiles don't feel "love" the way mammals do, bearded dragons bond through <strong>trust and association</strong>. They learn to recognize your voice, associate you with food and safety, and will happily fall asleep on your chest while you watch TV. They are calm, handleable, and deeply rewarding, even if their affection is expressed as "lack of fear."</p>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Training & Positive Reinforcement</h5>
            <ul className="space-y-3 mt-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <span><strong>Hand-Feeding:</strong> The absolute best way to build trust. Offer favorite greens or bugs using feeding tongs or your fingers. This associates your hand with a positive reward.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <span><strong>Front-Opening Enclosures:</strong> Always approach a dragon from the front or side. In nature, predators (birds) come from above. Reaching down from the top of a tank triggers their survival "flight" instinct.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <span><strong>Target Training:</strong> Similar to dog training, some dragons can learn to touch a colored stick or ball (the target) to receive a bug. Provides excellent mental stimulation.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <span><strong>Slow Handling:</strong> Scoop them gently from underneath, always supporting all four feet and their tail base so they feel secure, never dangling.</span>
              </li>
            </ul>
          </>
        }
        bunnyContent={
          <>
            <p>
              Despite what pet stores advertise, rabbits are <strong>not recommended as beginner pets</strong> or "starter pets" for children due to their immense fragility and complex needs.
            </p>
            
            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Beginner Suitability: Low</h5>
            <p>Their GI tract can shut down from stress or a slight change in diet. They hate being picked up (triggering their prey instinct) and require specialized vet care and massive time commitments.</p>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Capacity for Affection</h5>
            <p>If you put in the work to build trust on the floor at their level, a rabbit can bond with you as deeply as a dog. They show immense affection! They will follow you from room to room, gently nudge you for pets, "tooth purr" when happy, and groom your face or hands. The bond you can forge with a rabbit is profoundly emotional and interactive.</p>

            <h5 className="font-semibold text-lg text-gray-900 mt-6 mb-2">Training & Positive Reinforcement</h5>
            <ul className="space-y-3 mt-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span><strong>Floor Time:</strong> The #1 rule for bonding with a rabbit is getting on their level. Lie on the floor reading a book and let them come to you. Don't force interactions.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span><strong>Clicker Training:</strong> Extremely effective! Rabbits are highly intelligent. Use a clicker and tiny portions of a healthy treat (like a sliver of banana or a single oat) to train them to "spin," "high five," or come when called.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span><strong>Litter Box Training:</strong> Exploit their natural instinct to eat while they poop. Place their hay rack directly over their litter box. When they hop in to eat hay, they will naturally use the box.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span><strong>The "Petting Sweet Spot":</strong> Rabbits love being firmly stroked on the forehead, between the ears, and down the back. Never approach them from underneath the chin (like a dog) as they have a blind spot there.</span>
              </li>
            </ul>
          </>
        }
      />

      {/* Visual Comparison Chart */}
      <section className="py-20 md:py-32 border-b border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-5 mb-16 md:mb-20 text-center">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-gray-500">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">By The Numbers</h2>
            </div>
            
            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20">
              <VisualComparisonBar 
                title="Lifespan"
                beardieValue={15}
                bunnyValue={12}
                beardieLabel="10 - 15 years"
                bunnyLabel="8 - 12+ years"
                max={15}
              />
              <VisualComparisonBar 
                title="Minimum Space Needed"
                beardieValue={8}
                bunnyValue={32}
                beardieLabel="8 sq. ft. (120 gal)"
                bunnyLabel="32+ sq. ft. (Free Roam)"
                max={40}
              />
              <VisualComparisonBar 
                title="Daily Active Commitment"
                beardieValue={1}
                bunnyValue={4}
                beardieLabel="~ 1 hour"
                bunnyLabel="4+ hours"
                max={6}
              />
            </div>

            <div className="bg-white p-8 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/20 mt-8">
              <h3 className="text-3xl font-serif text-gray-900 mb-8 text-center tracking-tight">Initial Setup Cost Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Beardie Costs */}
                <div>
                  <div className="flex items-center gap-4 mb-6 bg-orange-50/50 p-5 rounded-[1.5rem] border border-orange-100">
                    <div className="bg-white p-2.5 rounded-xl text-orange-600 shadow-sm border border-orange-100">
                      <ThermometerSun className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-orange-950">Bearded Dragon</h4>
                  </div>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Enclosure (120 Gallon / 4x2x2)</span><span className="font-medium text-gray-900">$250 - $400</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>UVB Lighting (T5 Hood + Bulb)</span><span className="font-medium text-gray-900">$70 - $90</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Heating (Lamps, CHE, Thermostats)</span><span className="font-medium text-gray-900">$60 - $120</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Substrate (Tiles, liner)</span><span className="font-medium text-gray-900">$20 - $40</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Initial Food (Insects, greens)</span><span className="font-medium text-gray-900">$30 - $60</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Accessories (Hides, temp guns)</span><span className="font-medium text-gray-900">$70 - $120</span></li>
                    <li className="flex justify-between pt-3 text-base">
                      <strong className="text-gray-900">Estimated Total</strong>
                      <strong className="text-orange-600 tracking-tight">~$500 - $830+</strong>
                    </li>
                  </ul>
                </div>

                {/* Bunny Costs */}
                <div>
                  <div className="flex items-center gap-4 mb-6 bg-emerald-50/50 p-5 rounded-[1.5rem] border border-emerald-100">
                    <div className="bg-white p-2.5 rounded-xl text-emerald-600 shadow-sm border border-emerald-100">
                      <Rabbit className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-emerald-950">Rabbit</h4>
                  </div>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Enclosure (X-Pen Home Base)</span><span className="font-medium text-gray-900">$40 - $80</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Litter Box & Safe Bedding</span><span className="font-medium text-gray-900">$30 - $50</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Spay / Neuter Surgery (Varies)</span><span className="font-medium text-gray-900">$150 - $400</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Initial Food (Hay, pellets, bowls)</span><span className="font-medium text-gray-900">$50 - $80</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Accessories (Toys, grooming)</span><span className="font-medium text-gray-900">$40 - $90</span></li>
                    <li className="flex justify-between border-b border-gray-50 pb-3"><span>Bunny Proofing (Cord covers)</span><span className="font-medium text-gray-900">$30 - $70</span></li>
                    <li className="flex justify-between pt-3 text-base">
                      <strong className="text-gray-900">Estimated Total</strong>
                      <strong className="text-emerald-600 tracking-tight">~$340 - $770+</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pros & Cons Summary */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col items-center gap-5 mb-16 md:mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">Summary: The Final Verdict</h2>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Beardie Summary */}
            <FadeIn delay={0.1} className="flex flex-col gap-8">
              <div className="p-8 md:p-10 bg-white rounded-[2.5rem] shadow-sm border border-orange-100 flex-1">
                <h3 className="text-2xl font-serif text-orange-950 mb-8 flex items-center gap-4 border-b border-orange-100 pb-5">
                  <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl"><ThermometerSun className="w-6 h-6" /></div>
                  Bearded Dragon Pros
                </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Incredibly docile and tolerant of handling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Quiet, with no shedding of fur (hypoallergenic).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Can be left alone during the day; they enjoy basking in their habitat without needing constant emotional validation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Fascinating behaviors and distinct personalities.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 md:p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-200/60 flex-1">
                  <h3 className="text-2xl font-serif text-gray-900 mb-8 flex items-center gap-4 border-b border-gray-100 pb-5">
                     Bearded Dragon Cons
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">High initial setup cost ($500+ for proper 120gal tank, T5 UVB, and thermostats).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">You must be comfortable keeping, handling, and feeding live insects (roaches/crickets) in your home.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Specific environmental parameters require daily monitoring. Mistakes in lighting are fatal over time.</span>
                    </li>
                  </ul>
                </div>
            </FadeIn>

            {/* Bunny Summary */}
            <FadeIn delay={0.2} className="flex flex-col gap-8">
              <div className="p-8 md:p-10 bg-white rounded-[2.5rem] shadow-sm border border-emerald-100 flex-1">
                <h3 className="text-2xl font-serif text-emerald-950 mb-8 flex items-center gap-4 border-b border-emerald-100 pb-5">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl"><Rabbit className="w-6 h-6" /></div>
                  Rabbit Pros
                </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Deeply affectionate; they will groom you, purr (tooth purring), and follow you around.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Can be easily litter box trained, just like a cat.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Vegan diet; no dealing with raw meat or live insects.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Incredibly playful, fun to watch them "binky" and do "zoomies" around the house.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 md:p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-200/60 flex-1">
                  <h3 className="text-2xl font-serif text-gray-900 mb-8 flex items-center gap-4 border-b border-gray-100 pb-5">
                     Rabbit Cons
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Highly destructive if not supervised or if property is not bunny-proofed (cords, baseboards, carpets).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Extreme medical fragility; veterinary bills can be steep, and emergencies arise quickly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Require massive amounts of free space. Do not belong in pet-store cages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0" />
                      <span className="text-gray-700">Cannot be picked up easily; as prey animals, being lifted triggers terror and fighting instincts.</span>
                    </li>
                  </ul>
                </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
