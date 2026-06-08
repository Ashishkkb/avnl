import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Video Gallery | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Media"
      title="Video Gallery"
      subtitle="Production walkthroughs, capability demonstrations and corporate films."
      crumbs={[{ label: "Media" }, { label: "Videos" }]}
      description={
        <>
          <h2>Featured Videos</h2>
          <ul>
            <li>AVNL Corporate Film, 03:42, Uploaded 12 Aug 2024</li>
            <li>T-90 Bhishma Mk-III Handover Ceremony, 05:18, Uploaded 14 May 2024</li>
            <li>BMP-II Production at OFMK Medak, 07:25, Uploaded 22 Mar 2024</li>
            <li>Inside Heavy Vehicles Factory, Avadi, 09:10, Uploaded 30 Sep 2023</li>
          </ul>
          <p>All videos are also published on AVNL's official YouTube channel with closed captions in English and Hindi.</p>
        </>
      }
    />
  );
}
