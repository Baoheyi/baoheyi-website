 "use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, ShoppingBag, Flame, ChevronRight } from "lucide-react";

const menu = [
  { name: "Cucumber Prawn Dumpling", cn: "青瓜虾仁", price: "RM10.80 / 6pcs", tag: "Signature" },
  { name: "Prawn Dumpling", cn: "虾仁", price: "RM11.80 / 6pcs", tag: "Juicy" },
  { name: "Pork Cabbage Dumpling", cn: "鲜肉白菜", price: "RM8.80 / 6pcs", tag: "Top Seller" },
  { name: "Pork Chive Dumpling", cn: "鲜肉韭菜", price: "RM8.80 / 6pcs", tag: "Classic" },
  { name: "Chicken Mushroom", cn: "香菇鸡肉", price: "RM8.80 / 6pcs", tag: "Light" },
  { name: "Triple Delight", cn: "三鲜", price: "RM8.80 / 6pcs", tag: "Rich" },
];

const sets = [
  { name: "Super Set", desc: "Mini scallion noodle + boiled dumplings", price: "RM15.90" },
  { name: "Syok Syok Cutlet Chicken Scallion Noodle", desc: "Crispy cutlet, fragrant scallion noodle", price: "RM16.90" },
  { name: "Stew Pork Rice", desc: "Comfort rice bowl with rich stew pork", price: "RM18.90" },
  { name: "Curry Cutlet Chicken Rice", desc: "Golden cutlet with warm curry sauce", price: "RM18.90" },
];

