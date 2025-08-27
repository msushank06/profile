import GradientButton from "@/components/GradientButton";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-3xl font-bold">Welcome</h1>
      
      <GradientButton size="lg" variant="default">
        Default Button
      </GradientButton>

      <GradientButton size="md" variant="outline" glowEffect={false}>
        Outline Button
      </GradientButton>

      <GradientButton size="sm" variant="ghost">
        Ghost Button
      </GradientButton>
    </div>
  );
}
