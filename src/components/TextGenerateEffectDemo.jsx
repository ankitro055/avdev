 "use client";
import  TextGenerateEffect  from "@/components/TextGenerateEffect";

const words = `Na'imton: Har lafz ka apna jadoo hota hai. Is effect ke zariye aap har baat ko ehsaas ke sath bayan kar sakte hain.`;

export function TextGenerateEffectDemo() {
  return (
    <div className="p-6 bg-black min-h-screen flex items-center justify-center">
      <TextGenerateEffect words={words} />
    </div>
  );
}
