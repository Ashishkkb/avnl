import Image from "next/image";

const posts = {
  x: [
    {
      handle: "@AVNL_India",
      time: "2h",
      body:
        "AVNL participated in #NDIC2026 with a capability showcase of T-90 Bhishma Mk-III, BMP-II Sarath, and the Sharang 155mm gun system. Hon'ble RM Shri Rajnath Singh visited our stall.",
      img: "/images/rm-with-chiefs.jpg",
    },
    {
      handle: "@AVNL_India",
      time: "1d",
      body: "Under the aegis of DDP-MoD, AVNL launches the DRISHTI Challenge, 7 problem statements for DPSU–startup collaboration. #AtmaNirbharBharat #MakeInIndia",
    },
  ],
  youtube: [
    { title: "AVNL Corporate Film 2025, Avani Sarwa Pradisho Jayam", channel: "AVNL Official", thumb: "/images/t90-bhishma.jpg", duration: "3:42" },
    { title: "T-90 Bhishma Mk-III Handover Ceremony at HVF Avadi", channel: "AVNL Official", thumb: "/images/t90-side.jpg", duration: "5:18" },
  ],
  facebook: {
    img: "/images/republic-day.jpg",
    body:
      "Republic Day 2026: The T-90 Bhishma and BMP-II Sarath tableaux, manufactured at AVNL Avadi and Medak, rolled down Kartavya Path, paying tribute to our armed forces.",
    likes: "12.4K",
    comments: "1.1K",
  },
  instagram: [
    { caption: "Inside the BMP-II Sarath assembly line at OFMK Medak.", img: "/images/bridge-layer.jpg" },
    { caption: "Arjun Mk-1A field trials, composite armour with ERA panels.", img: "/images/arjun-mbt.jpg" },
  ],
};

export function SocialFeed() {
  return (
    <section className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-10 rounded-full bg-white/10 grid place-items-center text-[var(--color-saffron)] text-lg">●</span>
          <h2 className="text-2xl font-bold">In Social Media</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* X */}
          <div className="bg-white text-[#222] rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 text-sm font-semibold border-b border-[var(--color-rule)] flex items-center justify-between">
              <span>X</span>
              <span className="font-black text-base">𝕏</span>
            </div>
            <div className="p-4 space-y-3 flex-1 overflow-hidden">
              {posts.x.map((p, i) => (
                <article key={i} className="border-b border-[var(--color-rule)] pb-3 last:border-0">
                  <header className="flex items-start gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white grid place-items-center text-xs font-bold">AV</div>
                    <div className="text-xs">
                      <div className="font-semibold">AVNL Official</div>
                      <div className="text-[#666]">{p.handle} · {p.time}</div>
                    </div>
                    <button className="ml-auto text-[11px] text-[var(--color-navy)] font-semibold border border-[var(--color-navy)] px-2 py-0.5 rounded-full">Follow</button>
                  </header>
                  <p className="text-xs leading-relaxed text-[#333]">{p.body}</p>
                  {p.img && (
                    <div className="relative h-28 mt-2 rounded overflow-hidden">
                      <Image src={p.img} alt="" fill className="object-cover" />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* YouTube */}
          <div className="bg-white text-[#222] rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 text-sm font-semibold border-b border-[var(--color-rule)] flex items-center justify-between">
              <span>YouTube</span>
              <span className="text-[#FF0000] font-black text-base">▶</span>
            </div>
            <div className="p-3 space-y-3 flex-1">
              {posts.youtube.map((v) => (
                <article key={v.title} className="space-y-1.5">
                  <div className="relative h-32 rounded overflow-hidden bg-black">
                    <Image src={v.thumb} alt={v.title} fill className="object-cover" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="w-12 h-12 rounded-full bg-[#FF0000] text-white grid place-items-center text-xl">▶</div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">{v.duration}</div>
                  </div>
                  <h3 className="text-xs font-semibold line-clamp-2">{v.title}</h3>
                  <div className="text-[10px] text-[#666]">{v.channel}</div>
                </article>
              ))}
            </div>
          </div>

          {/* Facebook */}
          <div className="bg-white text-[#222] rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 text-sm font-semibold border-b border-[var(--color-rule)] flex items-center justify-between">
              <span>Facebook</span>
              <span className="text-[#1877F2] font-black text-base">f</span>
            </div>
            <div className="p-3 flex-1">
              <header className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white grid place-items-center text-xs font-bold">AV</div>
                <div className="text-xs">
                  <div className="font-semibold">AVNL India</div>
                  <div className="text-[#666]">Government Organisation</div>
                </div>
              </header>
              <div className="relative h-36 rounded overflow-hidden mb-2">
                <Image src={posts.facebook.img} alt="" fill className="object-cover" />
              </div>
              <p className="text-xs leading-relaxed">{posts.facebook.body}</p>
              <div className="flex gap-4 text-[11px] text-[#666] mt-2 border-t border-[var(--color-rule)] pt-2">
                <span>👍 {posts.facebook.likes}</span>
                <span>💬 {posts.facebook.comments}</span>
                <span className="ml-auto">↗ Share</span>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white text-[#222] rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 text-sm font-semibold border-b border-[var(--color-rule)] flex items-center justify-between">
              <span>Instagram</span>
              <span className="font-black text-base">◉</span>
            </div>
            <div className="p-3 flex-1">
              <header className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                  <div className="w-full h-full rounded-full bg-white grid place-items-center text-[10px] font-bold">AV</div>
                </div>
                <div className="text-xs">
                  <div className="font-semibold">avnl_official</div>
                  <div className="text-[#666]">7,131 followers</div>
                </div>
                <button className="ml-auto text-[11px] text-white bg-[#0095F6] px-2 py-0.5 rounded">Follow</button>
              </header>
              <div className="grid grid-cols-2 gap-1">
                {posts.instagram.map((p) => (
                  <div key={p.img} className="relative aspect-square rounded overflow-hidden">
                    <Image src={p.img} alt={p.caption} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[11px] mt-2 leading-snug">
                <span className="font-semibold">avnl_official</span> #AtmaNirbharBharat #MakeInIndia #AVNL, production milestones from across our five units.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
