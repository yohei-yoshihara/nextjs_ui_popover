"use client";
import { useOutsideClick } from "@/app/lib/use-outside-click";

export default function MyComponent() {
  const ref = useOutsideClick(() => {
    console.log("Clicked outside of MyComponent");
  });

  return <div ref={ref}>My Component</div>;
}