const drinks = ["Magic Lemonade", "Insanity Lemonade", "Teh Ice", "Thai Milk Tea", "Latte", "Americano"];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fff7ed] text-[#222222]">
      <header className="sticky top-0 z-50 border-b border-red-100 bg-[#fff7ed]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d3001b] text-xl font-black text-white shadow-lg">包</div>
            <div>
              <div className="text-xl font-black tracking-[0.18em] text-[#d3001b]">BAOHEYI</div>
              <div className="text-xs font-semibold tracking-[0.2em] text-[#7a2a1a]">DUMPLING HOUSE</div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-bold md:flex">
            <a href="#menu">Menu</a>
            <a href="#frozen">Frozen Dumplings</a>
            <a href="#visit">Visit Us</a>
          </nav>
          <a href="#visit" className="rounded-full bg-[#d3001b] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:scale-105">Order / Visit</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#ffd34e_0,transparent_32%),radial-gradient(circle_at_80%_0,#ffb199_0,transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#d3001b] shadow-sm">
              <Flame size={18} /> Fresh Handmade Dumplings
            </div>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Juicy dumplings.<br />Warm community.<br />Everyday comfort.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#5f4038]">
              Baoheyi Dumpling House serves freshly made dumplings, scallion noodles, rice bowls, chicken soup and refreshing drinks in Damansara Perdana.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-[#d3001b] px-7 py-4 font-black text-white shadow-xl">View Menu <ChevronRight size={18} /></a>
              <a href="#frozen" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#d3001b] shadow-xl">Frozen Packs</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-[3rem] bg-[#d3001b] p-8 shadow-2xl">
              <div className="rounded-[2.5rem] bg-white p-6 text-center shadow-inner">
                <div className="mx-auto mb-8 h-32 w-72 rounded-[50%] bg-[#fff2d8] shadow-inner" />
                <div className="mx-auto grid max-w-sm grid-cols-3 gap-3">
                  {[1,2,3,4,5,6].map((i) => <div key={i} className="h-16 rounded-[50%] bg-[#f6e4c8] shadow-md" />)}
                </div>
                <div className="mt-8 text-3xl font-black text-[#d3001b]">6pcs · 10pcs · 15pcs</div>
                <p className="mt-2 font-bold text-[#7a2a1a]">Boiled or Fried · Green or Red Sauce</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["现包灌汤", "Fresh, juicy dumplings"],
            ["小店高性价比", "Good food, fair price"],
            ["冷冻饺子", "Take home packs available"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-7 shadow-lg">
              <Star className="mb-4 text-[#d3001b]" />
              <h3 className="text-2xl font-black text-[#d3001b]">{title}</h3>
              <p className="mt-2 font-semibold text-[#5f4038]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#d3001b]">Menu</p>
              <h2 className="mt-2 text-4xl font-black md:text-5xl">Dumplings first. Comfort food always.</h2>
            </div>
            <p className="max-w-md font-medium text-[#5f4038]">Best for lunch, dinner, quick takeaway, family sharing and everyday community meals.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-[#fff7ed] p-6 shadow-lg">
              <h3 className="mb-5 text-3xl font-black text-[#d3001b]">Dumplings 饺子</h3>
              <div className="space-y-4">
                {menu.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div>
                      <div className="font-black">{item.name}</div>
                      <div className="text-sm font-bold text-[#7a2a1a]">{item.cn}</div>
                    </div>
                    <div className="text-right">
                      <div className="rounded-full bg-[#ffd34e] px-3 py-1 text-xs font-black">{item.tag}</div>
                      <div className="mt-2 font-black text-[#d3001b]">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#222222] p-6 text-white shadow-lg">
              <h3 className="mb-5 text-3xl font-black text-[#ffd34e]">Set Menu 镇店套餐</h3>
              <div className="space-y-4">
                {sets.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <div className="flex justify-between gap-4">
                      <div className="text-xl font-black">{item.name}</div>
                      <div className="font-black text-[#ffd34e]">{item.price}</div>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-white/75">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-[#d3001b] p-5">
                <div className="font-black">All sets come with</div>
                <div className="mt-1 text-2xl font-black">Papadam + Magic Lemonade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="frozen" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div className="rounded-[3rem] bg-[#d3001b] p-8 text-white shadow-2xl">
          <ShoppingBag size={48} />
          <h2 className="mt-6 text-4xl font-black md:text-5xl">Fresh Frozen Dumplings Available</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-white/90">Take home Baoheyi dumplings. Easy to cook, juicy, and ready in 5 minutes.</p>
          <div className="mt-8 rounded-3xl bg-white p-6 text-[#222222]">
            <h3 className="text-2xl font-black text-[#d3001b]">Cooking in 5 minutes</h3>
            <ol className="mt-4 space-y-3 font-bold">
              <li>1. Bring water to a rolling boil.</li>
              <li>2. Add frozen dumplings. Do not thaw.</li>
              <li>3. Cook on medium rolling boil for 5 minutes.</li>
            </ol>
          </div>
        </div>
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-[#d3001b]">Drinks</p>
          <h2 className="mt-2 text-4xl font-black">Pair your dumplings with something refreshing.</h2>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {drinks.map((drink) => <div key={drink} className="rounded-2xl bg-white p-5 font-black shadow-md">{drink}</div>)}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#222222] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#ffd34e]">Visit Us</p>
            <h2 className="mt-2 text-4xl font-black md:text-5xl">Baoheyi Dumpling House</h2>
            <div className="mt-8 space-y-5 text-lg font-semibold text-white/85">
              <p className="flex gap-3"><MapPin className="shrink-0 text-[#ffd34e]" /> 20-1, Jalan PJU 8/3A, Damansara Perdana, 47820 Petaling Jaya, Selangor.</p>
              <p className="flex gap-3"><Clock className="shrink-0 text-[#ffd34e]" /> Mon–Fri 8am–8pm · Sat 9am–5pm · Sun 9am–7pm</p>
              <p className="flex gap-3"><Phone className="shrink-0 text-[#ffd34e]" /> Call or WhatsApp to order takeaway.</p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 text-[#222222] shadow-2xl">
            <h3 className="text-3xl font-black text-[#d3001b]">Good for</h3>
            <div className="mt-5 grid gap-3 text-lg font-black">
              <div className="rounded-2xl bg-[#fff7ed] p-4">Office lunch</div>
              <div className="rounded-2xl bg-[#fff7ed] p-4">Family dinner</div>
              <div className="rounded-2xl bg-[#fff7ed] p-4">Quick takeaway</div>
              <div className="rounded-2xl bg-[#fff7ed] p-4">Frozen dumpling retail</div>
            </div>
            <a href="https://maps.google.com/?q=20-1,+Jalan+PJU+8/3A,+Damansara+Perdana" className="mt-6 block rounded-full bg-[#d3001b] px-6 py-4 text-center font-black text-white">Open Google Maps</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#d3001b] px-5 py-8 text-center font-black tracking-[0.2em] text-white">
        BAOHEYI 包含意 · DUMPLING HOUSE
      </footer>
    </div>
  );
}
