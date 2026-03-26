import { Heart } from "lucide-react";

const HeartDivider = () => (
  <div className="flex items-center justify-center gap-4 py-8">
    <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-rose-light" />
    <Heart className="text-primary animate-heartbeat" size={20} fill="currentColor" />
    <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-rose-light" />
  </div>
);

export default HeartDivider;
